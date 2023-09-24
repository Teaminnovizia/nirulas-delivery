import { Button } from "@/components/Core";
import { CommonProps } from "@/types/PopUpsTypes";
import { useState } from 'react';
import { PiPhoneLight } from 'react-icons/pi';
import PopupContainer from "./PopupContainer";

const LoginPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> enter phone no. 1 -> otp

    return (
        <PopupContainer
            maxWidth='420px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-lg shadow-md sm:py-8 py-5 sm:px-10 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center gap-6'>
                        {step === 0 && (
                            <EnterPhone />
                        )}
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default LoginPopup;

const EnterPhone = () => {
    return (
        <div className='w-full space-y-12 sm:py-10 py-4'>
            <h2 className='text-2xl text-center relative w-full normal-case font-bold font-rubik'>
                Welcome back!
            </h2>

            <div className='w-full space-y-5'>
                <div className='w-full space-y-3'>
                    <label htmlFor='login_phone' className='font-rubik font-medium'>
                        Phone
                    </label>

                    <div className='flex w-full items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#797979]'>
                        <PiPhoneLight className='flex-shrink-0 text-lg text-[#797979]' />

                        <input
                            type='number'
                            id='login_phone'
                            placeholder='Phone Number'
                            className='w-full font-rubik text-[#797979] placeholder:text-[#797979] outline-none'
                        />
                    </div>
                </div>

                <Button
                    title='OTP'
                    className='w-full'
                />
            </div>

            <p className='font-rubik font-normal'>
                New to Nirula&apos;s? <button className='text-primary-red font-rubik'>Create a Account</button>
            </p>
        </div>
    )
}