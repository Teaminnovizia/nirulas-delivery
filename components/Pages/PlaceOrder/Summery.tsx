import { Divider } from "@/components/Core";

const Summery = ({ CartData }: { CartData: any }) => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='BILL SUMMARY' />

                <div className='max-w-2xl w-full mx-auto space-y-3 rounded-3xl border border-black sm:px-7 px-4 py-4'>
                    <div className='flex items-center w-full justify-between space-x-3'>
                        <h5 className='font-rubik text-xl font-semibold capitalize'>
                            subtotal
                        </h5>

                        <p className='font-rubik text-xl font-semibold'>
                            ₹{CartData?.subtotal}
                        </p>
                    </div>

                    <div className='w-full px-4 space-y-2'>
                        <div className='flex items-center w-full justify-between space-x-3'>
                            <p className='font-rubik text-base'>
                                GST and Packing charges
                            </p>

                            <p className='font-rubik text-base'>
                                ₹{CartData?.convenience_fee}
                            </p>
                        </div>

                        <div className='flex items-center w-full justify-between space-x-3'>
                            <p className='font-rubik text-base'>
                                Delivery charges
                            </p>

                            <p className='font-rubik text-base'>
                                ₹{CartData?.delivery_charge}
                            </p>
                        </div>
                    </div>

                    <Divider />

                    <div className='flex items-center w-full justify-between space-x-3'>
                        <h5 className='font-rubik text-xl font-semibold capitalize'>
                            Grand Total
                        </h5>

                        <p className='font-rubik text-xl font-semibold'>
                            ₹{CartData?.grand_total}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summery;