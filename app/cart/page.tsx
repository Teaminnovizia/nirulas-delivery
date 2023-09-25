import dynamic from "next/dynamic";

const CartList = dynamic(() => import('@/components/Pages/Cart/CartList'));

const CartReview = () => {
    return (
        <>
            <CartList />
        </>
    )
}

export default CartReview;