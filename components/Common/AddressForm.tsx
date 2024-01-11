'use client'

import { AddressSubmitType } from "@/types/PopUpsTypes";
import { addAddress, updateAddress } from "@/utils/LibFunctions";
import gsap from "gsap";
import { FormEvent, useEffect, useState } from "react";
import { Button, Input } from "../Core";

const headers = ['Home', 'Work', 'Other'];
type default_vals = {
    id?: number
    name: string
    address_1: string
    city: string
    state: string
    address_2: string
    pincode: string
    landmark: string
    is_default: string
}

const AddressForm = ({ vals, setVals, onSubmit, setClose, fetchAddresses }: { vals: default_vals, setVals: any, onSubmit: AddressSubmitType, setClose: Function, fetchAddresses: Function }) => {
    // const [vals, setVals] = useState(default_vals);
    const [selected_header, setSelected_header] = useState(headers[0]);

    useEffect(() => {
        if (window !== undefined) {
            gsap.to('#address_form', { duration: 0.5, opacity: 1 });
        }
    }, [])

    const handleChange = (field: string, newVal: string | number) => setVals({ ...vals, [field]: newVal });

    const SaveAddress = async (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        if (!vals.address_1 || !vals.city || !vals.pincode || !vals.state) return;

        var res = false as any;
        if(vals.id) {
            res = await updateAddress(vals);
        }
        else {
            res = await addAddress(vals);
        }

        if(res && res.status) {
            await fetchAddresses();
            onSubmit(1, setClose);
        }
    }

    return (
        <form id='address_form' className='w-full space-y-4' onSubmit={SaveAddress}>
            <h2 className='text-lg font-bold font-rubik normal-case'>
                Save Address as*
            </h2>

            {/* <div className='flex items-center space-x-4'>
                {headers.map((x) => (
                    <Selector
                        key={x}
                        title={x}
                        selected={selected_header === x}
                        onClick={() => setSelected_header(x)}
                    />
                ))}
            </div> */}

            <div className='w-full space-y-3 !mt-6'>
                <Input
                    type='text'
                    placeholder='Name'
                    value={vals.name}
                    onChange={(e) => handleChange('name', e?.target?.value)}
                />

                <Input
                    type='text'
                    placeholder='House no./Flat/Buidling'
                    value={vals.address_1}
                    onChange={(e) => handleChange('address_1', e?.target?.value)}
                />

                <Input
                    type='text'
                    placeholder='Street/Area/Sector*'
                    required
                    value={vals.address_2}
                    onChange={(e) => handleChange('address_2', e?.target?.value)}
                />

                <Input
                    type='text'
                    placeholder='City*'
                    required
                    value={vals.city}
                    onChange={(e) => handleChange('city', e?.target?.value)}
                />

                <Input
                    type='text'
                    placeholder='State*'
                    required
                    value={vals.state}
                    onChange={(e) => handleChange('state', e?.target?.value)}
                />

                <Input
                    type='number'
                    placeholder='Pincode*'
                    required
                    value={vals.pincode}
                    onChange={(e) => handleChange('pincode', e?.target?.value)}
                />

                <Input
                    type='text'
                    placeholder='Landmark (optional)'
                    value={vals.landmark}
                    onChange={(e) => handleChange('landmark', e?.target?.value)}
                />
            </div>

            <div className='w-full space-y-2'>
                <h6 className='font-rubik font-medium normal-case text-lg'>
                    Is Default ?
                </h6>

                <div className='flex items-center space-x-4 pl-4'>
                    <div className='flex items-center space-x-2'>
                        <input type='radio' id='address_default_yes' value={'1'} checked={vals.is_default == '1'} onChange={() => handleChange('is_default', '1')} name='address_default' className='outline-none border-none accent-primary-red' />
                        <label htmlFor='address_default_yes' className='font-rubik'>Yes</label>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <input type='radio' id='address_default_no' value={'0'} checked={vals.is_default == '0'} onChange={() => handleChange('is_default', '0')} name='address_default' className='outline-none border-none accent-primary-red' />
                        <label htmlFor='address_default_no' className='font-rubik'>No</label>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <Button
                    type='submit'
                    title='Save Address'
                    className='max-w-fit mx-auto block normal-case'
                    onClick={() => onSubmit(0)}
                />
                <Button
                    type='button'
                    title='Back'
                    className='max-w-fit mx-auto block normal-case'
                    onClick={() => onSubmit(0)}
                />
            </div>
        </form>
    )
}

export default AddressForm;

const Selector = ({ title, onClick, selected }: { title: string, onClick: Function, selected: boolean }) => {
    return (
        <Button
            type='button'
            title={title}
            onClick={() => onClick()}
            className={`font-normal normal-case border ${selected ? 'border-transparent bg-primary-red text-white' : 'border-secondary-border-grey !text-secondary-border-grey bg-transparent'} transition-all duration-300`}
        />
    )
}