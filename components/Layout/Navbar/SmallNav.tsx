import { SmallNavProps } from '@/types/SmallNavTypes';
import { getUrlObjectLink } from '@/utils/LibFunctions';
import gsap, { Power3 } from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SmallNav = ({ setShow_small_nav, show_small_nav }: SmallNavProps) => {
    const container = useRef(null);

    useLayoutEffect(() => {
        if (show_small_nav) gsap?.to(container?.current, { duration: 0.8, x: 0, ease: Power3?.easeInOut });
    }, [show_small_nav])

    const setClose = () => {
        gsap?.to(container?.current, { duration: 0.8, x: '100%', ease: Power3?.easeInOut, onComplete: () => setShow_small_nav(false) });
    }

    return (
        <div
            ref={container}
            className='translate-x-[100%] w-screen h-screen fixed top-0 right-0 left-0 bottom-0 hidden max-lg:flex flex-col items-start gap-3 z-[1000] bg-white px-4 py-4 text-base overflow-y-scroll font-semibold'
        >
            <span onClick={setClose} className='absolute top-[16px] right-[16px] p-1 bg-primary-red rounded-sm text-2xl text-white cursor-pointer'>
                <AiOutlineClose />
            </span>

            <div className='flex w-full h-full items-center justify-center flex-col gap-4'>
                <Link href={getUrlObjectLink('/cart')} className='text-primary-grey text-xl'>
                    Cart
                </Link>

                <button className='text-primary-grey text-xl'>
                    Login
                </button>

                <button className='text-primary-grey text-xl'>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default SmallNav;