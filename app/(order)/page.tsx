"use client"

import '@/styles/floating.css';
import dynamic from "next/dynamic";

const HeroBanner = dynamic(() => import('@/components/Pages/Home/HeroBanner'));
const Category = dynamic(() => import('@/components/Pages/Home/Category'));
const Menu = dynamic(() => import('@/components/Pages/Home/Menu'));
const GoUpFloatingButton = dynamic(() => import('@/components/Common').then(mod => mod.GoUpFloatingButton));
const CategoryFloatingButton = dynamic(() => import('@/components/Common').then(mod => mod.CategoryFloatingButton));

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Category />
            <Menu />

            {/* floating buttons */}
            <GoUpFloatingButton />
            <CategoryFloatingButton />
        </>
    )
}

export default Home;