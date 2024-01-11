import { user_atom } from "@/atoms/index";
import { LoginSubmitType } from "@/types/AuthTypes";
import { CommonProps } from "@/types/PopUpsTypes";
import { sentOtpForVerification, verifyOtp } from "@/utils/LibFunctions";
import { setCookie } from 'cookies-next';
import gsap from "gsap";
import { useState } from 'react';
import { useRecoilState } from "recoil";
import EnterOTP from "../EnterOTP";
import LoginEnterPhone from "../LoginEnterPhone";
import PopupContainer from "./PopupContainer";

const LoginPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [step, setStep] = useState(0);        // 0 -> enter phone no. 1 -> otp
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [userData, setUserData] = useRecoilState(user_atom);

    const onSubmit: LoginSubmitType = async (e, currentStep, setClose) => {
        e?.preventDefault();

        if (currentStep === 0) {
            if (!phone) return;
            // setPhone(phone);
            let parameter = {
                mobile: phone
            }

            const otpSentRes = await sentOtpForVerification(parameter);
            console.log(otpSentRes);
            if (otpSentRes && otpSentRes.status) {
                // setOtpResent(true);
                gsap.to('#login_phone_form', { duration: 0.5, opacity: 0, onComplete: () => setStep(1) });
                // window.createNotification("success", otpSentRes.message);
            } else {
                // setOtpResent(false);
                alert("error: " + otpSentRes.message);
            }

        }
        else if (currentStep === 1) {
            let parameter = {
                mobile: phone,
                otp: otp
            }
            const otpVerifyRes = await verifyOtp(parameter);
            if (otpVerifyRes.status) {
                localStorage.setItem("user", JSON.stringify(otpVerifyRes.result));
                setCookie("token", otpVerifyRes.result.token);
                setCookie("mobile", phone);
                setCookie("otp_verified", "yes");
                if (setClose) setClose();
                setUserData(otpVerifyRes.result);
            }
            else {
                alert("error: " + otpVerifyRes.message);
            }
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