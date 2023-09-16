import { SplashScreen } from '@/components/Common';
import Navbar from '@/components/Layout/Navbar/Navbar';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Layout/Footer/Footer'));

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <Head />

            <body>
                <SplashScreen />

                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    )
}

export default RootLayout;

const Head = () => {
    return (
        <head>
            <title>Delivery | Nirulas</title>
            <meta name="description" content='Delivery Nirulas' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
    )
}