import { Button, Divider } from "../Core";

const BillDetails = () => {
    return (
        <div className='space-y-6 w-full'>
            <Divider />

            <div className='space-y-3 w-full sm:px-4'>
                <h5 className='font-rubik normal-case font-bold'>
                    Bill Details
                </h5>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik normal-case text-lg font-medium'>
                        Item Total
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ 477.1
                    </p>
                </div>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik normal-case text-lg font-medium'>
                        Convenience Fee
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ 50
                    </p>
                </div>
            </div>

            <Divider />

            <div className='space-y-3 w-full sm:px-4'>
                <div className='flex items-center w-full justify-between space-x-3'>
                    <h6 className='font-rubik text-lg font-medium'>
                        Total
                    </h6>

                    <p className='font-rubik text-lg font-medium'>
                        ₹ 527.10
                    </p>
                </div>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <p className='font-rubik text-lg'>
                        CGST(9%)
                    </p>

                    <p className='font-rubik text-lg'>
                        ₹ 9.70
                    </p>
                </div>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <p className='font-rubik text-lg'>
                        SGST(9%)
                    </p>

                    <p className='font-rubik text-lg'>
                        ₹ 9.70
                    </p>
                </div>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <p className='font-rubik text-lg'>
                        CGST(2.5%)
                    </p>

                    <p className='font-rubik text-lg'>
                        ₹ 12.51
                    </p>
                </div>

                <div className='flex items-center w-full justify-between space-x-3'>
                    <p className='font-rubik text-lg'>
                        SGST(2.5%)
                    </p>

                    <p className='font-rubik text-lg'>
                        ₹ 12.51
                    </p>
                </div>
            </div>

            <Divider />

            <div className='flex items-center w-full justify-between space-x-3 sm:px-4'>
                <h5 className='font-rubik text-xl font-bold'>
                    TO PAY
                </h5>

                <p className='font-rubik text-xl font-bold'>
                    ₹ 572
                </p>
            </div>

            <div className='max-w-lg w-full mx-auto space-y-5 pt-5'>
                <textarea
                    rows={5}
                    placeholder='add cooking instructions'
                    className='capitalize text-black placeholder:text-black font-medium placeholder:font-medium font-rubik rounded-lg resize-none outline-none border border-black p-2 w-full'
                />

                <Button title='confirm order' className='max-w-fit block mx-auto' />
            </div>

            <p className='font-semibold uppercase font-rubik text-lg text-center'>
                Note: Currently delivering in Delhi NCR between 11 AM to 04 AM Only.
            </p>
        </div>
    )
}

export default BillDetails;