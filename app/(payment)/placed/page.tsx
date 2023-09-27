import dynamic from "next/dynamic";

const ThankYou = dynamic(() => import('@/components/Pages/Placed/ThankYou'));
const Order = dynamic(() => import('@/components/Pages/Placed/Order'));

const Placed = () => {
    return (
        <>
            <ThankYou />
            <Order />
        </>
    )
}

export default Placed;