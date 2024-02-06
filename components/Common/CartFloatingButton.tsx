'use client';

import { useRouter } from 'next/navigation';
import { BsCart } from 'react-icons/bs';

const CartFloatingButton = () => {
    const router = useRouter();
    // const CartData = useRecoilValue(cart_atom);

    function goToCart() {
        router.push("/cart")
    }

    return (
        <button onClick={goToCart} className='fixed z-[500] bottom-[150px] left-[26px] cursor-pointer overflow-hidden rounded-full bg-primary-red flex items-center justify-start gap-3 text-white p-3 text-xl w-[45px] h-[45px]'>
            <BsCart className='text-2xl' title='Cart' />
            {/* <p className='text-sx text-white'>{CartData?.carts_items?.length}</p> */}
        </button>
    )
}

export default CartFloatingButton;