'use client'

import { cart_atom } from "@/atoms/index";
import { CartItemProps } from "@/types/CartTypes";
import { ProductProps } from "@/types/ProductTypes";
import { getProductDetailWithCustomize } from "@/utils/LibFunctions";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { VariableButton } from "../Core";
import { ItemDetailWithAddOnPopup } from "./PopUps";

const CartListItem = ({ data, addToCart }: {data: CartItemProps, addToCart: Function}) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [CustomizeData, setCustomizeData] = useState<ProductProps>();
    const [customize_type, set_customize_type] = useState<"increment" | "self">("increment");
    const CartData = useRecoilValue(cart_atom);

    useEffect(() => {
        if(data.is_customized) {
            fetchCustomizeProduct(data.product_id); 
        }
    }, [CartData]);

    async function fetchCustomizeProduct(id: number) {
        var resp = await getProductDetailWithCustomize(id);
        if(resp && resp.status) {
            setCustomizeData(resp.result);
        }
    }

    function handleCustomizeClick(type: "self" | "increment") {
        return function() {
            set_customize_type(() => type);
            setTimeout(() => setShowPopup(() => true), 100);
        }
    }

    return (
        <div className='w-full flex items-center justify-between space-x-4'>
            <div className='max-sm:w-[70%] flex items-center space-x-4'>
                <Image
                    src={BaseUrl + "public" + CustomizeData?.thumbnail}
                    alt='Product'
                    quality={100}
                    width={130}
                    height={130}
                    priority
                    className='max-sm:w-[40%] max-w-[150px] min-w-[150px] rounded-full overflow-hidden'
                />

                <div className='flex-grow flex-shrink space-y-2'>
                    <h6 className='font-rubik whitespace-pre-wrap font-semibold max-sm:text-base'>
                        {data?.product_name}
                        {
                            data.coupon_discount_amount ? 
                            <span className="ml-2 bg-primary-red text-white px-2 text-sm">{data.coupon_discount_amount?.toFixed(2)} OFF</span> 
                            : ""
                        }
                        {data.is_customized && <p className="text-xs flex items-center gap-2 flex-wrap my-1">
                            {
                                Array.isArray(data.cart_customized_data) &&
                                data.cart_customized_data.map((ccd, i) => (
                                    <span key={i} className="text-xs shadow p-1 px-2 rounded">{ccd.title}</span>
                                ))
                            }
                        </p>}
                        {(data.is_customized && !data.isOfferItem) ? <p className="text-xs text-primary-red cursor-pointer" onClick={handleCustomizeClick("self")}>Customize</p> : ""}
                    </h6>

                    <p className='font-rubik text-primary-red font-semibold text-lg'>
                        ₹ {Math.round(data?.price)}
                    </p>
                </div>
            </div>

            <VariableButton
                value={data?.qty}
                onDecrease={() => {
                    var _data = {...data} as any;
                    _data.qty = data?.qty - 1;
                    _data.id = data.product_id;
                    if(_data.qty == 0) {
                        _data.remove_item = true;   
                    }
                    addToCart(_data);
                }}
                onIncrease={() => {
                    if(data.is_customized) {
                        handleCustomizeClick("increment")();
                        // console.log({data, CustomizeData})
                    }
                    else {
                        var _data = {...data};
                        _data.qty = data?.qty + 1;
                        _data.id = data.product_id;
                        addToCart(_data);
                    }
                }}
            />

            {showPopup && CustomizeData && (
                <ItemDetailWithAddOnPopup
                    key={showPopup ? Math.random() : Math.random()}
                    productInfo={CustomizeData}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    addToCart={addToCart as any}
                    cart_item={customize_type === "self" ? data : undefined}
                />
            )}
        </div>
    )
}

export default CartListItem;