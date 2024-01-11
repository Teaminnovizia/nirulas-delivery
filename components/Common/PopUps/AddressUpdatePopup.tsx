import { AddressSubmitType, CommonProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useState } from "react";
import AddressForm from "../AddressForm";
import SavedAddresses from "../SavedAddresses";
import PopupContainer from "./PopupContainer";

const default_vals = {
    name: '',
    address_1: '',
    city: '',
    state: '',
    address_2: '',
    pincode: '',
    landmark: '',
    is_default: '0'
}

const AddressUpdatePopup = ({ UserAddresses, fetchAddresses, ...restProps }: { UserAddresses: any[], fetchAddresses: Function } & CommonProps) => {
    const { showPopup, setShowPopup } = restProps;
    const [step, setStep] = useState(0);        // 0 -> saved addresses. 1 -> edit/add new
    const [vals, setVals] = useState(default_vals);

    const onSubmit: AddressSubmitType = (currentStep, setClose) => {
        if (currentStep === 0) {
            // setVals(default_vals);
            gsap.to('#saved_addresses', { duration: 0.5, opacity: 0, onComplete: () => setStep(1) });
        }
        else if (currentStep === 1) {
            if (setClose) setClose();
        }
    }

    const onEditAddressClick = (addr: any) => {
        setVals(addr);
        setStep(1);
    }

    return (
        <PopupContainer
            maxWidth='500px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-10 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center space-y-6'>
                        {step === 0 && (
                            <SavedAddresses
                                fetchAddresses={fetchAddresses}
                                UserAddresses={UserAddresses}
                                onSubmit={onSubmit}
                                setClose={setClose}
                                onEditAddressClick={onEditAddressClick}
                            />
                        )}

                        {step === 1 && (
                            <AddressForm
                                fetchAddresses={fetchAddresses}
                                onSubmit={onSubmit}
                                setClose={setClose}
                                vals={vals}
                                setVals={setVals}
                            />
                        )}
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default AddressUpdatePopup;