import { InputHTMLAttributes } from "react";

const Input = ({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...rest}
            className={`outline-none border border-secondary-border-grey text-[#595959] placeholder:text-[#595959] rounded-lg px-5 py-2 font-rubik font-normal w-full ${className}`}
        />
    )
}

export default Input;