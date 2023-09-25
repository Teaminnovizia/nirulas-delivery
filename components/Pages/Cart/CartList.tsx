import dynamic from "next/dynamic";

const CartListItem = dynamic(() => import('@/components/Common').then(mod => mod.CartListItem));

const CartList = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-8 py-10 max-w-6xl mx-auto'>
                <div className='w-full space-y-2 relative flex sm:items-center items-end max-sm:flex-col sm:px-4'>
                    <h2 className='font-rubik text-primary-red text-center w-full font-bold'>
                        Review cart
                    </h2>

                    <button className='text-primary-red border-none outline-none font-rubik font-medium sm:absolute right-5'>
                        Clear cart
                    </button>
                </div>

                <div className='w-full space-y-4 sm:px-4'>
                    <CartListItem />
                    <CartListItem />
                    <CartListItem />
                </div>
            </div>
        </section>
    )
}

export default CartList;