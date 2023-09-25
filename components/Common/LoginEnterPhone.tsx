import { onSubmitType } from "@/types/LoginTypes";
import { PiPhoneLight } from "react-icons/pi";
import { Button } from "../Core";

const LoginEnterPhone = ({ phone, setPhone, onSubmit }: { phone: string, setPhone: Function, onSubmit: onSubmitType }) => {
    return (
        <div id='login_phone_form' className='w-full space-y-12 sm:py-10 py-4'>
            <h2 className='text-2xl text-center relative w-full normal-case font-bold font-rubik'>
                Welcome back!
            </h2>

            <form onSubmit={(e) => onSubmit(e, 0)} className='w-full space-y-5'>
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
                            value={phone}
                            onChange={(e) => setPhone(e?.target?.value)}
                            required
                        />
                    </div>
                </div>

                <Button
                    title='OTP'
                    className='w-full'
                    type='submit'
                />
            </form>

            <p className='font-rubik font-normal'>
                New to Nirula&apos;s? <button className='text-primary-red font-rubik'>Create a Account</button>
            </p>
        </div>
    )
}

export default LoginEnterPhone;