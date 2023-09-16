'use client';

import Image from "next/image";
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
    return (
        <section className='w-full'>
            <Slider {...settings} className='w-full'>
                {DATA?.map((x) => (
                    <div key={x?.alt} className='w-full relative aspect-[16/5]'>
                        <Image
                            src={x?.image}
                            alt={x?.alt}
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