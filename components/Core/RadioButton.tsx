import { CheckboxCustomProps } from "@/types/CoreComponentTypes";
import { AddOnItemProps } from "@/types/CustomizeProps";
import { InputHTMLAttributes } from 'react';

const RadioButton = ({ data, placeCheckboxLeft, textClassName, ...inputProps }: { data: AddOnItemProps } & CheckboxCustomProps & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={`flex items-center gap-2 ${placeCheckboxLeft ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}>
            <input
                name={`addon_${data.id}`}
                type='radio'
                className={`text-lg scale-125 accent-primary-red ${inputProps?.className}`}
                {...inputProps}
            />

            <p className={`font-rubik ${textClassName}`}>
                ₹{data?.price}
            </p>
        </div>
    )
}

export default RadioButton;