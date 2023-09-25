'use client'

import Image from "next/image";
import { VariableButton } from "../Core";

const CartListItem = () => {
    return (
        <div className='w-full flex items-center justify-between space-x-4'>
            <div className='max-sm:w-[70%] flex items-center space-x-4'>
                <Image
                    src='/Images/temp/ice-cream.png'
                    alt='Product'
                    quality={100}
                    width={130}
                    height={130}
                    priority
                    className='max-sm:w-[40%] rounded-full overflow-hidden'
                />

                <div className='flex-grow flex-shrink space-y-2'>
                    <h6 className='font-rubik whitespace-pre-wrap font-semibold max-sm:text-base'>
                        Strawberry Sorbet
                    </h6>

                    <p className='font-rubik text-primary-red font-semibold text-lg'>
                        ₹ 89
                    </p>
                </div>
            </div>

            <VariableButton
                value={1}
                onDecrease={() => { }}
                onIncrease={() => { }}
            />
        </div>
    )
}

export default CartListItem;