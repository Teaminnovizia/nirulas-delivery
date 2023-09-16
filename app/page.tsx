import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));
const Category = dynamic(() => import('@/components/Pages/Home/Category'));
const Menu = dynamic(() => import('@/components/Pages/Home/Menu'));

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Category />
            <Menu />
        </>
    )
}

export default Home;