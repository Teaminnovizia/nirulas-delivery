'use client'

import { SplashScreen } from '@/components/Common';
import Navbar from '@/components/Layout/Navbar/Navbar';
import dynamic from 'next/dynamic';
import { RecoilRoot } from 'recoil';

const HelpUs = dynamic(() => import('@/components/Pages/Home/HelpUs'));
const Footer = dynamic(() => import('@/components/Layout/Footer/Footer'));

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>
            <SplashScreen />

            <Navbar />

            {children}

            <HelpUs />
            <Footer />
        </RecoilRoot>
    )
}
export default Layout;