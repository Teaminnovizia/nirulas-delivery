'use client';

import { category_popup } from "@/atoms/index";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { FiMenu } from "react-icons/fi";
import { useRecoilState } from 'recoil';

const CategoryPopup = dynamic(() => import('./PopUps').then(mod => mod.CategoryPopup));

const CategoryFloatingButton = () => {
    const [showCategoryPopup, setShowCategoryPopup] = useRecoilState(category_popup);

    const setExpend = (expend: boolean) => {
        if (expend) gsap.to('#menu_floating_button', { duration: 0.5, width: 'auto' });
        else gsap.to('#menu_floating_button', { duration: 0.5, width: '45px' });
    }

    return (
        <>
            <button
                id='menu_floating_button'
                className='fixed z-[500] bottom-[90px] left-[26px] cursor-pointer overflow-hidden rounded-full bg-primary-red flex items-center justify-start gap-3 text-white p-3 text-xl w-[45px] h-[45px]'
                onMouseEnter={() => setExpend(true)}
                onMouseLeave={() => setExpend(false)}
                onClick={() => setShowCategoryPopup(true)}
            >
                <FiMenu className='flex-shrink-0' />
                <p className='text-white text-base'>
                    Menu
                </p>
            </button>

            {showCategoryPopup && (
                <CategoryPopup
                    showPopup={showCategoryPopup}
                    setShowPopup={setShowCategoryPopup}
                />
            )}
        </>
    )
}

export default CategoryFloatingButton;