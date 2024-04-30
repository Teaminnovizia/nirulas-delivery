"use client"

import { cart_atom } from "@/atoms/index";
import StarIcon from "@/icons/StarIcon";
import { MenuItemProps } from "@/types/MenuTypes";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "./Button";
import VariableButton from "./VariableButton";

const MenuItem = ({ data, addToCart, ...restProps }: { data: PropsType, addToCart: Function } & MenuItemProps) => {
    const [CartData, setCartData] = useRecoilState(cart_atom);
    const [isInCart, setIsInCart] = useState<any>(null);

    useEffect(() => {
        if(!CartData) return;
        var cart = CartData.carts_items.find((cd: any) => cd.product_id == data.id) as any;
        // console.log({CartData, cart})
        setIsInCart(cart);
    }, [CartData])
    
    return (
        <div
            className='flex rounded-2xl w-full h-full bg-white flex-col gap-2 overflow-hidden'
            style={{ boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.02), 0px 4px 16px 3px rgba(0, 0, 0, 0.05)' }}
        >
            <div onClick={() => restProps.setShowItemDetail(data)} className='relative w-full aspect-[16/8] cursor-pointer'>
                <Image
                    src={BaseUrl + "public" + data.thumbnail}
                    alt={data.name}
                    quality={100}
                    fill
                    loading='lazy'
                    className='object-cover'
                />
            </div>

            <div className='sm:px-8 px-4 sm:py-6 py-4 w-full space-y-2'>
                <div className='flex items-center w-full justify-between gap-4'>
                    <h4 className='font-rubik text-normal-black normal-case font-bold md:text-3xl text-2xl'>
                        {data.name}
                    </h4>

                    {
                        isInCart && isInCart?.qty > 0 && isInCart?.is_customized == 0 ?
                        <VariableButton
                            value={isInCart.qty}
                            onDecrease={() => {
                                var _data = {...data};
                                _data.qty = isInCart?.qty - 1;
                                if(_data.qty == 0) {
                                 _data.remove_item = true;   
                                }
                                addToCart(_data)
                            }}
                            onIncrease={() => {
                                if(data.is_customizable == 1) {
                                    restProps.setShowItemDetailWithAddOn(data)
                                }
                                else {
                                    var _data = {...data};
                                    _data.qty = isInCart?.qty + 1;
                                    addToCart(_data)
                                }
                            }}
                        /> :
                        <div>
                            <Button title="ADD" onClick={() => {
                                if(data.is_customizable == 1) {
                                    restProps.setShowItemDetailWithAddOn(data)
                                }
                                else {
                                    addToCart(data);
                                }
                            }} />
                            {data.is_customizable == 1 && <p className="text-xs text-center mt-1 text-primary-red">Customize</p>}
                        </div>
                    }

                    
                    
                </div>

                <div className='flex items-center gap-4'>
                    <h5 className='font-rubik normal-case font-bold md:text-3xl text-2xl text-primary-red'>
                        ₹{Math.round(data.price)}
                    </h5>

                    <div className='flex items-center gap-1'>
                        <div className={`flex items-center justify-center flex-shrink-0 border border-primary-${data.is_non_veg ? "red" : "green"} rounded-sm p-1`}>
                            <span className={`w-3 h-3 rounded-full bg-primary-${data.is_non_veg ? "red" : "green"}`} />
                        </div>

                        {
                            data?.recommended && <StarIcon width={28} height={28} />
                        }
                    </div>
                </div>

                <p className='font-rubik font-normal text-justify'>
                    {data.clean_description}
                </p>
            </div>
        </div>
    )
}

export default MenuItem;

// ***temp type***
interface PropsType {
    id: string
    name: string
    thumbnail: string
    price: number
    description: string
    clean_description: string
    is_customizable: number
    qty?: number
    remove_item?: boolean
    is_non_veg: number
    is_bestseller: number
}