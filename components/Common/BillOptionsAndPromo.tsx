'use client'

import { useState } from "react";
import { CiDiscount1 } from 'react-icons/ci';
import { DropDown } from "../Core";

const deliver_options = ['Now', 'Dine-in', 'Takeaway'];
const tip_options = ['No Tip', '10', '20', '30', '40', '50'];

const BillOptionsAndPromo = () => {
    const [selected_delivery, setSelected_delivery] = useState(deliver_options[0]);
    const [selected_tip, setSelected_tip] = useState(tip_options[0]);

    return (
        <div className='w-full sm:px-4 space-y-3'>
            <div className='w-full flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-2 max-sm:flex-col'>
                <h5 className='font-rubik font-bold'>
                    Delivery
                </h5>

                <DropDown
                    all_choices={deliver_options}
                    selected_val={selected_delivery}
                    onChange={(newVal) => setSelected_delivery(newVal)}
                />
            </div>

            <div className='w-full flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-2 max-sm:flex-col'>
                <h5 className='font-rubik font-bold'>
                    Tip
                </h5>

                <DropDown
                    all_choices={tip_options}
                    selected_val={selected_tip}
                    onChange={(newVal) => setSelected_tip(newVal)}
                />
            </div>

            <div className='flex items-center justify-center w-full'>
                <button className='outline-none flex items-center space-x-2 border border-[#3C3C3C] rounded-full px-4 py-2 text-[#4F4F4F] uppercase'>
                    <CiDiscount1 className='text-xl' />

                    <p className='text-[#4F4F4F] font-rubik'>
                        Apply promocode
                    </p>
                </button>
            </div>
        </div>
    )
}

export default BillOptionsAndPromo;