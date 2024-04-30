'use client'

import StarIcon from '@/icons/StarIcon';
import { MenuItemsContainerProps } from '@/types/MenuTypes';
import { useState } from 'react';
import { MenuItem } from "../Core";

const MenuItemsContainer = ({ data, addToCart, ...restProps }: { data: PropsType, addToCart: Function } & MenuItemsContainerProps) => {
    const [ProductData, setProductData] = useState<PropsType>(data);
    const [selectedSubmenuId, setSelectedSubmenuId] = useState(-1);
    const [isNonVeg, setIsNonVeg] = useState(-1);
    // function selectPoroduct(id: any) {
    //     var item = data.items.find(p => p.id == id);
    //     const obj = {
    //         id: data.id,
    //         pid: id,
    //         item
    //     }
    // }

    function handleSubMenuChange(id: any) {
        setSelectedSubmenuId(id);
        setIsNonVeg(-1);

        var items = data?.items.filter(pi => pi.sub_menu_id == id);

        setProductData({ ...ProductData, items });
    }

    function handleVegNonvegChange(isNonVeg: number) {

        if(isNonVeg == 2) {
            var items = data?.items.filter(pi => pi.recommended === 1);
            setProductData({ ...ProductData, items });
        }
        else {
            var items = data?.items.filter(pi => pi.is_non_veg == isNonVeg);
            setProductData({ ...ProductData, items });
        }

        setIsNonVeg(isNonVeg);
        setSelectedSubmenuId(-1);

    }

    return (
        <div id={data.id} className='w-full space-y-5'>
            <div className='w-full space-y-3'>
                <div className='flex items-center w-full relative'>
                    <h3 className='sm:text-3xl text-2xl bg-white pr-3'>
                        {data.title}
                    </h3>

                    <span className='absolute w-full h-[1px] bg-primary-grey -z-[1]' />
                </div>

                <p className='w-full text-left text-primary-grey font-medium font-rubik'>
                    100% Original  |  Taste sensations at your fingertips
                </p>
                {data.show_veg_button ? <div className='flex items-center gap-4'>
                    <button className={`flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1 ${isNonVeg == 0 && 'border-primary-red'}`} onClick={() => handleVegNonvegChange(0)}>
                        <div className='flex items-center justify-center flex-shrink-0 border border-primary-green rounded-sm p-1'>
                            <span className='w-2 h-2 rounded-full bg-primary-green' />
                        </div>
                        Veg
                    </button>

                    <button className={`flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1 ${isNonVeg == 1 && 'border-primary-red'}`} onClick={() => handleVegNonvegChange(1)}>
                        <div className='flex items-center justify-center flex-shrink-0 border border-primary-red rounded-sm p-1'>
                            <span className='w-2 h-2 rounded-full bg-primary-red' />
                        </div>
                        Non-veg
                    </button>

                    <button className={`flex items-center gap-2 font-medium rounded-lg border border-[#A8A8A8] px-2 py-1 ${isNonVeg == 2 && 'border-primary-red'}`} onClick={() => handleVegNonvegChange(2)}>
                        <StarIcon width={20} height={20} />
                        Bestseller
                    </button>
                </div> : ""}
            </div>
            <div className='flex flex-wrap items-center gap-1'>
                {
                    data.sub_menus.map((sm, i: number) => (
                        <div className='flex' key={i}>
                            <button className={`px-2 py-1 ring-1 ring-gray-600 rounded ${selectedSubmenuId == sm.id && "shadow-md ring-1 ring-primary-red text-primary-red"}`} onClick={() => handleSubMenuChange(sm.id)}>{sm.title}</button>
                        </div>
                    ))
                }
            </div>

            <div className='w-full grid md:grid-cols-2 grid-cols-1 auto-rows-auto gap-10'>
                {ProductData.items.map((x) => (
                    <MenuItem
                        data={x}
                        key={x.id}
                        setShowItemDetail={restProps.setShowItemDetail}
                        setShowItemDetailWithAddOn={restProps.setShowItemDetailWithAddOn}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuItemsContainer;

// ***temparary type***
interface PropsType {
    id: string
    title: string
    show_veg_button: number
    items: {
        id: string
        name: string
        thumbnail: string
        price: number
        description: string
        clean_description: string
        sub_menu_id?: number
        is_customizable: number
        is_non_veg: number
        is_bestseller: number
    }[],
    sub_menus: {
        id: number
        title: string
    }[]
}

interface SubMenuProps {
    id: string
    title: string
}