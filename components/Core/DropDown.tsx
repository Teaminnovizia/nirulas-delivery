'use client'

import { DropDownProps } from '@/types/CoreComponentTypes';
import gsap, { Power3 } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import UseSafari from '../Hooks/UseSafari';

const DropDown = ({ all_choices, selected_val, onChange }: DropDownProps) => {
    const is_safari = UseSafari();
    const drop_down = useRef(null);
    const [is_open, setIs_open] = useState(false);
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        if (selected_val && all_choices?.length) setOptions(all_choices?.filter(x => x !== selected_val));
    }, [selected_val, all_choices])

    const onDropDownClick = (should_open: boolean) => {
        if (should_open) {
            gsap.to(drop_down?.current, { duration: 0.1, borderRadius: '1rem' });
            gsap.to(drop_down?.current, { duration: 0.5, height: '160.5', ease: Power3.easeInOut });
            setIs_open(true);
        }
        else {
            gsap.to(drop_down?.current, { duration: 0.8, height: '38.5px', ease: "elastic.out(1, 0.3)" });
            gsap.to(drop_down?.current, { duration: 0.1, borderRadius: '99999px', delay: 0.5 });
            setIs_open(false);
        }
    }

    return (
        <div className='relative flex max-w-[250px] w-full h-[38.5px] items-start justify-center'>
            <div
                ref={drop_down}
                className={`absolute flex w-full flex-col space-y-2 px-4 py-2 bg-primary-red text-white rounded-full h-[38.5px] outlet_select cursor-pointer overflow-hidden ${is_open ? 'z-50' : ''}`}
                onClick={() => onDropDownClick(!is_open)}
            >
                <span className={`flex w-full items-center justify-between space-x-2 ${is_safari ? is_open ? 'mt-[8px]' : 'mt-[10px]' : 'mt-0'}`}>
                    <p className='text-white font-rubik'>
                        {selected_val}
                    </p>

                    <HiOutlineChevronDown className={`text-lg ${is_open ? 'rotate-180' : 'rotate-0'}`} />
                </span>

                <div className='flex flex-col w-full items-start space-y-2 max-h-full overflow-y-scroll custom_scrollbar'>
                    {options?.map((x) => (
                        <p
                            key={x}
                            onClick={() => onChange(x)}
                            className='w-full text-left font-rubik text-white'
                        >
                            {x}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DropDown;