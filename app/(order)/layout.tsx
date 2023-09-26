import dynamic from 'next/dynamic';

const HelpUs = dynamic(() => import('@/components/Pages/Home/HelpUs'));
const Footer = dynamic(() => import('@/components/Layout/Footer/Footer'));

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <HelpUs />
            <Footer />
        </>
    )
}

export default RootLayout;