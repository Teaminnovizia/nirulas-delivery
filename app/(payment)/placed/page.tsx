"use client"

import { getUniqueOrder } from "@/utils/LibFunctions";
import dynamic from "next/dynamic";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

const ThankYou = dynamic(() => import('@/components/Pages/Placed/ThankYou'));
const Order = dynamic(() => import('@/components/Pages/Placed/Order'));

const Placed = () => {
    const searchParams = useSearchParams();
    const [isOrderData, setOrderData] = useState<any>(null);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function defaultFunction() {

            console.log(searchParams.get('orderid'), searchParams.get('mobile'))
            
            let orderId = searchParams.get('orderid'); //"0328425";
            let mobile = searchParams.get('mobile');
            // if (props.match && props.match.params && props.match.params.id) {
            //     orderId = props.match.params.id;
            // }
            // if (props.match && props.match.params && props.match.params.mobile) {
            //     mobile = props.match.params.mobile;
            // }
            let payload = {
                order_number: orderId,
                mobile: mobile
            }
            if (orderId) {
                let getUniqueOrderRes = await getUniqueOrder(payload);
                if (getUniqueOrderRes && getUniqueOrderRes.status) {
                    setOrderData(getUniqueOrderRes.result);
                }
                // setInterval(async () => {
                //     let getUniqueOrderRes = await getUniqueOrder(payload);
                //     if (getUniqueOrderRes && getUniqueOrderRes.data && getUniqueOrderRes.data.status) {
                //         setOrderData(getUniqueOrderRes.data.result);
                //     }
                // }, 2000);
            }
        }
        defaultFunction();
        // setIsLoading(false);
    }, []);

    if(!isOrderData) {
        return <div></div>;
    }

    return (
        <>
            <ThankYou />
            <Order isOrderData={isOrderData} />
        </>
    )
}

export default Placed;