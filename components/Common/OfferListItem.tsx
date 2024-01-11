import { cart_atom } from "@/atoms/index";
import { useRecoilValue } from "recoil";
import { Button } from "../Core";

const OfferListItem = ({ deal, couponApplied, applyCoupon }: { deal: any, couponApplied: boolean, applyCoupon: Function }) => {
    const CartData = useRecoilValue(cart_atom);

    return (
        <div className='w-full rounded-xl bg-secondary-light-red flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-4 px-3 py-5 max-sm:flex-col'>
            <div className='flex items-center space-x-3'>
                {/* <Image
                    src='/Images/offers/welcome.svg'
                    alt='Offer'
                    quality={100}
                    width={100}
                    height={100}
                    loading='lazy'
                /> */}

                <div className='space-y-2'>
                    <h6 className='font-rubik font-medium text-sm text-black'>
                        {deal?.title}
                    </h6>

                    <small className='font-rubik text-[11px]'>
                        {deal?.description}
                    </small>
                </div>
            </div>

            {
                (!couponApplied && ( CartData && deal.min_amount <= CartData.grand_total ))
                ? <Button title='Apply now' className='font-normal text-sm flex-shrink-0' onClick={() => applyCoupon(deal)} />
                : <h4 className="font-normal text-sm flex-shrink-0">{deal.code}</h4>
            }

            {
                CartData && Number(CartData.offer_id) === Number(deal.id)
                    ?
                    <p style={{ fontSize: "15px", color: "#00c100" }} className="font-normal text-sm flex-shrink-0">Coupon Applied</p>
                    :
                    null
            }
        </div>
    )
}

export default OfferListItem;