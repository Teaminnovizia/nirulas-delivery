'use client'

import { cart_atom, location_atom, login_popup, signup_popup } from '@/atoms/index';
import LocationPopup from '@/components/Common/PopUps/LocationPopup';
import UseLocation from '@/components/Hooks/UseLocation';
import { getUrlObjectLink } from '@/utils/LibFunctions';
import { nirulasWebsiteURL } from '@/utils/constants';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { TbMenu2 } from 'react-icons/tb';
import { useRecoilState, useRecoilValue } from 'recoil';

const SmallNav = dynamic(() => import('./SmallNav'));
const LoginPopup = dynamic(() => import('@/components/Common/PopUps').then(mod => mod?.LoginPopup));
const SignUpPopup = dynamic(() => import('@/components/Common/PopUps').then(mod => mod?.SignUnPopup));

const Navbar = () => {
    const location = UseLocation();
    const address = useRecoilValue(location_atom);
    const CartData = useRecoilValue(cart_atom);
    const pathname = usePathname();
    const [show_small_nav, setShow_small_nav] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showLogin, setShowLogin] = useRecoilState(login_popup);
    const [showSignUp, setShowSignUp] = useRecoilState(signup_popup);

    // stopping background from scrolling while this drawer is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (show_small_nav) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = 'auto';
        }
    }, [show_small_nav])

    return (
        <>
            <header className={`relative w-full sm:px-8 px-3 bg-white border-t-[16px] border-primary-red`}>
                <nav className="flex gap-4 mx-auto max-w-6xl w-full items-center justify-between py-6">
                    {pathname === '/' ? (
                        <a href={nirulasWebsiteURL} className='absolute left-5 hidden md:flex items-center gap-1 uppercase font-bold'>
                            <BsCaretLeftFill />
                            Home
                        </a>
                    ) : (
                        <Link href='/' className='absolute left-5 hidden md:flex items-center gap-1 uppercase font-bold'>
                            <BsCaretLeftFill />
                            Back
                        </Link>
                    )}

                    {/* logo */}
                    <div className='flex items-center gap-5 max-[1320px]:pl-20 max-md:p-0'>
                        <Link href={getUrlObjectLink('/')} className='cursor-pointer' title='Nirulas'>
                            <Image
                                src='/Images/logo/logo-red.png'
                                alt='logo'
                                quality={100}
                                width={120}
                                height={100}
                                priority
                            />
                        </Link>

                        <div className='flex items-start gap-1 cursor-pointer' onClick={() => setShowLocation(true)}>
                            <MdLocationOn className='text-grey-red text-xl' />

                            <div>
                                <p className='text-primary-grey font-rubik font-medium max-sm:text-xs max-md:text-sm'>
                                    {/* {location || 'Ymca, 1, Ashoka Rd, Hanu'} */}
                                    {address || 'Pin Your Location'}
                                </p>

                                {/* <p className='text-primary-grey font-rubik font-medium max-sm:text-xs max-md:text-sm'>
                                    Add Your Address
                                </p> */}
                            </div>
                        </div>
                    </div>

                    {/* links */}
                    <div className={`hidden lg:flex items-center gap-8 text-base font-medium uppercase`}>
                        <Link href={getUrlObjectLink('/cart')} className='font-rubik text-primary-grey relative'>
                            <p className='text-primary-red absolute bottom-3 -right-1'>{CartData?.carts_items?.length}</p>
                            <Image
                                src='/Images/icons/icecream-stall.png'
                                alt='Cart'
                                quality={100}
                                width={20}
                                height={20}
                                priority
                            />
                        </Link>

                        <button onClick={() => setShowLogin(true)} className='font-rubik text-primary-grey'>
                            Login
                        </button>

                        <button onClick={() => setShowSignUp(true)} className='font-rubik text-primary-grey'>
                            Sign up
                        </button>
                    </div>

                    <button title='Toggle Nav' onClick={() => setShow_small_nav(true)} className='hidden max-lg:inline-block text-primary-red text-3xl cursor-pointer'>
                        <TbMenu2 />
                    </button>
                </nav>
            </header>

            {show_small_nav && (
                <SmallNav
                    show_small_nav={show_small_nav}
                    setShow_small_nav={setShow_small_nav}
                />
            )}

            {showLogin && (
                <LoginPopup
                    showPopup={showLogin}
                    setShowPopup={setShowLogin}
                />
            )}

            {showSignUp && (
                <SignUpPopup
                    showPopup={showSignUp}
                    setShowPopup={setShowSignUp}
                />
            )}

            {showLocation && (
                <LocationPopup
                    showPopup={showLocation}
                    setShowPopup={setShowLocation}
                />
            )}
        </>
    )
}

export default Navbar;