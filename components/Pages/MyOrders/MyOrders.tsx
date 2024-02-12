'use client'

import { Button } from '@/components/Core';
import { toastOptions } from '@/components/Layout';
import { OrderProps } from '@/types/OrderTypes';
import { myOrders, repeatOrder } from '@/utils/LibFunctions';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [myOrdersData, setMyordersData] = useState<OrderProps[]>([]);

    const router = useRouter();

    useMemo(() => getMyOrders(), [page])

    async function getMyOrders() {
        let response = await myOrders(page);

        if (response && response.status) {
            setCount(response.result.totalResult);

            let data = response.result.data as OrderProps[];

            setMyordersData(prevItems => {
                const orders = prevItems.concat(data);
                const _orders: OrderProps[] = [];

                for(const order of orders) {
                    let isExist = _orders.some(od => od.id == order.id);
                    if(!isExist) {
                        _orders.push(order);
                    }
                }
                return _orders;
            });
        }
        // setIsLoading(false);
    }

    const repeatOrders = async (data: OrderProps) => {
        let res = await repeatOrder(data.id);

        if (res) {
            if (res && res.status) {
                toast.success(res.message, toastOptions);
                // props.history.push({
                //     pathname: '/cart',
                // });
                router.push("/cart");
            } else {
                toast.error(res?.message || "Something went wrong", toastOptions);
            }
        } else {
            toast.error(res?.message || "Something went wrong", toastOptions);
        }
    }

    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto pb-4 space-y-8'>
                <div>My Orders: {count}</div>
                <div className='grid gap-6'>
                    {
                        myOrdersData.length ?
                        myOrdersData.map((data, i) => <MyOrderItem key={i} data={data} repeatOrders={repeatOrders} />)
                        : <p className='text-center'>No Order Found</p>
                    }
                </div>
            </div>

            {
                myOrdersData.length > 0 && myOrdersData.length !== count
                    ?
                    <div className="load-more flex justify-center">
                        <Button className="load-more-button" title='Load More...' onClick={() => {
                            setPage(() => page + 1)
                        }} />
                    </div>
                    :
                    ""
            }
        </section>
    )
}

export default MyOrders;

const order_status = [
    "Order Placed",
    "Order Accepted",
    "Order Ready for delivery",
    "Out for delivery",
    "Order Delivered",
    "Order Cancelled"
]

function MyOrderItem({ data, repeatOrders }: { data: OrderProps, repeatOrders: (data: OrderProps) => void }) {

    return (
        <div className="grid gap-4 w-full shadow-lg p-3 rounded-md">
            <div className="flex items-center justify-between">
                <p>Order Total: <strong><i className="fa fa-inr"></i> {data.grand_total}/-</strong></p>
                <p>Ordered on : {moment(data.created).format("DD/MM/Y")}</p>
            </div>
            <p>Status: <strong>{order_status[data.status]}</strong></p>
            <div>
                <span className='font-bold'>Items:</span>
                {
                    data.orders_items && data.orders_items.length > 0
                    ?
                    <ol className="order-product">
                        {
                            data.orders_items.map(function (itemData, itemKey) {
                                return (
                                    <li className='ml-6 font-medium' key={itemKey}>{itemData.product_name.substring(0, 140) + '...'}</li>
                                )
                            })
                        }
                    </ol>
                    :
                    null
                }
            </div>
            <div className="flex items-center justify-between">
                <div className="orderidbox">
                    <p>Order No.: <span>{data.order_number}</span></p>
                </div>
                <div className="orderaction">
                    {/* <Link to={"/"} className="rateclick">RATE</Link> */}
                    <Button onClick={(e) => { repeatOrders(data); e.preventDefault(); }} className="repeatclick" title='REPEAT'>REPEAT</Button>
                </div>
            </div>
        </div>
    )
}