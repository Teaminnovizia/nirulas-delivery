import { Button, Divider } from "@/components/Core";
import { getCookie } from "cookies-next";

const Cancellation = ({ placeOrderSubmit }: { placeOrderSubmit: Function }) => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='Cancellation Policy' />

                <p className='font-rubik max-w-4xl w-full block mx-auto font-normal text-center text-lg'>
                    100 % cancellation fee will be applicable if you decide to cancel the order anytime after order placement.
                    Avoid cancellation as it leads to food wastage.
                </p>

                {
                    getCookie("otp_verified") === "yes" &&
                    // <LinkButton href='/transaction' title='Place Order' className='max-w-fit mx-auto block !mt-10' />
                    <div className="flex items-center justify-center">
                        <Button title="Place Order" onClick={() => placeOrderSubmit()}>Place Order</Button>
                    </div>
                }
            </div>
        </section>
    )
}

export default Cancellation;