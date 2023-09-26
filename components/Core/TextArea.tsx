import { TextareaHTMLAttributes } from "react";

const TextArea = ({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            {...rest}
            className={`outline-none border border-secondary-border-grey text-[#595959] placeholder:text-[#595959] rounded-lg px-5 py-2 font-rubik font-normal w-full ${className}`}
        />
    )
}

export default TextArea;