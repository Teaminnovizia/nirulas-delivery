'use client';

import { useEffect } from 'react';
import { AiOutlineUp } from 'react-icons/ai';

const GoUpFloatingButton = () => {
    const onScroll = () => {
        const bt = document.getElementById('goUp');

        if (document?.body?.scrollTop > 160 || document?.documentElement?.scrollTop > 160) bt?.classList?.add('active');
        else bt?.classList?.remove('active');
    }

    useEffect(() => {
        if (window !== undefined) {
            document.addEventListener('scroll', onScroll)

            return () => document?.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <button onClick={() => window?.scrollTo(0, 0)} id='goUp' title='Go Up' className='fixed z-[500] bottom-6 cursor-pointer go_up flex items-center justify-center rounded-full'>
            <AiOutlineUp className='text-2xl' />
        </button>
    )
}

export default GoUpFloatingButton;