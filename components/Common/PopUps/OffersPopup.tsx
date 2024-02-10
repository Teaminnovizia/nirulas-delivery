import { cart_atom } from "@/atoms/index";
import { DealProps } from "@/types/DealTypes";
import { CommonProps } from "@/types/PopUpsTypes";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import OfferListItem from "../OfferListItem";
import PopupContainer from "./PopupContainer";

type ApplyCouponTypes = (deal: DealProps) => void

const OffersPopup = ({ dealsData, applyCoupon, isFromCart, ...restProps }: { dealsData: DealProps[], applyCoupon: ApplyCouponTypes, isFromCart: boolean } & CommonProps) => {
    const { showPopup, setShowPopup } = restProps;
    const [couponApplied, setCouponApplied] = useState(false);
    const CartData = useRecoilValue(cart_atom);

    useEffect(() => {
        if(CartData.offer_id) {
            setCouponApplied(true);
        }
    }, [CartData])

    return (
        <PopupContainer
            maxWidth='550px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-2xl shadow-md py-5 sm:px-6 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto space-y-6'>
                        <h4 className='font-rubik block text-center font-bold'>
                            Our Offers
                        </h4>

                        <div className='w-full space-y-4 max-h-[75vh] overflow-y-scroll'>
                            {
                                Array.isArray(dealsData) && dealsData.map(
                                    (deal, index) => <OfferListItem deal={deal} key={index} couponApplied={couponApplied} applyCoupon={applyCoupon} />
                                )
                            }
                            {/* <OfferListItem /> */}
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default OffersPopup;