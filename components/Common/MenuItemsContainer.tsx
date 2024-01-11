'use client'

import { MenuItemsContainerProps } from '@/types/MenuTypes';
import { useState } from 'react';
import { MenuItem } from "../Core";

const MenuItemsContainer = ({ data, addToCart, ...restProps }: { data: PropsType, addToCart: Function } & MenuItemsContainerProps) => {
    const [ProductData, setProductData] = useState<PropsType>(data);
    const [selectedSubmenuId, setSelectedSubmenuId] = useState(null);
    // function selectPoroduct(id: any) {
    //     var item = data.items.find(p => p.id == id);
    //     const obj = {
    //         id: data.id,
    //         pid: id,
    //         item
    //     }
    // }

    function onClick(id: any) {
        setSelectedSubmenuId(id);

        var items = data?.items.filter(pi => pi.sub_menu_id == id);

        setProductData({ ...ProductData, items });
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
            </div>
            <div className='flex flex-wrap items-center gap-1'>
                {
                    data.sub_menus.map((sm, i: number) => (
                        <div className='flex' key={i}>
                            <button className={`px-2 py-1 ring-2 rounded ${selectedSubmenuId != sm.id && "shadow-md ring-0"}`} onClick={() => onClick(sm.id)}>{sm.title}</button>
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
    items: {
        id: string
        name: string
        thumbnail: string
        price: number
        description: string
        clean_description: string
        sub_menu_id?: number
        is_customizable: number
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