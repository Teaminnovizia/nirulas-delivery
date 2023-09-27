import { Button } from "@/components/Core";
import { CommonProps } from "@/types/PopUpsTypes";
import Image from "next/image";
import { FaHouse, FaPhone } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import PopupContainer from "./PopupContainer";

const PaymentSuccessPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    return (
        <PopupContainer
            maxWidth='655px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md max-h-[95vh] overflow-y-scroll'>
                    <div className='relative w-full py-6 pt-8 sm:px-8 px-3 bg-success-green flex items-start space-x-2'>
                        <IoClose
                            className='text-white absolute right-4 top-4 text-2xl cursor-pointer'
                            onClick={() => setClose()}
                        />

                        <h3 className='font-rubik normal-case font-medium text-white'>
                            Payment Successful
                        </h3>
                    </div>

                    <div className='w-full py-6 sm:px-8 px-3 space-y-8'>
                        <p className='text-center w-full font-rubik font-medium text-sm text-black'>
                            Your order has been placed. <br />
                            For extra knowledge calling our call Center number 1800-1025247
                        </p>

                        <div className='flex items-center w-full justify-center space-x-2'>
                            <Image
                                src='/Images/icons/success.png'
                                alt='Payment Success'
                                quality={100}
                                width={80}
                                height={80}
                                loading='lazy'
                            />

                            <div className='space-y-1'>
                                <h3 className='font-rubik normal-case font-medium'>
                                    Payment Success
                                </h3>

                                <p className='text-black/75 font-normal sm:text-base text-sm font-rubik'>
                                    There seems to be technical errors with payment
                                </p>
                            </div>
                        </div>

                        <Button title='Done' className='max-w-xs w-full block mx-auto font-medium normal-case !mt-10' />

                        <div className='flex items-center justify-center w-full space-x-8'>
                            <button className='text-secondary-border-grey border-none outline-none flex items-center space-x-2'>
                                <FaHouse className='text-xl' />

                                <p className='text-secondary-border-grey font-rubik font-medium text-base'>
                                    Home
                                </p>
                            </button>

                            <button className='text-secondary-border-grey border-none outline-none flex items-center space-x-2'>
                                <span className='rounded-full bg-secondary-border-grey p-1 text-white'>
                                    <FaPhone className='text-xs' />
                                </span>

                                <p className='text-secondary-border-grey font-rubik font-medium text-base'>
                                    Call us
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default PaymentSuccessPopup;