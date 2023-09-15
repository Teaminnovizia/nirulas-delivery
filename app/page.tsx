import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));

const Home = () => {
    return (
        <>
            <HeroBanner />
        </>
    )
}

export default Home;