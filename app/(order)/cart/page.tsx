"use client"

import { cart_atom, rec_prod_atom, user_atom } from "@/atoms/index";
import { fetchRecommendedProducts, getUserByMobile } from "@/utils/LibFunctions";
import dynamic from "next/dynamic";
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";

const CartList = dynamic(() => import('@/components/Pages/Cart/CartList'));
const Divider = dynamic(() => import('@/components/Core').then(mod => mod.Divider));
const Recommended = dynamic(() => import('@/components/Pages/Cart/Recommended'));
const Bill = dynamic(() => import('@/components/Pages/Cart/Bill'));

const CartReview = () => {
    const CartData = useRecoilValue(cart_atom);
    const RecProdData = useRecoilValue(rec_prod_atom);
    const setRecProdData = useSetRecoilState(rec_prod_atom);
    const setUserData = useSetRecoilState(user_atom);

    async function fetchuser() {
        const fetchUser = await getUserByMobile();
        if (fetchUser.status) {
            if (fetchUser.result) {
                setUserData(fetchUser.result);
            }
        }
    }

    async function fetchRec() {
        const recommended = await fetchRecommendedProducts(CartData.id);
        setRecProdData(recommended?.result);
    }

    useEffect(() => {
        if (CartData?.id) {
            fetchRec();
        }
    }, [CartData])

    useEffect(() => {
        fetchuser();
    }, [])

    if (!CartData) {
        return (
            <div>
                <h3 className="font-bold text-center mt-6">Cart Is Empty</h3>
            </div>
        )
    }
    return (
        <>
            <CartList />
            <Divider />
            <Recommended products={RecProdData} />
            <Divider />
            <Bill />
        </>
    )
}

export default CartReview;