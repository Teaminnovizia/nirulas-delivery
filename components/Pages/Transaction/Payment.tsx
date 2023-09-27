'use client'

import PaytmIcon from "@/icons/PaytmIcon";
import Link from "next/link";
// @ts-ignore
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Payment = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto py-2 space-y-8'>
                <h1 className='normal-case font-extrabold'>
                    Payment via UPI
                </h1>

                <p className='w-full bg-black text-white font-rubik px-6 py-2.5 rounded-full'>
                    Please don’t press back until the transaction is complete
                </p>

                <div className='w-full flex flex-col items-center space-y-7 max-w-xl mx-auto'>
                    <PaytmIcon width={240} height={80} />

                    <h6 className='font-rubik font-medium normal-case text-sm text-center'>
                        Open your Paytm app and complete the payment
                    </h6>

                    <Link href='/placed' className='font-rubik font-medium rounded-full bg-border-grey text-black/50 text-center max-w-sm w-full px-4 py-2'>
                        Your UPI ID: <span className='text-black/75'>1234567890@paytm</span>
                    </Link>

                    <Progress
                        percent={88}
                        symbolClassName='!hidden'
                        theme={{
                            // error: {
                            //     trailColor: 'pink',
                            //     color: 'red'
                            // },
                            default: {
                                trailColor: '#D7D7D7',
                                color: '#FF0000'
                            },
                            active: {
                                trailColor: '#D7D7D7',
                                color: '#FF0000'
                            },
                            // success: {
                            //     trailColor: 'lime',
                            //     color: 'green'
                            // }
                        }}
                    />

                    <h6 className='font-rubik normal-case font-medium text-center text-lg'>
                        Approve payment within 4:56 minutes
                    </h6>
                </div>
            </div>
        </section>
    )
}

export default Payment;