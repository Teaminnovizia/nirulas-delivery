import '@/styles/floating.css';
import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));
const Category = dynamic(() => import('@/components/Pages/Home/Category'));
const Menu = dynamic(() => import('@/components/Pages/Home/Menu'));
const HelpUs = dynamic(() => import('@/components/Pages/Home/HelpUs'));
const GoUpFloatingButton = dynamic(() => import('@/components/Common').then(mod => mod.GoUpFloatingButton));
const MenuFloatingButton = dynamic(() => import('@/components/Common').then(mod => mod.MenuFloatingButton));

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Category />
            <Menu />
            <HelpUs />

            {/* floating buttons */}
            <GoUpFloatingButton />
            <MenuFloatingButton />
        </>
    )
}

export default Home;