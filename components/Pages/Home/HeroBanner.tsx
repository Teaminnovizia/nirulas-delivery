'use client';

import { getHomeSliders } from "@/utils/LibFunctions";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false
};

const HeroBanner = () => {
    const [Sliders, setSliders] = useState<any[]>([]);

    useEffect(() => {
        getHomeSliders()
        .then(data => {
            // console.log(data);
            setSliders(data);
        })
        .catch(e => console.log(e));
    }, [])
    return (
        <section className='w-full'>
            <Slider {...settings} className='w-full'>
                {Sliders?.map((x) => (
                    <div key={x?.alt} className='w-full relative aspect-[16/5]'>
                        <Image
                            src={BaseUrl + "public" + x?.desktop_banner}
                            alt={x?.name}
                            quality={100}
                            fill
                            priority
                            className='object-cover'
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default HeroBanner;

const DATA = [
    {
        image: '/Images/home/home_slide_bg1.png',
        alt: 'Jamun'
    },
    {
        image: '/Images/home/home_slide_bg2.png',
        alt: 'Pizza'
    },
    {
        image: '/Images/home/home_slide_bg3.png',
        alt: 'Burger'
    },
    {
        image: '/Images/home/home_slide_bg4.png',
        alt: 'Healthy'
    },
]