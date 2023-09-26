import { DividerProps } from "@/types/CoreComponentTypes";

const Divider = ({ className, title, titleClassName }: DividerProps) => {
    return (
        <div className='flex relative w-full items-center justify-center'>
            <div className={`w-full h-[1px] bg-divider-grey max-w-6xl mx-auto ${className} absolute z-0`} />

            {title && (
                <h3 className={`font-rubik z-[1] sm:px-6 px-3 font-bold text-center bg-white ${titleClassName}`}>
                    {title}
                </h3>
            )}
        </div>
    )
}

export default Divider;