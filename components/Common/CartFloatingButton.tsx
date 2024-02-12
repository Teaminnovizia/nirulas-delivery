'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';
import { BsCart } from 'react-icons/bs';

const CartFloatingButton = () => {
    const router = useRouter();
    const cartRef = useRef<HTMLButtonElement>(null);
    // const CartData = useRecoilValue(cart_atom);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const triggerScrollHeight = 300;

        ScrollTrigger.create({
            trigger: window,
            start: triggerScrollHeight - window.innerHeight, // Account for viewport height
            end: triggerScrollHeight, // Show button from this scroll position
            onUpdate: (trigger) => {
                if(cartRef.current) {
                    // Ensure visibility for both directions
                    cartRef.current.style.visibility = trigger.direction === 1 ? 'visible' : 'hidden';

                    // Animation for smooth sliding in both directions
                    gsap.to(cartRef, {
                        duration: 0.5,
                        y: trigger.direction === 1 ? 0 : window.innerHeight, // Adjust animation distance if needed
                        ease: 'power3.inOut', // Customize easing as desired
                    });
                }
            },
        });
    }, [])

    function goToCart() {
        router.push("/cart")
    }

    return (
        <button ref={cartRef} onClick={goToCart} className='fixed z-[500] bottom-[150px] left-[26px] cursor-pointer overflow-hidden rounded-full bg-primary-red flex items-center justify-start gap-3 text-white p-3 text-xl w-[45px] h-[45px]'>
            <BsCart className='text-2xl' title='Cart' />
            {/* <p className='text-sx text-white'>{CartData?.carts_items?.length}</p> */}
        </button>
    )
}

export default CartFloatingButton;