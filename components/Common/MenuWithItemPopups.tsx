'use client'

import { MenuItemsContainer } from "@/components/Common";
import { CATEGORY_DATA } from "@/utils/constants";
import { useState } from 'react';
import { ItemDetailPopup, ItemDetailWithAddOnPopup } from "./PopUps";

const MenuWithItemPopups = () => {
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);
    const [showItemDetailWithAddOnPopup, setShowItemDetailWithAddOnPopup] = useState(false);

    return (
        <>
            <div className='w-full space-y-12'>
                {CATEGORY_DATA.filter(x => x.items.length).map((x) => (
                    <MenuItemsContainer
                        data={x}
                        key={x._id}
                        setShowItemDetail={setShowItemDetailPopup}
                        setShowItemDetailWithAddOn={setShowItemDetailWithAddOnPopup}
                    />
                ))}
            </div>

            {showItemDetailPopup && (
                <ItemDetailPopup
                    showPopup={showItemDetailPopup}
                    setShowPopup={setShowItemDetailPopup}
                />
            )}

            {showItemDetailWithAddOnPopup && (
                <ItemDetailWithAddOnPopup
                    showPopup={showItemDetailWithAddOnPopup}
                    setShowPopup={setShowItemDetailWithAddOnPopup}
                />
            )}
        </>
    )
}

export default MenuWithItemPopups;