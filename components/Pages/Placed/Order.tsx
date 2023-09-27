import { Divider } from "@/components/Core";
import Image from "next/image";

const Order = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto py-4 pb-24 space-y-8'>
                <Divider title='Order #37' titleClassName='text-[#313131] text-4xl' className='bg-primary-red' />

                <div className='w-full space-y-4'>
                    <div className='w-full flex items-center space-x-3'>
                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            15 Jul 2023  02:30
                        </p>

                        <span className='h-3 w-[1px] bg-secondary-border-grey' />

                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            Payment mode : Paytm
                        </p>

                        <span className='h-3 w-[1px] bg-secondary-border-grey' />

                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            3 items
                        </p>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Qty & item name
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Total
                        </h6>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            1 x Bigboy Mutton Burger
                        </p>

                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            ₹ 100.70
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            1 x Bigboy Mutton Burger
                        </p>

                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            ₹ 100.70
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            1 x Bigboy Mutton Burger
                        </p>

                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            ₹ 100.70
                        </p>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Item total
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ 477.1
                        </h6>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Convenience Fee
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ 50
                        </h6>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Total
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ 527.10
                        </h6>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            cgst(9%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ 9.70
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            Sgst(9%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ 9.70
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            cgst(2.5%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ 12.51
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            sgst(2.5%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ 12.51
                        </p>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h5 className='font-rubik text-xl font-semibold normal-case text-[#313131]'>
                            Grand Total
                        </h5>

                        <h5 className='font-rubik text-xl font-semibold normal-case text-[#313131]'>
                            ₹ 572
                        </h5>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center sm:space-x-8 space-x-4'>
                    <button className='text-[#313131] rounded-3xl bg-[#EDEDED] px-4 sm:py-4 py-2.5 flex items-center justify-center space-x-2 max-w-[180px] w-full'>
                        <Image
                            src='/Images/icons/chat.png'
                            alt='Chat With Us'
                            quality={100}
                            width={20}
                            height={20}
                            loading='lazy'
                            className='flex-shrink-0'
                        />

                        <p className='text-[#313131] font-rubik text-sm font-medium'>
                            Chat with us
                        </p>
                    </button>

                    <button className='text-[#313131] rounded-3xl bg-[#EDEDED] px-4 sm:py-4 py-2.5 flex items-center justify-center space-x-2 max-w-[180px] w-full'>
                        <Image
                            src='/Images/icons/phone.png'
                            alt='Call us'
                            quality={100}
                            width={20}
                            height={20}
                            loading='lazy'
                            className='flex-shrink-0'
                        />

                        <p className='text-[#313131] font-rubik text-sm font-medium'>
                            Call us
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Order;