'use client'

import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const RecommendedItem = dynamic(() => import('@/components/Common').then(mod => mod.RecommendedItem));

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow top='50%' right='-20px' color='black' />,
    prevArrow: <LeftArrow top='50%' left='-20px' color='black' />,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 3,
                nextArrow: <RightArrow top='50%' color='black' />,
                prevArrow: <LeftArrow top='50%' color='black' />,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                nextArrow: <RightArrow top='50%' right='0' color='black' />,
                prevArrow: <LeftArrow top='50%' left='0' color='black' />,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                nextArrow: <RightArrow top='50%' right='0' color='black' />,
                prevArrow: <LeftArrow top='50%' left='0' color='black' />,
            }
        },
    ]
};

const Recommended = ({ products }: any) => {


    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto py-4 space-y-8'>
                <h2 className='font-rubik text-primary-red text-center font-bold'>
                    recommended FOr you
                </h2>

                <Slider {...settings} className='w-full sub_brand_slick'>
                    {products?.map((x: any, key: number) => (
                        <div key={key}>
                            <RecommendedItem data={x} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Recommended;