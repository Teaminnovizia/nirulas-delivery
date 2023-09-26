'use client'

import EmailIcon from "@/icons/EmailIcon";
import { LoginSubmitType, SignUpVals } from "@/types/AuthTypes";
import gsap from "gsap";
import { useEffect } from "react";
import { Button } from "../Core";

const EnterEmail = ({ vals, setVals, onSubmit, setClose }: { vals: SignUpVals, setVals: Function, onSubmit: LoginSubmitType, setClose: Function }) => {
    useEffect(() => {
        if (window !== undefined) {
            gsap.to('#enter_email_form', { duration: 0.5, opacity: 1 });
        }
    }, [])

    return (
        <div id='enter_email_form' className='w-full space-y-6'>
            <h2 className='text-3xl text-center relative w-full normal-case font-bold font-rubik'>
                Enter Your Email
            </h2>

            <form onSubmit={(e) => onSubmit(e, 1)} className='w-full space-y-5'>
                <div className='w-full space-y-3'>
                    <div className='w-full space-y-3'>
                        <label htmlFor='signup_email' className='font-rubik font-medium'>
                            Email ID  <span className='text-black/50'>(optional)</span>
                        </label>

                        <div className='flex w-full items-center space-x-2 px-3 py-1.5 rounded-lg border border-secondary-border-grey'>
                            {/* <PiPhoneLight className='flex-shrink-0 text-lg text-secondary-border-grey' /> */}
                            <EmailIcon />

                            <input
                                type='email'
                                id='signup_email'
                                placeholder='Enter your Email'
                                className='w-full font-rubik text-secondary-border-grey placeholder:text-secondary-border-grey outline-none'
                                value={vals.email}
                                onChange={(e) => setVals({ ...vals, email: e?.target?.value })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <Button
                    title='Get Started'
                    className='w-full normal-case'
                    type='submit'
                />
            </form>

            <button
                className='text-primary-red font-rubik max-w-fit mx-auto flex items-center'
                onClick={() => setClose()}
            >
                Skip this
            </button>
        </div>
    )
}

export default EnterEmail;