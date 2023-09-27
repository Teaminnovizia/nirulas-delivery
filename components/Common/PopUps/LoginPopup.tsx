import { LoginSubmitType } from "@/types/AuthTypes";
import { CommonProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useState } from 'react';
import EnterOTP from "../EnterOTP";
import LoginEnterPhone from "../LoginEnterPhone";
import PopupContainer from "./PopupContainer";

const LoginPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> enter phone no. 1 -> otp
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const onSubmit: LoginSubmitType = (e, currentStep, setClose) => {
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
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center space-y-6'>
                        {step === 0 && (
                            <LoginEnterPhone
                                phone={phone}
                                setPhone={setPhone}
                                onSubmit={onSubmit}
                                setClose={setClose}
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