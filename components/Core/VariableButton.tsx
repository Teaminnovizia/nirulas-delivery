'use client'

import { VariableButtonProps } from '@/types/CoreComponentTypes';
import { FaMinus } from 'react-icons/fa6';
import { HiOutlinePlus } from 'react-icons/hi';

const VariableButton = ({ containerClassName, decrementClassName, incrementClassName, value, onDecrease, onIncrease }: VariableButtonProps) => {
    return (
        <div className={`flex items-center px-3 py-1.5 space-x-1 rounded-full bg-pink-red ${containerClassName}`}>
            <button onClick={() => onDecrease()} className={`outline-none border-none text-white ${decrementClassName}`}>
                <FaMinus />
            </button>

            <span className='h-4 w-[1px] bg-[#FFF5D2]' />

            <p className='font-medium font-nunito text-white min-w-[15px] text-center'>
                {value}
            </p>

            <span className='h-4 w-[1px] bg-[#FFF5D2]' />

            <button onClick={() => onIncrease()} className={`outline-none border-none text-white ${incrementClassName}`}>
                <HiOutlinePlus />
            </button>
        </div>
    )
}

export default VariableButton;