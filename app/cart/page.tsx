import dynamic from "next/dynamic";

const CartList = dynamic(() => import('@/components/Pages/Cart/CartList'));
const Divider = dynamic(() => import('@/components/Core').then(mod => mod.Divider));
const Recommended = dynamic(() => import('@/components/Pages/Cart/Recommended'));

const CartReview = () => {
    return (
        <>
            <CartList />
            <Divider />
            <Recommended />
        </>
    )
}

export default CartReview;