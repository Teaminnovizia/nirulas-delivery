import { LoginSubmitType, SignUpVals } from "@/types/AuthTypes";
import { CommonProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useState } from "react";
import EnterEmail from "../EnterEmail";
import SignUpForm from "../SignUpForm";
import PopupContainer from "./PopupContainer";

const default_vals: SignUpVals = {
    phone: '',
    full_name: '',
    email: ''
}

const SignUnPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> signup form. 1 -> email
    const [vals, setVals] = useState(default_vals);

    const onSubmit: LoginSubmitType = (e, currentStep, setClose) => {
        e?.preventDefault();

        if (currentStep === 0) {
            if (!vals.phone || !vals.full_name) return;
            gsap.to('#signup_phone_form', { duration: 0.5, opacity: 0, onComplete: () => setStep(1) });
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
                            <SignUpForm
                                vals={vals}
                                setVals={setVals}
                                onSubmit={onSubmit}
                                setClose={setClose}
                            />
                        )}

                        {step === 1 && (
                            <EnterEmail
                                vals={vals}
                                setVals={setVals}
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

export default SignUnPopup;