import { SmallNavProps } from '@/types/SmallNavTypes';
import gsap, { Power3 } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SmallNav = ({ setShow_small_nav, show_small_nav }: SmallNavProps) => {
    const container = useRef(null);

    useLayoutEffect(() => {
        if (show_small_nav) gsap?.to(container?.current, { duration: 0.8, x: 0, ease: Power3?.easeInOut });
        else gsap?.to(container?.current, { duration: 0.8, x: '100%', ease: Power3?.easeInOut });
    }, [show_small_nav])

    return (
        <div
            ref={container}
            className='translate-x-[100%] w-screen h-screen fixed top-0 right-0 left-0 bottom-0 hidden max-lg:flex flex-col items-start gap-3 z-[1000] bg-white px-4 py-4 pt-16 text-base overflow-y-scroll font-semibold'
        >
            <span onClick={() => setShow_small_nav(false)} className='absolute top-[16px] right-[16px] p-1 bg-primary-red rounded-sm text-2xl text-white cursor-pointer'>
                <AiOutlineClose />
            </span>

            {/* {links?.map((x, i) => (
                <>
                    <Link
                        href={x?.slug}
                        key={x?.title}
                        className='relative px-3 text-black font-poppins'
                        onClick={() => setShow_small_nav(false)}
                    >
                        {x?.title}
                    </Link>

                    {i < links?.length - 1 && <span className='w-full border-b border-[rgba(51,51,51,0.12)]' />}
                </>
            ))} */}
        </div>
    )
}

export default SmallNav;