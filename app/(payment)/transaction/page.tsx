"use client"

import dynamic from "next/dynamic";

const Payment = dynamic(() => import('@/components/Pages/Transaction/Payment'));

const Transaction = () => {
    return (
        <>
            <Payment />

            <div className='absolute w-full h-2.5 bg-primary-red bottom-0' />
        </>
    )
}

export default Transaction;