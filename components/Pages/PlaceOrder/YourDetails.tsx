'use client'

import { address_atom } from "@/atoms/index";
import { Button, Divider, Input, TextArea } from "@/components/Core";
import { PlaceOrderProps } from "@/types/PlaceOrderProps";
import { myAddress } from "@/utils/LibFunctions";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const AddressUpdatePopup = dynamic(() => import('@/components/Common/PopUps').then(mod => mod.AddressUpdatePopup));

const YourDetails = ({ selectedAddress, setSelectedAddress, scheduleAvailable, CartData, onChange, formValues, locationData }: { selectedAddress: any, setSelectedAddress: any, scheduleAvailable: number, CartData: any, onChange: Function, formValues: PlaceOrderProps, locationData: any[] }) => {
    const [showAddress, setShowAddress] = useState(false);
    const [deliveryType, setDeliveryType] = useState(formValues?.delivery || "now");
    const [UserAddresses, setUserAddresses] = useRecoilState(address_atom);
    // const [selectedAddress, setSelectedAddress] = useState<any>(null);

    async function fetchAddresses() {
        let response = await myAddress();
        // console.log({ response })
        if(response?.status) {
            let addresses = response.result.data;
            setUserAddresses(addresses);
            var addr = addresses.find((ad: any) => ad.is_default);
            if(CartData?.order_type != "pickup") {
                setSelectedAddress(addr);
                onChange('selected_address', addr?.id);
            }
        }
    }

    useEffect(() => {
        fetchAddresses();
    }, [])

    const dateValidate = (value: any) => {
        var ToDate = new Date();
        if (new Date(value).setHours(0, 0, 0, 0) < ToDate.setHours(0, 0, 0, 0)) {
            alert("The Date must be Bigger or Equal to today date");
            // window.$("#schedule_date").val("");
            onChange("schedule_date", "");
            return false;
        }
        return true;
    }

    return (
        <>
            <section className='w-full sm:px-8 px-3'>
                <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                    <Divider title='your Details' />

                    {
                        CartData?.order_type === "delivery" && <div>
                            {selectedAddress && <TextArea
                                rows={3}
                                required
                                placeholder='Address'
                                className='resize-none'
                                value={`${selectedAddress?.name}, ${selectedAddress?.address_1}, ${selectedAddress?.address_2}, ${selectedAddress?.landmark}, ${selectedAddress?.city}, ${selectedAddress?.state}, ${selectedAddress?.pincode}`}
                            />}
                            <Button
                                title='Change Address'
                                className='max-w-fit mx-auto block'
                                onClick={() => {setShowAddress(true)}}
                            />
                        </div>
                    }

                    {
                        scheduleAvailable &&
                        <>
                        { 
                            <div className='max-w-xl w-full mx-auto space-y-4'>
                                {
                                    CartData?.order_type === 'delivery' &&
                                    <div className='w-full space-y-2'>
                                        <h4 className='font-rubik font-bold text-center'>
                                            SCHEDULE
                                        </h4>

                                        <div className='flex items-center justify-center w-full space-x-4'>
                                            <div className='flex items-center space-x-2'>
                                                <input type='radio' id='schedule_yes' checked={deliveryType == 'later'} onChange={() => {setDeliveryType('later'); onChange('delivery', 'later')}} name='schedule' className='outline-none border-none accent-primary-red' />
                                                <label htmlFor='schedule_yes' className='font-rubik'>Yes</label>
                                            </div>

                                            <div className='flex items-center space-x-2'>
                                                <input type='radio' id='schedule_no' checked={deliveryType == 'now'} onChange={() => {setDeliveryType('now'); onChange('delivery', 'now');}} name='schedule' className='outline-none border-none accent-primary-red' />
                                                <label htmlFor='schedule_no' className='font-rubik'>No</label>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    (deliveryType === 'later' || CartData?.order_type === 'pickup') && 
                                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-4'>
                                        <Input
                                            type='date'
                                            required
                                            placeholder='Date'
                                            value={formValues?.schedule_date}
                                            onChange={e => {onChange('schedule_date', e.target.value); dateValidate(e.target.value);}}
                                        />

                                        <Input
                                            type='time'
                                            required
                                            placeholder='Time'
                                            value={formValues?.schedule_time}
                                            onChange={e => onChange('schedule_time', e.target.value)}
                                        />
                                    </div>
                                }
                            </div>
                        }
                        </>
                    }

                    {
                        CartData?.order_type === "pickup" && <>
                        {
                            locationData
                                ?
                                <>
                                    <div className="max-w-xl w-full mx-auto space-y-1">
                                        <label>Select location as per your choice</label>
                                        <select className="w-full rounded py-1 px-2 ring-1 ring-gray-500" name="location_id" value={formValues?.location_id} onChange={e => onChange('location_id', e.target.value)}>
                                            <option value={""}>Select Location</option>
                                            {
                                                locationData.map(function (outletData, outletKey) {
                                                    return (
                                                        <option key={outletKey} value={outletData.id} selected={false}>
                                                            {outletData.name}
                                                            {
                                                                outletData.distance ? "(" + outletData.distance + " km away)" : null
                                                            }
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {/* {
                                            errors.location_id ? <p className="error">This field is required</p> : null
                                        } */}
                                    </div>
                                    {/* <div className="grid">
                                        <label>Name<span style={{ color: "red" }}>*</span> :</label>
                                        <input type="text" name="name" placeholder="First Name and Last Name" />
                                    </div> */}
                                    <div className='max-w-xl w-full mx-auto space-y-4'>
                                        <Input
                                            type='text'
                                            placeholder='Name'
                                            required
                                            value={formValues?.name}
                                            onChange={e => onChange('name', e.target.value)}
                                        />

                                        {/* <Input
                                            type='number'
                                            placeholder='Contact no.'
                                            required
                                            // value={selectedAddress?.name}
                                        /> */}
                                    </div>
                                </>
                                :
                                null
                        }
                        </>
                    }
                </div>
            </section>

            {showAddress && (
                <AddressUpdatePopup
                    fetchAddresses={fetchAddresses}
                    UserAddresses={UserAddresses}
                    showPopup={showAddress}
                    setShowPopup={setShowAddress}
                />
            )}
        </>
    )
}

export default YourDetails;