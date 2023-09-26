import dynamic from "next/dynamic";

const AddedItems = dynamic(() => import('@/components/Pages/PlaceOrder/AddedItems'));
const YourDetails = dynamic(() => import('@/components/Pages/PlaceOrder/YourDetails'));
const Instructions = dynamic(() => import('@/components/Pages/PlaceOrder/Instructions'));
const Summery = dynamic(() => import('@/components/Pages/PlaceOrder/Summery'));
const PaymentMode = dynamic(() => import('@/components/Pages/PlaceOrder/PaymentMode'));
const Cancellation = dynamic(() => import('@/components/Pages/PlaceOrder/Cancellation'));

const PlaceOrder = () => {
    return (
        <>
            <AddedItems />
            <YourDetails />
            <Instructions />
            <Summery />
            <PaymentMode />
            <Cancellation />
        </>
    )
}

export default PlaceOrder;