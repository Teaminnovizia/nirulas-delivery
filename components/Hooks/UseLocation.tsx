/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
'use client';

import { location_using_coords } from "@/utils/constants/routes";
import axios from "axios";
import { useEffect, useState } from "react";

const UseLocation = () => {
    const [coords, setCoords] = useState<GeolocationCoordinates>();
    const [location, setLocation] = useState('');

    useEffect(() => {
        setCurrentCoords();
    }, [])

    useEffect(() => {
        if (!coords) return;

        (async () => {
            await setLocationFromCoords(coords);
        })()
    }, [coords])


    const setCurrentCoords = () => {
        if ("geolocation" in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.getCurrentPosition(
                // Success callback function
                (position) => setCoords(position.coords),
                // Error callback function
                (error) => console.log({ error }),
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        }
    }

    const setLocationFromCoords = async (coords: GeolocationCoordinates) => {
        if (!process || !process.env?.NEXT_PUBLIC_GEOAPIFY_API_KEY) return;

        try {
            const { data } = await axios.get(location_using_coords + `lat=${coords.latitude}&lon=${coords.longitude}&apiKey=${process.env?.NEXT_PUBLIC_GEOAPIFY_API_KEY}`)

            if (data?.features?.length) setLocation(data?.features?.[0]?.properties?.postcode);
            // if (data?.features?.length) setLocation(data?.features?.[0]?.properties?.formatted);
        }
        catch (err) {
            console.log(err);
        }
    }

    return location;
}

export default UseLocation;