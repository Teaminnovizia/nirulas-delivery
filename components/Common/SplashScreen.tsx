'use client'

import NirulasSplashScreenLogo from "@/icons/NirulasSplashScreenLogo";
import gsap, { Power3 } from "gsap";
import { useLayoutEffect, useState } from "react";

const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.to('#splash_1', { duration: 0.8, x: 0, width: 0, ease: Power3.easeInOut, delay: 1.2 })
            .to('#splash_2', { duration: 0.8, x: 0, width: 0, ease: Power3.easeInOut, delay: -0.6 })
            .to('#splash_3', { duration: 0.8, x: 0, width: 0, ease: Power3.easeInOut, delay: -0.55, onComplete: () => setShow(false) })
    }, [])

    return (
        show ? (
            <>
                <div id='splash_1' className='fixed top-0 bottom-0 translate-x-full right-full w-screen h-screen z-[1003] bg-primary-red flex items-center justify-center'>
                    <NirulasSplashScreenLogo />
                </div>

                <div id='splash_2' className='fixed top-0 bottom-0 translate-x-full right-full w-screen h-screen z-[1002] bg-secondary-black' />
                <div id='splash_3' className='fixed top-0 bottom-0 translate-x-full right-full w-screen h-screen z-[1001] bg-border-grey' />
            </>
        ) : <></>
    )
}

export default SplashScreen;