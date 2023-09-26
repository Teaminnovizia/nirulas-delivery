'use client'

import { login_popup } from "@/atoms/index";
import { LoginSubmitType, SignUpVals } from "@/types/AuthTypes";
import { PiPhoneLight, PiUserThin } from "react-icons/pi";
import { useSetRecoilState } from "recoil";
import { Button } from "../Core";

const SignUpForm = ({ vals, setVals, onSubmit, setClose }: { vals: SignUpVals, setVals: Function, onSubmit: LoginSubmitType, setClose: Function }) => {
    const setShowLogin = useSetRecoilState(login_popup);

    return (
        <div id='signup_phone_form' className='w-full space-y-6'>
            <h2 className='text-3xl text-center relative w-full normal-case font-bold font-rubik'>
                Sign Up
            </h2>

            <form onSubmit={(e) => onSubmit(e, 0)} className='w-full space-y-5'>
                <div className='w-full space-y-3'>
                    <div className='w-full space-y-3'>
                        <label htmlFor='signup_phone' className='font-rubik font-medium'>
                            Phone
                        </label>

                        <div className='flex w-full items-center space-x-2 px-3 py-1.5 rounded-lg border border-secondary-border-grey'>
                            <PiPhoneLight className='flex-shrink-0 text-lg text-secondary-border-grey' />

                            <input
                                type='number'
                                id='signup_phone'
                                placeholder='Phone Number'
                                className='w-full font-rubik text-secondary-border-grey placeholder:text-secondary-border-grey outline-none'
                                value={vals.phone}
                                onChange={(e) => setVals({ ...vals, phone: e?.target?.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className='w-full space-y-3'>
                        <label htmlFor='signup_name' className='font-rubik font-medium'>
                            Full Name
                        </label>

                        <div className='flex w-full items-center space-x-2 px-3 py-1.5 rounded-lg border border-secondary-border-grey'>
                            <PiUserThin className='flex-shrink-0 text-lg text-secondary-border-grey' />

                            <input
                                type='text'
                                id='signup_name'
                                placeholder='Full Name'
                                className='w-full font-rubik text-secondary-border-grey placeholder:text-secondary-border-grey outline-none'
                                value={vals.full_name}
                                onChange={(e) => setVals({ ...vals, full_name: e?.target?.value })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <Button
                    title='Sign Up'
                    className='w-full normal-case'
                    type='submit'
                />
            </form>

            <div className='flex items-center space-x-1'>
                <p className='font-rubik font-normal'>
                    Already have an Account?
                </p>

                <button
                    className='text-primary-red font-rubik'
                    onClick={() => setClose(() => setShowLogin(true))}
                >
                    Log in
                </button>
            </div>
        </div>
    )
}

export default SignUpForm;