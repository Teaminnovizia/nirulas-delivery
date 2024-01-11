'use client'

import { MenuWithItemPopups } from "@/components/Common";
import StarIcon from "@/icons/StarIcon";
import { getMenuWithProducts } from "@/utils/LibFunctions";
import Image from "next/image";
import { useEffect, useState } from 'react';

const Menu = () => {
    const [MenuProductData, setMenuProductData] = useState<any[]>([]);

    useEffect(() => {
        getMenuWithProducts()
        .then(data => {
            console.log(data);
            setMenuProductData(data);
        })
        .catch(e => console.log(e));
    }, [])

    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='flex flex-col items-center gap-5 max-w-6xl w-full mx-auto sm:py-8 py-4'>
                <div className='w-full space-y-3'>
                    <div className='flex items-center w-full flex-wrap gap-6 justify-between'>
                        <div className='flex items-center gap-6 max-w-lg w-full'>
                            <h2 className='normal-case sm:text-5xl text-3xl'>
                                Menu
                            </h2>

                            <div className='flex items-center max-w-xs w-full gap-3 border rounded-full border-border-grey px-4 py-1.5'>
                                <Image
                                    src='/Images/icons/search.png'
                                    alt='Search'
                                    quality={100}
                                    width={15}
                                    height={15}
                                    loading='lazy'
                                    className='flex-shrink-0'
                                />

                                <input
                                    type="text"
                                    placeholder='Search a dish or cuisine'
                                    className='outline-none font-normal text-black/75 placeholder:text-black/75 font-rubik w-full'
                                />
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <button className='flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1'>
                                <div className='flex items-center justify-center flex-shrink-0 border border-primary-green rounded-sm p-1'>
                                    <span className='w-2 h-2 rounded-full bg-primary-green' />
                                </div>
                                Veg
                            </button>

                            <button className='flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1'>
                                <div className='flex items-center justify-center flex-shrink-0 border border-primary-red rounded-sm p-1'>
                                    <span className='w-2 h-2 rounded-full bg-primary-red' />
                                </div>
                                Non-veg
                            </button>

                            <button className='flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1'>
                                <StarIcon width={20} height={20} />
                                Bestseller
                            </button>
                        </div>
                    </div>

                    <p className='w-full text-left text-primary-grey font-medium font-rubik'>
                        100% Original  |  Taste sensations at your fingertips
                    </p>
                </div>

                <MenuWithItemPopups MenuProductData={MenuProductData} />
            </div>
        </section>
    )
}

export default Menu;