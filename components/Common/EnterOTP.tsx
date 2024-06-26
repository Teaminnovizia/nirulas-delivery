'use client'

import SMSIcon from "@/icons/SMSIcon";
import { LoginSubmitType } from "@/types/AuthTypes";
import gsap from "gsap";
import { useEffect } from "react";
import OTPInput from "react-otp-input";
import { Button } from "../Core";

const EnterOTP = ({ phone, otp, setOtp, onSubmit, setClose }: { phone: string, otp: string, setOtp: Function, onSubmit: LoginSubmitType, setClose?: Function }) => {
    useEffect(() => {
        if (window !== undefined) {
            gsap.to('#otp_form', { duration: 0.5, opacity: 1 });
        }
    }, [])

    return (
        <div id='otp_form' className='w-full space-y-3 opacity-0'>
            <h2 className='text-3xl text-center relative w-full normal-case font-bold font-rubik'>
                Let&apos;s go!
            </h2>

            <div className='flex w-full items-center justify-center'>
                <SMSIcon width={130} height={130} />
            </div>

            <h4 className='font-rubik font-normal normal-case'>
                We just Text you.
            </h4>

            <div className='w-full space-y-1'>
                <p className='font-rubik text-secondary-border-grey text-sm font-medium'>
                    Please enter the code we text you.
                </p>

                {phone ? <p className='font-rubik'>
                    +91-{phone}
                </p> : ""}
            </div>

            <form onSubmit={(e) => onSubmit(e, 1, setClose)} className='w-full space-y-5'>
                <div className='w-full space-y-3'>
                    <small className='font-rubik font-medium'>
                        Confirmation code
                    </small>

                    <OTPInput
                        value={otp}
                        onChange={(newOtp) => setOtp(newOtp)}
                        numInputs={4}
                        renderInput={(props) => <input {...props} required />}
                        inputType='number'
                        shouldAutoFocus
                        inputStyle={`outline-none bg-transparent pb-3 px-1.5 text-4xl font-rubik font-medium flex-grow border-b-2 border-border-grey focus:border-primary-red transition-all duration-300`}
                        containerStyle='w-full justify-evenly space-x-3'
                    />
                </div>

                <Button
                    title='Verify'
                    className='w-full normal-case'
                    type='submit'
                />
            </form>

            <div className='flex w-full items-center justify-center space-x-1'>
                <button className='font-rubik underline text-primary-black'>
                    Resend code
                </button>

                <p className='font-rubik text-primary-black'>
                    or
                </p>

                <button className='font-rubik underline text-primary-black'>
                    Call
                </button>
            </div>
        </div>
    )
}

export default EnterOTP;