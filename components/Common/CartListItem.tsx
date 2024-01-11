'use client'

import { VariableButton } from "../Core";

const CartListItem = ({ data, addToCart }: {data?: any, addToCart: Function}) => {

    return (
        <div className='w-full flex items-center justify-between space-x-4'>
            <div className='max-sm:w-[70%] flex items-center space-x-4'>
                {/* <Image
                    src='/Images/temp/ice-cream.png'
                    alt='Product'
                    quality={100}
                    width={130}
                    height={130}
                    priority
                    className='max-sm:w-[40%] rounded-full overflow-hidden'
                /> */}

                <div className='flex-grow flex-shrink space-y-2'>
                    <h6 className='font-rubik whitespace-pre-wrap font-semibold max-sm:text-base'>
                        {data?.product_name}
                    </h6>

                    <p className='font-rubik text-primary-red font-semibold text-lg'>
                        ₹ {data?.price}
                    </p>
                </div>
            </div>

            <VariableButton
                value={data?.qty}
                onDecrease={() => {
                    var _data = {...data};
                    _data.qty = data?.qty - 1;
                    _data.id = data.product_id;
                    if(_data.qty == 0) {
                        _data.remove_item = true;   
                    }
                    addToCart(_data);
                }}
                onIncrease={() => {
                    var _data = {...data};
                    _data.qty = data?.qty + 1;
                    _data.id = data.product_id;
                    addToCart(_data);
                }}
            />
        </div>
    )
}

export default CartListItem;