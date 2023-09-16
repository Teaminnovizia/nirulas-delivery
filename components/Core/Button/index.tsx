import { ButtonHTMLAttributes } from "react";

const Button = ({ title, className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...restProps}
            className={`flex items-center justify-center px-6 py-1.5 bg-primary-red text-white font-rubik font-medium text-base uppercase rounded-full ${className}`}>
            {title}
        </button>
    )
}

export default Button;