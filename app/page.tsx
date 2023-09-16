import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));
const Category = dynamic(() => import('@/components/Pages/Home/Category'));
const Menu = dynamic(() => import('@/components/Pages/Home/Menu'));
const HelpUs = dynamic(() => import('@/components/Pages/Home/HelpUs'));

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Category />
            <Menu />
            <HelpUs />
        </>
    )
}

export default Home;