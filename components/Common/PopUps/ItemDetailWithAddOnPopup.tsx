import { Button, Checkbox } from "@/components/Core";
import GreenRectIcon from "@/icons/GreenRectIcon";
import { CommonProps } from "@/types/PopUpsTypes";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import PopupContainer from "./PopupContainer";

const ItemDetailWithAddOnPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    return (
        <PopupContainer
            maxWidth='1000px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-4 px-2 max-h-[95vh] overflow-y-scroll'>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:auto-rows-auto w-full gap-5'>
                        <div className='w-full space-y-6 relative max-w-sm mx-auto'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute -left-5 text-primary-red cursor-pointer -top-3 text-2xl'
                            />

                            <div className='max-w-[80%] w-full max-md:mx-auto flex items-center max-md:justify-center justify-start'>
                                <Image
                                    src='/Images/menu/burger-5.png'
                                    alt='Burger'
                                    quality={100}
                                    width={320}
                                    height={320}
                                    loading='lazy'
                                // className='rounded-full overflow-visible'
                                />
                            </div>

                            <div>
                                <h2 className='text-2xl text-left font-rubik'>
                                    Chatpata Aloo Burger
                                </h2>

                                <h2 className='text-2xl text-left font-rubik'>
                                    ₹ 99
                                </h2>
                            </div>

                            <div className='w-full space-y-3'>
                                <p className='font-rubik text-normal-grey text-justify capitalize text-[13px]'>
                                    Craving for something Chatpata? Get your lips smacking with the zesty patty made fresh in-house with locally sourced Potatoes and Vegetables. Seasoned with spices and flavoured with home made Tamarind Sauce and Southwest Chilli Sauce. Feel the Zing!
                                </p>

                                <span className='w-full h-0.5 bg-primary-red flex-shrink-0 flex' />

                                <Button title='Add to cart' className='max-w-fit w-full mx-auto !mt-6' />
                            </div>
                        </div>

                        <div className='w-full space-y-6 max-w-sm mx-auto'>
                            <div className='w-full space-y-4'>
                                <h5 className='normal-case font-rubik font-bold'>
                                    Burger
                                </h5>

                                <div className='rounded-2xl p-3 border border-[#AAAAAA] space-y-2 w-fit'>
                                    <Image
                                        src='/Images/menu/burger-6.jpeg'
                                        alt='Burger'
                                        quality={100}
                                        width={70}
                                        height={70}
                                        loading='lazy'
                                    />

                                    <div className='space-y-1'>
                                        <h6 className='normal-case font-rubik font-bold text-base'>
                                            Regular - Classic 7”
                                        </h6>

                                        <h6 className='normal-case font-rubik font-bold text-sm'>
                                            ₹ 238
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full space-y-4'>
                                <h5 className='font-rubik font-bold'>
                                    Extra Toppings
                                </h5>

                                <div className='w-full space-y-2 md:pl-4'>
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                    <ToppingItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default ItemDetailWithAddOnPopup;

const ToppingItem = () => {
    return (
        <div className='flex w-full justify-between items-center space-x-3'>
            <div className='flex items-center space-x-2'>
                <GreenRectIcon width={15} height={15} />

                <p className='font-rubik'>
                    French Fries
                </p>
            </div>

            <Checkbox />
        </div>
    )
}