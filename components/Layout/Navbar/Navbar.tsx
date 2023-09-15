'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';

const SmallNav = dynamic(() => import('./SmallNav'));

const Navbar = () => {
    const router = useRouter();
    const [show_small_nav, setShow_small_nav] = useState(false);

    // stopping background from scrolling while this drawer is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (show_small_nav) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = 'auto';
        }
    }, [show_small_nav])

    return (
        <>
            <header className={`w-full sm:px-8 px-2 z-[999] bg-primary-red`}>
                <nav className="flex gap-4 mx-auto max-w-7xl w-full items-center justify-between py-6 relative">
                    {/* logo */}
                    <h2 onClick={() => router?.push('/')} className={`text-3xl font-bold text-normal-text tracking-widest cursor-pointer filter_purple`} title='Nirulas'>
                        <Image
                            src='/Images/logo/logo.png'
                            alt='logo'
                            quality={100}
                            width={150}
                            height={100}
                            priority
                        />
                    </h2>

                    {/* links */}
                    <div className={`flex items-center gap-8 text-base`}>
                        {/* <div className={`hidden lg:flex items-center gap-8 text-base font-medium uppercase`}>
                            {links?.map((x, i) => (
                                <Link href={x?.slug} key={x?.title} className='nav_link group relative'>
                                    {x?.title}
                                </Link>
                            ))}
                        </div> */}

                        {/* <button className='uppercase text-primary-red bg-white rounded-full px-4 py-2 font-extrabold'>
                        Order Now
                    </button> */}
                    </div>

                    <button title='Toggle Nav' onClick={() => setShow_small_nav(true)} className='hidden max-lg:inline-block text-white text-3xl cursor-pointer'>
                        <TbMenu2 />
                    </button>
                </nav>
            </header>

            <SmallNav
                show_small_nav={show_small_nav}
                setShow_small_nav={setShow_small_nav}
            />
        </>
    )
}

export default Navbar;