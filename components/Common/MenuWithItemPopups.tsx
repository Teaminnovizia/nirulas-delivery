'use client'

import { MenuItemsContainer } from "@/components/Common";
import { CATEGORY_DATA } from "@/utils/constants";
import { useState } from 'react';
import { ItemDetailPopup } from "./PopUps";

const MenuWithItemPopups = () => {
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);

    return (
        <>
            <div className='w-full space-y-12'>
                {CATEGORY_DATA.filter(x => x.items.length).map((x) => (
                    <MenuItemsContainer
                        data={x}
                        key={x._id}
                        setShowItemDetail={setShowItemDetailPopup}
                    />
                ))}
            </div>

            {showItemDetailPopup && (
                <ItemDetailPopup
                    showPopup={showItemDetailPopup}
                    setShowPopup={setShowItemDetailPopup}
                />
            )}
        </>
    )
}

export default MenuWithItemPopups;