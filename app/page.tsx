import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));
const Category = dynamic(() => import('@/components/Pages/Home/Category'));

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Category />
        </>
    )
}

export default Home;