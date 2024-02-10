'use client'

import { cart_atom, user_atom } from "@/atoms/index";
import { DealProps } from "@/types/DealTypes";
import { applyCouponApi, applyLoyaltyPointsApi, getCouponDeals, getUserByMobile, removeCouponApi, removeLoyaltyPointsApi } from "@/utils/LibFunctions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiDiscount1 } from 'react-icons/ci';
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { DropDown } from "../Core";
import { toastOptions } from "../Layout";
import OffersPopup from "./PopUps/OffersPopup";

// const deliver_options = ['delivery', 'pickup'];
const deliver_options = [
    // {
    //     label: "Dine In",
    //     value: 'delivery'
    // },
    {
        label: "Takeway",
        value: 'delivery'
    },
    {
        label: "Pickup",
        value: 'pickup'
    },
    {
        label: "Dine In",
        value: 'dinein'
    }
];
const tip_options = ['No Tip', '2', '5', '10', '20', '30', '40', '50'];

type deliveryChangeProps = (type: string) => Promise<boolean>
type TipChangeProps = (tip: string) => Promise<boolean | void>

const BillOptionsAndPromo = ({ deliveryChange, tipChange, fetchCarts }: { deliveryChange: deliveryChangeProps, tipChange: TipChangeProps, fetchCarts: Function }) => {
    const [selected_delivery, setSelected_delivery] = useState(deliver_options[0]);
    const [selected_tip, setSelected_tip] = useState(tip_options[0]);
    const [showOffers, setShowOffers] = useState(false);
    const [dealsData, setDealsData] = useState<DealProps[]>([]);
    const CartData = useRecoilValue(cart_atom);
    const [userData, setUserData] = useRecoilState(user_atom);

    async function fetchDealsFunction() {
        const fetchDeals = await getCouponDeals();
        if (fetchDeals && fetchDeals.status) {
            if (fetchDeals.result) {
                setDealsData(fetchDeals.result);
            }
        }
    }

    useEffect(() => {
        fetchDealsFunction();
    }, []);

    const applyCoupon = async (coupon: DealProps) => {
        try {
            setShowOffers(!showOffers)
            // setIsLoading(true);
            if (coupon) {
                let couponData = {
                    id: coupon.id,
                    cart_id: CartData.id
                }
                try {
                    const applyCouponRes = await applyCouponApi(couponData);
                    if (applyCouponRes && applyCouponRes.status) {
                        const getCartData = await fetchCarts();
                        // if (getCartData) {
                        //     if (getCartData) {
                        //         // window.$(".cartclick").css("opacity", "1");
                        //         // window.$(".menuflex span").addClass("counter");
                        //         // window.$(".menuflex span").text(getCartData.items_qty);
                        //         // window.$(".cartclick h4").text("View Cart");
                        //     } else {
                        //         // window.$(".cartclick").css("opacity", "0.8");
                        //         // window.$(".menuflex span").removeClass("counter");
                        //         // window.$(".menuflex span").text("");
                        //         // window.$(".cartclick h4").text("Cart");
                        //     }
                        //     // setProductData(getCartData);
                        // }
                        setShowOffers(false);
                        toast.success(applyCouponRes.message, toastOptions);
                        // alert("success: " + applyCouponRes.message);
                    } else {
                        toast.error(applyCouponRes?.message || "Something went wrong!", toastOptions);
                        // alert("error: " + applyCouponRes.message);
                    }
                } catch (error: any) {
                    toast.error(error?.message || "Something went wrong!", toastOptions);
                    // alert("error: " + error?.message);
                }
            } else {
                toast.error("Please select a coupon", toastOptions);
                // alert("error: " + "Please select a coupon");
            }
            // setIsLoading(false);
        } catch (error) {
            const getCartData = await fetchCarts();
            if(CartData) {
                if(coupon) {
                        let couponData = {
                            id: coupon.id,
                            cart_id: getCartData.id
                        }
                        try {
                            const applyCouponRes = await applyCouponApi(couponData);
                            if (applyCouponRes && applyCouponRes.status) {
                                await fetchCarts();
                                toast.success(applyCouponRes.message, toastOptions);
                                // alert("success: " + applyCouponRes.message);
                                setShowOffers(false);
                            }
                        } catch (error: any) {
                            toast.error(error?.message, toastOptions);
                            // alert("error: " + error?.message);
                        }
                }
                else {
                    toast.error("Please select a coupon", toastOptions);
                    // alert('error: ' + "Please select a coupon")
                }
            }
            
        }
    }

    const removeCoupon = async (cart_id: any) => {
        // setIsLoading(true);
        try {
            const removeCouponRes = await removeCouponApi({ cart_id: cart_id });
            if (removeCouponRes && removeCouponRes.status) {
                await fetchCarts();
                // const getCartData = await fetchCarts();
                // if (getCartData.data) {
                //     if (getCartData.data.result) {
                //         window.$(".cartclick").css("opacity", "1");
                //         window.$(".menuflex span").addClass("counter");
                //         window.$(".menuflex span").text(getCartData.data.result.items_qty);
                //         window.$(".cartclick h4").text("View Cart");
                //     } else {
                //         window.$(".cartclick").css("opacity", "0.8");
                //         window.$(".menuflex span").removeClass("counter");
                //         window.$(".menuflex span").text("");
                //         window.$(".cartclick h4").text("Cart");
                //     }
                //     setProductData(getCartData.data.result);
                // }
                toast.success(removeCouponRes.message, toastOptions);
                // alert("success: " + removeCouponRes.message);
            }
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong!", toastOptions);
            // alert("error: " + error?.message);
            // window.createNotification("error", error);
        }
        // setIsLoading(false);
    }

    const applyLoyaltyPoints = async () => {
        try {
            const res = await applyLoyaltyPointsApi();
            if (res && res.status) {
                // const getCartData = await getCartItem();
                // if (getCartData.data) {
                //     setProductData(getCartData.data.result);
                // }
                await fetchCarts();
                const fetchUser = await getUserByMobile();
                if (fetchUser.status) {
                    if (fetchUser.result) {
                        setUserData(fetchUser.result);
                    }
                }
                toast.success(res.message, toastOptions);
                // alert("success: " + res.message);
            } else {
                // alert("error: " + res?.message);
            }
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong!", toastOptions);
            // alert("error: " + error?.message);
        }
    }

    const removeLoyaltyPoints = async () => {
        try {
            const res = await removeLoyaltyPointsApi();
            if (res && res.status) {
                // const getCartData = await getCartItem();
                // if (getCartData.data) {
                //     setProductData(getCartData.data.result);
                // }
                await fetchCarts();
                const fetchUser = await getUserByMobile();
                if (fetchUser.status) {
                    if (fetchUser.result) {
                        setUserData(fetchUser.result);
                    }
                }
                toast.success(res.message, toastOptions);
                // alert("success: " + res.message);
            } else {
                // alert("error: " + res.message);
            }
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong!", toastOptions);
            // alert("error: " + error?.message);
        }
    }

    return (
        <>
            <div className='w-full sm:px-4 space-y-3'>
                
                <div className='w-full flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-2 max-sm:flex-col'>
                    <h5 className='font-rubik font-bold'>
                        Delivery
                    </h5>

                    {/* <DropDown
                        all_choices={deliver_options.map((_do: {value: string}) => _do.value)}
                        selected_val={CartData?.order_type || selected_delivery.value}
                        onChange={(newVal) => {
                            // setSelected_delivery(newVal);
                            deliveryChange(newVal)
                            .then(resp => resp && setSelected_delivery(newVal));
                        }}
                        containerClassName='max-sm:max-w-full'
                    /> */}
                    <select
                    className="relative outline-none flex max-w-[250px] w-full items-start justify-center bg-primary-red text-white rounded-xl py-2 px-3"
                    value={CartData?.order_type || selected_delivery.value}
                    onChange={e => {
                        let val = e.target.value;
                        deliveryChange(val)
                        .then(resp => {
                            var entry = deliver_options.find(_do => _do.value == val) as any;
                            resp && setSelected_delivery(entry)
                        });
                    }}>
                        {
                            deliver_options.map((_do, i) => <option className="bg-primary-red text-white hover:bg-primary-red py-2 px-3" key={i} value={_do.value}>{_do.label}</option>)
                        }
                    </select>
                </div>

                <div className='w-full flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-2 max-sm:flex-col'>
                    <h5 className='font-rubik font-bold'>
                        Tip
                    </h5>

                    <DropDown
                        all_choices={tip_options}
                        selected_val={selected_tip}
                        onChange={(newVal) => {
                            tipChange(newVal)
                            .then(resp => {
                                resp && setSelected_tip(newVal);
                            })
                        }}
                        containerClassName='max-sm:max-w-full'
                    />
                </div>

                <div>
                    {
                        CartData?.offer_id ?
                        <div className="flex md:w-1/2 shadow justify-around gap-3 py-2 rounded mx-auto rounded">
                            <div className="coupon-name flex items-center gap-2">
                                <Image src="https://api2.nirulas.com/nirulas-api/public/assets/images/promo_valid.svg" alt="OfferIcon" width={20} height={20} />
                                <span>{dealsData.filter((obj: any) => Number(obj.id) === Number(CartData?.offer_id)).map((x: any) => x.code)}</span>
                            </div>
                            <div className="right">
                                <button onClick={(e) => removeCoupon(CartData?.id)}>Remove</button>
                            </div>
                        </div> :
                        <div className='flex items-center justify-center w-full pt-4'>
                            <button onClick={() => setShowOffers(true)} className='outline-none flex items-center space-x-2 border border-[#3C3C3C] rounded-full px-4 py-2 text-[#4F4F4F] uppercase'>
                                <CiDiscount1 className='text-xl' />

                                <p className='text-[#4F4F4F] font-rubik'>
                                    Apply promocode
                                </p>
                            </button>
                        </div>
                    }
                </div>

                {userData && <div className="cartofferflex flex items-center justify-between">
                    <h5>Loyalty Points</h5>
                    {
                        Number(CartData?.applied_coins)
                        ?
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-around py-2">
                                <p>Available Points: <strong className="black">₹ {userData?.coins || 0}</strong></p>
                            </div>
                            <div className="flex items-center justify-around rounded gap-3">
                                <p>Applied Points: <strong className="black">₹ {CartData.applied_coins}</strong></p>
                                <Link href={"/"} onClick={(e) => { removeLoyaltyPoints(); e.preventDefault() }} className="removedeals shadow rounded p-1">Remove</Link>
                                {/* <i className="fa fa-spinner fa-spin red hide"></i> */}
                            </div>
                        </div>
                        :
                        <div className="flex items-center justify-around rounded gap-3">
                            <p>Available Points: <strong className="black">₹ {userData?.coins || 0}</strong></p>
                            <Link href={"/"} className="viewdealss shadow rounded p-1" onClick={(e) => { applyLoyaltyPoints(); e.preventDefault() }}>Apply Points</Link>
                            {/* <i className="fa fa-spinner fa-spin red hide"></i> */}
                        </div>
                    }
                </div>}
            </div>

            {showOffers && (
                <OffersPopup
                    dealsData={dealsData}
                    applyCoupon={(deal: DealProps) => {applyCoupon(deal)}}
                    isFromCart={true}
                    showPopup={showOffers}
                    setShowPopup={setShowOffers}
                />
            )}
        </>
    )
}

export default BillOptionsAndPromo;