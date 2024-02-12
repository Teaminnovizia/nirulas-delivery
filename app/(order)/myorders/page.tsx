"use client"

import dynamic from "next/dynamic";

const MyOrders = dynamic(() => import('@/components/Pages/MyOrders/MyOrders'));

const Orders = () => {
    return (
        <>
            <MyOrders />

            {/* <div className='absolute w-full h-2.5 bg-primary-red bottom-0' /> */}
        </>
    )
}

export default Orders;