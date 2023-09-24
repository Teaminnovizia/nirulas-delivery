import { CommonProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { FormEvent, useState } from 'react';
import EnterOTP from "../EnterOTP";
import LoginEnterPhone from "../LoginEnterPhone";
import PopupContainer from "./PopupContainer";

const LoginPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> enter phone no. 1 -> otp
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>, currentStep: number, setClose?: Function) => {
        e?.preventDefault();

        if (currentStep === 0) {
            if (!phone) return;
            gsap.to('#login_phone_form', { duration: 0.5, opacity: 0, onComplete: () => setStep(1) });
        }
        else if (currentStep === 1) {
            if (setClose) setClose();
        }
    }

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
                            <LoginEnterPhone
                                phone={phone}
                                setPhone={setPhone}
                                onSubmit={onSubmit}
                            />
                        )}

                        {step === 1 && (
                            <EnterOTP
                                otp={otp}
                                setOtp={setOtp}
                                onSubmit={onSubmit}
                                setClose={setClose}
                            />
                        )}
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default LoginPopup;