'use client'

import { AddressSubmitType } from "@/types/PopUpsTypes";
import gsap from "gsap";
import { useEffect } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Button, Divider } from "../Core";

const SavedAddresses = ({ onSubmit, setClose }: { onSubmit: AddressSubmitType, setClose: Function }) => {
    useEffect(() => {
        if (window !== undefined) {
            gsap.to('#saved_addresses', { duration: 0.5, opacity: 1 });
        }
    }, [])

    return (
        <div id='saved_addresses' className='w-full space-y-6'>
            <h2 className='text-2xl font-bold font-rubik'>
                Saved Addresses
            </h2>

            <div className='w-full grid max-[480px]:grid-cols-1 grid-cols-2 gap-8 min-[480px]:gap-y-10 gap-y-5 auto-rows-auto max-h-[75vh] overflow-y-scroll'>
                <AddressCard selected />
                <AddressCard />
                <AddressCard />
                <AddressCard />
            </div>

            <Button
                title='Add address'
                className='max-w-fit mx-auto block'
                onClick={() => onSubmit(0)}
            />
        </div>
    )
}

export default SavedAddresses;

const AddressCard = ({ selected }: { selected?: boolean }) => {
    return (
        <div className={`relative w-full rounded-lg overflow-hidden cursor-pointer ${selected ? 'bg-primary-red' : 'bg-[#C9C3C4]'}`}>
            <div className={`w-full space-y-2 p-3 border rounded-lg rounded-tr-[80px] ${selected ? 'border-primary-red bg-[#FFEEEE]' : 'border-[#C9C3C4] bg-white'}`}>
                <BsCheck2Circle className={`absolute right-[0.4rem] top-[0.3rem] text-xl ${selected ? 'text-white' : 'text-[#C9C3C4]'}`} />

                <h4 className={`font-rubik font-bold ${selected ? 'text-black' : 'text-[#494949]'}`}>
                    HOME
                </h4>

                <p className={`font-rubik text-lg ${selected ? 'text-black' : 'text-[#494949]'}`}>
                    A-65, Block A, Sector 64, Noida, Uttar Pradesh 201301
                </p>

                <Divider className='bg-[#A7A7A7]' />

                <div onClick={(e) => e?.stopPropagation()} className='flex w-full items-center justify-between space-x-3 cursor-default'>
                    <button className='flex items-center space-x-2'>
                        <p className='font-rubik uppercase font-bold text-xs'>
                            Remove
                        </p>

                        <IoIosCloseCircleOutline />
                    </button>

                    <button className='flex items-center space-x-2'>
                        <p className='font-rubik uppercase font-bold text-xs'>
                            Edit
                        </p>

                        <FiEdit className='text-xs' />
                    </button>
                </div>
            </div>
        </div>
    )
}