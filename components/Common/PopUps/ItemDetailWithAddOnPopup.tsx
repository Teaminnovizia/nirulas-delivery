import { cart_atom } from "@/atoms/index";
import { Button, Checkbox } from "@/components/Core";
import { toastOptions } from "@/components/Layout";
import GreenRectIcon from "@/icons/GreenRectIcon";
import { CartItemProps } from "@/types/CartTypes";
import { AddOnItemProps, AddOnProps } from "@/types/CustomizeProps";
import { CommonProps } from "@/types/PopUpsTypes";
import { ProductProps } from "@/types/ProductTypes";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import PopupContainer from "./PopupContainer";

const ItemDetailWithAddOnPopup = ({ showPopup, setShowPopup, productInfo, addToCart, cart_item }: { addToCart: (data: any, done?: (error?: string) => void) => void, productInfo: ProductProps, cart_item?: CartItemProps } & CommonProps) => {
    const [selectedBase, setSelectedbase] = useState<AddOnItemProps | null | undefined>(null);
    const [baseData, setBaseData] = useState<AddOnProps>();
    const [AddOnData, setAddOnData] = useState<AddOnProps[]>([]);
    const [CustomizeData, setCustomizeData] = useState<number[]>([]);
    const [TotalPrice, setTotalPrice] = useState<number>(0);
    const CartData = useRecoilValue(cart_atom);

    useEffect(() => {
        // get base data and select the base
        if(productInfo) {
            // var _cust_data = productInfo.customize_data.find((cd: any) => !cd.is_base);
            // setAddOnData(() => _cust_data);

            var _bases = productInfo.customize_data.find((cd: any) => cd.is_base);

            if(_bases?.item) {
                if(!cart_item) {
                    let _selected_base = _bases?.item?.find((bt: any) => bt?.price === productInfo?.price);
                    setSelectedbase(() => _selected_base);
                }
                else {
                    let cart_cust_data = cart_item.cart_customized_data;
                    let _cart_base = cart_cust_data.find(ccd => ccd.is_base);
                    let _selected_base = _bases?.item?.find((bt) => bt?.id === _cart_base?.customize_item_id);
                    setSelectedbase(() => _selected_base);
                }
            }
            setBaseData(_bases);
        }

        // return () => {
        //     setAddOnData([]);
        //     setBaseData(undefined);
        //     setSelectedbase(null);
        //     setCustomizeData([]);
        //     setTotalPrice(0);
        // }
    }, [productInfo])

    useEffect(() => {
        // after base select or change, add on filter logic to show
        if(selectedBase) {
            console.log({selectedBase});
            // after base select logic
            let veg_topping_id = null as number | null;
            let non_veg_topping_id = null as number | null;
            if('veg_topping_id' in selectedBase && selectedBase.veg_topping_id) {
                veg_topping_id = selectedBase.veg_topping_id;
            }
            if('non_veg_id' in selectedBase && selectedBase.non_veg_id) {
                non_veg_topping_id = selectedBase.non_veg_id;
            }

            var _cust_data = productInfo.customize_data.filter((cd: any) => !cd.is_base);
            
            if(veg_topping_id && non_veg_topping_id) {
                _cust_data = _cust_data.filter((obj: any) => parseInt(obj.id) === Number(veg_topping_id) || parseInt(obj.id) === Number(non_veg_topping_id))
            }

            console.log({_cust_data})
            setAddOnData(_cust_data);

        }
    }, [selectedBase])

    useMemo(() => {
        // calculate total price for selected customize base with add ons
        if(selectedBase?.id) {
            var total = 0;

            if(productInfo.is_bogo_product) {
                let allSelectPrice: number[] = [Math.round(selectedBase.price)];

                if(CustomizeData.length) {
                    for(const addOn of AddOnData) {
                        for(const addOnitem of addOn.item) {
                            var exist = CustomizeData.some(cd => addOnitem.id == cd);
                            if(exist) {
                                allSelectPrice.push(Math.round(addOnitem.price));
                            }
                        }
                    }
                }
                
                allSelectPrice.sort(function (a, b) {
                    return b - a;
                });
                
                total = allSelectPrice?.[0] || 0;
            }
            else {
                total += Math.round(selectedBase.price);

                if(CustomizeData.length) {
                    for(const addOn of AddOnData) {
                        for(const addOnitem of addOn.item) {
                            let exist = CustomizeData.some(cd => addOnitem.id == cd);
                            if(exist) {
                                total += Math.round(addOnitem.price);
                            }
                        }
                    }
                }
            }
            
            setTotalPrice(total);   
        }
    }, [selectedBase, CustomizeData])

    useMemo(() => {
        // set cart customize data for edit cart customize item
        if(!cart_item) return;

        let cust_data = cart_item.cart_customized_data.filter(ccd => !ccd.is_base);
        if(cust_data) {
            let ids = cust_data.map(cd => cd.customize_item_id);
            setCustomizeData(ids);
        }
    }, [cart_item])

    function onBaseclick(_base: AddOnItemProps) {
        setSelectedbase(_base);
        setCustomizeData([]);
    }

    function handleAddToCart() {
        // handle cart submit

        if(!selectedBase) {
            return toast.error("Select atleast 1 base", toastOptions);
        }

        var isLimitedData = AddOnData.filter(addon => addon.is_limited);

        if(isLimitedData.length) {
            for (const AddOnItem of isLimitedData) {
                var customs = CustomizeData.filter(cd => AddOnItem.item.some(ci => ci.id == cd));
                if(customs.length < AddOnItem.is_limited) {
                    toast.error(`Only ${AddOnItem.is_limited} option allowed`, toastOptions);
                    return false;
                }
            }
        }

        const pinfo = { ...productInfo, new_customize_data: [...CustomizeData, selectedBase?.id] } as any;

        if(CartData) {
            var entries = CartData.carts_items.filter((ci: CartItemProps) => ci.id == productInfo.id);
            if(!cart_item) {
                pinfo.qty = entries.length + 1;
            }
            else {
                pinfo.cart_item_id = cart_item.id;
            }
        }

        addToCart(pinfo, () => {
            setShowPopup(false);
        });
    }

    return (
        <PopupContainer
            maxWidth='1000px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-4 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:auto-rows-auto w-full gap-5'>
                        <div className='w-full space-y-6 relative max-w-sm mx-auto'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute lg:-left-5 left-0 text-primary-red cursor-pointer -top-3 text-2xl'
                            />

                            <div className='max-w-[80%] w-full max-md:mx-auto flex items-center max-md:justify-center justify-start'>
                                <Image
                                    src={`${BaseUrl}public${productInfo?.thumbnail}`}
                                    alt='Burger'
                                    quality={100}
                                    width={320}
                                    height={320}
                                    priority
                                // className='rounded-full overflow-visible'
                                />
                            </div>

                            <div>
                                <h2 className='text-2xl text-left font-rubik'>
                                    {productInfo?.name}
                                </h2>

                                <h2 className='text-2xl text-left font-rubik'>
                                    {/* ₹ {productInfo?.price} */}
                                    ₹ {TotalPrice}
                                </h2>
                            </div>

                            <div className='w-full space-y-3'>
                                <p className='font-rubik text-normal-grey text-justify capitalize text-[13px]'>
                                    {productInfo?.clean_description}
                                </p>

                                <span className='w-full h-0.5 bg-primary-red flex-shrink-0 flex' />

                                {/* <Button title='Add to cart' className='max-w-fit w-full mx-auto !mt-6' /> */}
                                <Button 
                                // href='/cart'
                                onClick={handleAddToCart} 
                                title='Add to cart' className='max-w-fit w-full mx-auto !mt-6'
                                />
                            </div>
                        </div>

                        <div className='w-full space-y-6 max-w-sm mx-auto'>
                            <div className='w-full space-y-4'>
                                <h5 className='normal-case font-rubik font-bold'>
                                    Customize
                                </h5>

                                <div className='max-w-full w-full overflow-x-scroll'>
                                    <div className='w-full flex items-center space-x-2'>
                                        {
                                            baseData?.item?.map((base: any, i: number) => <ItemVarient base={base} key={i} onClick={onBaseclick} selectedBase={selectedBase} />)
                                        }
                                    </div>
                                </div>
                            </div>

                            {
                                AddOnData.map((cust, i) => <div key={i} className='w-full space-y-4'>
                                <h5 className='font-rubik font-bold'>
                                    {cust?.type}
                                </h5>

                                <div className='w-full space-y-2 md:pl-4'>
                                    {
                                        cust?.item?.map((citem: AddOnItemProps, _i: number) => <ToppingItem 
                                            key={_i} 
                                            data={citem}
                                            cust={cust}
                                            isNonVeg={cust?.type?.toLowerCase()?.includes("non-veg")}
                                            CustomizeData={CustomizeData}
                                            setCustomizeData={setCustomizeData}
                                        />)
                                    }
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default ItemDetailWithAddOnPopup;

const ItemVarient = ({ base, selectedBase, onClick }: { base: AddOnItemProps, selectedBase: AddOnItemProps | null | undefined, onClick: Function }) => {
    return (
        <div className={`rounded-2xl p-3 border border-[#AAAAAA] space-y-2 w-fit flex-shrink-0 cursor-pointer ${selectedBase?.id == base.id && 'bg-red-300'}`} onClick={() => onClick(base)}>
            <Image
                src='/Images/menu/burger-6.jpeg'
                alt='Burger'
                quality={100}
                width={70}
                height={70}
                loading='lazy'
            />

            <div className='space-y-1'>
                <h5 className='normal-case font-rubik font-medium text-base'>
                    {base?.title}
                </h5>

                {
                    base?.show_price && <h6 className='normal-case font-rubik font-medium'>
                        ₹ {Math.round(base?.price)}
                    </h6>
                }
                
            </div>
        </div>
    )
}

const ToppingItem = ({ data, CustomizeData, setCustomizeData, cust, isNonVeg = false }: { data: AddOnItemProps, CustomizeData: number[], setCustomizeData: Dispatch<SetStateAction<number[]>>, cust: AddOnProps, isNonVeg?: boolean }) => {

    function handleToppingSelect (type: "checkbox" | "radio") {
        return function(e: any) {
            const checked = e.target.checked as boolean;
            if(type == "checkbox") {
                if(!checked) {
                // console.log("not checked")
                setCustomizeData(CustomizeData.filter((cd) => data.id != cd));
                return;
            }

            var customs = CustomizeData.filter(cd => cust.item.some(ci => ci.id == cd));
            // console.log({customs})

            if(cust.is_limited) {
                if((customs?.length || 0) >= cust.is_limited) {
                    e.target.checked = false;
                    toast.error(`Only ${cust.is_limited} option allowed`, toastOptions);
                    return false;
                }
            }

            if(cust.max) {
                if((customs?.length || 0) >= cust.max) {
                    e.target.checked = false;
                    toast.error(`Only ${cust.max} option allowed`, toastOptions);
                    return false;
                }
            }

            // if(true) {
            //     // console.log('condition check', (customs?.length || 0), 1, (customs?.length || 0) >= 1)
            //     if((customs?.length || 0) >= 1) {
            //         e.target.checked = false;
            //         toast.error(`Only ${1} option allowed`, toastOptions);
            //         return false;
            //     }
            // }

            setCustomizeData([...CustomizeData, data.id]);
        }
     }
    }

    return (
        <div className='flex w-full justify-between items-center space-x-3'>
            <div className='flex items-center space-x-2'>
                <GreenRectIcon width={15} height={15} isNonVeg={isNonVeg} />

                <p className='font-rubik'>
                    {data?.title || "Topping"}
                </p>
            </div>

            {
                // (cust.is_limited || cust.is_multiple_select || cust.max) ?
                <Checkbox
                    checked={CustomizeData.some(cd => cd == data.id)}
                    data={data}
                    CustomizeData={CustomizeData}
                    setCustomizeData={setCustomizeData}
                    onChange={handleToppingSelect("checkbox")}
                /> 
                // : <RadioButton data={data} onChange={(e) => console.log("change", e.target.checked, e)} />
            }
        </div>
    )
}