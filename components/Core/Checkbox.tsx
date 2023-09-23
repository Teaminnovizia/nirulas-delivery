import { CheckboxCustomProps } from "@/types/CoreComponentTypes";
import { InputHTMLAttributes } from 'react';

const Checkbox = ({ placeCheckboxLeft, textClassName, ...inputProps }: CheckboxCustomProps & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={`flex items-center gap-2 ${placeCheckboxLeft ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}>
            <input
                type='checkbox'
                className={`text-lg scale-125 accent-primary-red ${inputProps?.className}`}
                {...inputProps}
            />

            <p className={`font-rubik ${textClassName}`}>
                ₹86
            </p>
        </div>
    )
}

export default Checkbox;