import { AddressSubmitType, CommonProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useState } from "react";
import SavedAddresses from "../SavedAddresses";
import PopupContainer from "./PopupContainer";

const AddressUpdatePopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> saved addresses. 1 -> edit/add new

    const onSubmit: AddressSubmitType = (currentStep, setClose) => {
        if (currentStep === 0) {
            gsap.to('#saved_addresses', { duration: 0.5, opacity: 0, onComplete: () => setStep(1) });
        }
        else if (currentStep === 1) {
            if (setClose) setClose();
        }
    }

    return (
        <PopupContainer
            maxWidth='500px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-10 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center gap-6'>
                        {step === 0 && (
                            <SavedAddresses
                                onSubmit={onSubmit}
                                setClose={setClose}
                            />
                        )}

                        {/* {step === 1 && (
                            <EnterEmail
                                vals={vals}
                                setVals={setVals}
                                onSubmit={onSubmit}
                                setClose={setClose}
                            />
                        )} */}
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default AddressUpdatePopup;