'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useState } from 'react';

const DownloadApp = () => {
    const [show, setShow] = useState(true);

    const setClose = () => {
        gsap.to('#app_download', { duration: .5, opacity: 0, onComplete: () => setShow(false) })
    }

    return (
        show ? (
            <div id='app_download' className='fixed sm:right-10 -right-2 sm:bottom-4 bottom-0 w-[400px] z-[1000] max-sm:scale-[0.8]'>
                <button onClick={setClose} className='absolute -top-[20px] -right-[20px]'>
                    <Image
                        src='/Images/blogs/close.png'
                        alt='Close'
                        quality={100}
                        width={40}
                        height={40}
                        loading='lazy'
                    />
                </button>

                <div className='w-full bg-[#D30000] px-6 py-6 rounded-3xl grid grid-cols-2 auto-rows-auto gap-2 overflow-hidden' style={{ boxShadow: '3px 3px 10px 0px rgba(0, 0, 0, 0.25)' }}>
                    <div className='w-full relative'>
                        <Image
                            src='/Images/blogs/app.png'
                            alt='App'
                            quality={100}
                            width={250}
                            height={250}
                            loading='lazy'
                            className='absolute -bottom-[40px]'
                        />
                    </div>

                    <div className='flex flex-col items-end gap-2 w-full text-right'>
                        <h5 className='leading-[1] text-2xl'>
                            Your favorite Nirula’s store is now a <br /> tap away!
                        </h5>

                        <button className='px-4 py-2 font-rubik-one bg-white text-[#1B1B1B] rounded-full uppercase font-bold text-xs whitespace-nowrap'>
                            Download the App
                        </button>
                    </div>
                </div>
            </div>
        ) : <></>
    )
}

export default DownloadApp;