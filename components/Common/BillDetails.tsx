"use client"

import { useEffect, useState } from "react";
import { Divider, LinkButton } from "../Core";

const BillDetails = ({ CartData }: { CartData: any }) => {
    const [savedAmount, setSavedAmount] = useState<number | string>(0);

    useEffect(() => {
        if (CartData) {
            let subtotal = CartData.subtotal
            let convenience_fee = CartData.convenience_fee
            let applied_coins = CartData.applied_coins
            let offer_discount = CartData.offer_discount

            let saved_amount = 0;
            if (CartData.order_type !== 'delivery') {
                convenience_fee = parseFloat(String(((subtotal / 100) * 10)));
                if (convenience_fee < 50) {
                    convenience_fee = 50;
                }
                saved_amount += parseFloat(convenience_fee);
            }

            if (applied_coins) {
                saved_amount += parseFloat(applied_coins);
            }

            if (offer_discount) {
                saved_amount += parseFloat(offer_discount);
            }
            // console.log(saved_amount, "saved_amount");
            setSavedAmount(saved_amount.toFixed(2));
        }
    }, [CartData])

    return (
        <div className='space-y-6 w-full'>
            <Divider />

            <div className='space-y-3 w-full sm:px-4'>
                <h5 className='font-rubik normal-case font-bold'>
                    Bill Details
                </h5>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik normal-case text-lg font-medium'>
                        Item Total
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ {CartData?.subtotal}
                    </p>
                </div>

                {
                    Number(CartData.offer_discount)
                        ?
                        <div className='flex items-center w-full justify-between space-x-3'>
                            <h6 className='font-rubik normal-case text-lg font-medium'>
                                Discount
                            </h6>

                            <p className='font-rubik text-lg font-medium'>
                                - ₹ {CartData.offer_discount}
                            </p>
                        </div>
                        :
                        null
                }
                {
                    Number(CartData.applied_coins)
                        ?
                        <div className='flex items-center w-full justify-between space-x-3'>
                            <h6 className='font-rubik normal-case text-lg font-medium'>
                                Loyalty Points
                            </h6>

                            <p className='font-rubik text-lg font-medium'>
                                - ₹ {CartData.applied_coins}
                            </p>
                        </div>
                        :
                        null
                }

                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik normal-case text-lg font-medium'>
                        Convenience Fee
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ {CartData?.convenience_fee}
                    </p>
                </div>
            </div>

            <Divider />

            <div className='space-y-3 w-full sm:px-4'>
                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik text-lg font-medium'>
                        Total
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ {Number((CartData.subtotal + CartData.convenience_fee) - (CartData.offer_discount + CartData.applied_coins)).toFixed(2)}
                    </p>
                </div>

                {
                    CartData?.cgst9 && <>
                    <div className='flex items-center w-full justify-between space-x-3'>
                        <p className='font-rubik text-lg'>
                            CGST(9%)
                        </p>

                        <p className='font-rubik text-lg'>
                            ₹ {parseFloat(String(CartData.cgst9)).toFixed(2)}
                        </p>
                    </div>

                    <div className='flex items-center w-full justify-between space-x-3'>
                        <p className='font-rubik text-lg'>
                            SGST(9%)
                        </p>

                        <p className='font-rubik text-lg'>
                            ₹ {parseFloat(String(CartData.sgst9)).toFixed(2)}
                        </p>
                    </div>
                    </>
                }

                {
                    CartData?.cgst2 && <>
                    <div className='flex items-center w-full justify-between space-x-3'>
                        <p className='font-rubik text-lg'>
                            CGST(2.5%)
                        </p>

                        <p className='font-rubik text-lg'>
                            ₹ {parseFloat(String(CartData.cgst2)).toFixed(2)}
                        </p>
                    </div>

                    <div className='flex items-center w-full justify-between space-x-3'>
                        <p className='font-rubik text-lg'>
                            SGST(2.5%)
                        </p>

                        <p className='font-rubik text-lg'>
                            ₹ {parseFloat(String(CartData.sgst2)).toFixed(2)}
                        </p>
                    </div>
                    </>
                }
                
            </div>

            <Divider />

            {
                Number(CartData.tip)
                    ?
                    <div className='flex items-center w-full justify-between space-x-3'>
                        <p className='font-rubik text-lg'>
                            Tip
                        </p>

                        <p className='font-rubik text-lg'>
                            ₹ {CartData.tip}
                        </p>
                    </div>
                    :
                    null
            }

            <div className='flex items-center w-full justify-between space-x-3 sm:px-4'>
                <h5 className='font-rubik text-xl font-bold'>
                    TO PAY
                </h5>

                <p className='font-rubik text-xl font-bold'>
                    ₹ {Math.round(CartData.grand_total)}
                </p>
            </div>

            {
                Number(savedAmount) > 10
                    ?
                    <div className="w-fit float-right">
                        <div className="bg-green-700 text-white"> You are saving <strong>₹ {savedAmount}</strong> on this order. </div>
                    </div>
                    :
                    null
            }

            <div className='max-w-lg w-full mx-auto space-y-5 pt-5'>
                <textarea
                    rows={5}
                    placeholder='add cooking instructions'
                    className='capitalize text-black placeholder:text-black font-medium placeholder:font-medium font-rubik rounded-lg resize-none outline-none border border-black p-2 w-full'
                />

                <LinkButton href='/place-order' title='confirm order' className='max-w-fit block mx-auto' />
            </div>

            <p className='font-semibold uppercase font-rubik text-lg text-center'>
                Note: Currently delivering in Delhi NCR between 11 AM to 04 AM Only.
            </p>
        </div>
    )
}

export default BillDetails;