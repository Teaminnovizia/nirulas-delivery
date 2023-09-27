'use client'

import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

const WEATHERS = ['/Images/weather/raining.png', '/Images/weather/sunny.png', '/Images/weather/night.png']

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState(0);        // index

    const changeImage = () => {
        const tl = gsap.timeline();

        tl.to('#weather_image', { duration: .2, opacity: 0, onComplete: () => setCurrentWeather(currentWeather === WEATHERS.length - 1 ? 0 : currentWeather + 1) })
            .to('#weather_image', { duration: .2, opacity: 1, delay: 0.1 })
    }

    return (
        <Image
            id='weather_image'
            src={WEATHERS?.[currentWeather]}
            alt='Weather'
            quality={100}
            width={500}
            height={200}
            priority
            onClick={changeImage}
            className='cursor-pointer'
        />
    )
}

export default Weather;