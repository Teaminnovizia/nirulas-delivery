"use client"

import { cart_atom } from "@/atoms/index";
import { BillDetails, BillOptionsAndPromo } from "@/components/Common";
import { addTip, changeDeliveryType, fetchCartItems } from "@/utils/LibFunctions";
import { useRecoilState } from "recoil";

const Bill = () => {
    const [CartData, setCartData] = useRecoilState(cart_atom);

    async function fetchCarts() {
        var cartObj = await fetchCartItems();
        if (cartObj.status) {
            setCartData(cartObj.result);
            return cartObj.result;
        }
    }

    async function deliveryChange(type: string) {
        var res = await changeDeliveryType(type);
        if (res.status) {
            await fetchCarts();
        }
        else {
            alert("error: " + res.message);
        }
    }

    async function tipChange(tip: string) {
        var res = await addTip(tip);
        if (res.status) {
            await fetchCarts();
        }
        else {
            alert("error: " + res.message);
        }
    }

    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <BillOptionsAndPromo deliveryChange={deliveryChange} tipChange={tipChange} fetchCarts={fetchCarts} />

                {
                    CartData && <BillDetails CartData={CartData} />
                }
                
            </div>
        </section>
    )
}

export default Bill;