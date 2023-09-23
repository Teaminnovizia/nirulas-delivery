'use client';

import { PopupContainerProps } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useLayoutEffect, useRef } from 'react';

const PopupContainer = ({ children, ...props }: PopupContainerProps) => {
    const popup_container_ref = useRef(null);
    const popup_inner_ref = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.to(popup_container_ref?.current, { duration: 1, opacity: 100, ease: "sine.out" }, 'a')
            .to(popup_inner_ref?.current, { duration: 1.5, y: 0, opacity: 100, ease: 'elastic.out(1, 0.5)' }, 'a')
    }, [])

    const setClose = (onAnimationComplete?: () => void) => {
        const tl = gsap.timeline();

        tl.to(popup_container_ref?.current, { duration: 0.6, opacity: 0 }, 'b')
            .to(popup_inner_ref?.current, {
                duration: 0.6, y: '100vh', opacity: 0, onComplete: () => {
                    props.setShowPopup(false);
                    if (onAnimationComplete) onAnimationComplete();
                }
            }, 'b')
    }

    return (
        <div onClick={() => setClose()} ref={popup_container_ref} className='fixed h-screen w-screen left-0 top-0 flex items-center justify-center bg-gray-200/50 z-[999] opacity-0 px-3 py-4'>
            <div onClick={(e) => e?.stopPropagation()} ref={popup_inner_ref} style={{ maxWidth: props.maxWidth }} className={`w-full mx-auto flex items-center justify-center translate-y-[100vh] opacity-0`}>
                {children(setClose)}
            </div>
        </div>
    )
}

export default PopupContainer;