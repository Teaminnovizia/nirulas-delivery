import { CheckboxCustomProps } from "@/types/CoreComponentTypes";
import { AddOnItemProps } from "@/types/CustomizeProps";
import { InputHTMLAttributes } from 'react';

const Checkbox = ({ data, placeCheckboxLeft, textClassName, is_limited, is_multiple_select, max, CustomizeData, setCustomizeData, onChange, ...inputProps }: { data: AddOnItemProps, is_limited?: number, is_multiple_select?: number, max?: number, CustomizeData: any, setCustomizeData: any } & CheckboxCustomProps & InputHTMLAttributes<HTMLInputElement>) => {

    return (
        <div className={`flex items-center gap-2 ${placeCheckboxLeft ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}>
            <input
                type='checkbox'
                className={`text-lg scale-125 accent-primary-red ${inputProps?.className}`}
                {...inputProps}
                // checked={CustomizeData?.some((cd: number) => data.id == cd)}
                // onChange={handleChange}
                onChange={onChange}
            />

            <p className={`font-rubik ${textClassName} ${data?.show_price == 0 && "hidden"}`}>
                ₹{Math.round(data?.price)}
            </p>
        </div>
    )
}

export default Checkbox;