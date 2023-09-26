'use client'

import { SplashScreen } from '@/components/Common';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { RecoilRoot } from 'recoil';

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <RecoilRoot>
            <SplashScreen />

            <Navbar />

            {children}
        </RecoilRoot>
    )
}
export default Layout;