import { Button } from "@/components/Core";
import { CommonProps } from "@/types/PopUpsTypes";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import PopupContainer from "./PopupContainer";

const ItemDetailPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    return (
        <PopupContainer
            maxWidth='520px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-4 px-2 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto space-y-6'>
                        <div className='w-full relative'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute left-1 text-primary-red cursor-pointer -top-3 text-2xl'
                            />

                            <h1 className='sm:text-3xl text-2xl text-center sm:max-w-[65%] max-w-[80%] w-full mx-auto normal-case'>
                                Chatpata Aloo Burger
                            </h1>
                        </div>

                        <div className='max-w-[80%] w-full mx-auto flex items-center justify-center'>
                            <Image
                                src='/Images/menu/burger-5.png'
                                alt='Burger'
                                quality={100}
                                width={250}
                                height={250}
                                loading='lazy'
                            // className='rounded-full overflow-visible'
                            />
                        </div>

                        <div className='max-w-sm mx-auto w-full space-y-3'>
                            <h6 className='normal-case font-rubik font-bold'>
                                Details
                            </h6>

                            <div className='w-full grid grid-cols-3 auto-rows-auto'>
                                <div className='text-center px-2 space-y-1 border-r border-primary-skin'>
                                    <p className='text-[#515151] font-rubik font-medium'>
                                        Size
                                    </p>

                                    <h6 className='normal-case font-rubik font-bold'>
                                        Medium
                                    </h6>
                                </div>

                                <div className='text-center px-2 space-y-1 border-r border-primary-skin'>
                                    <p className='text-[#515151] font-rubik font-medium'>
                                        Weight
                                    </p>

                                    <h6 className='normal-case font-rubik font-bold'>
                                        400gm
                                    </h6>
                                </div>

                                <div className='text-center px-2 space-y-1'>
                                    <p className='text-[#515151] font-rubik font-medium'>
                                        Price
                                    </p>

                                    <h6 className='normal-case font-rubik font-bold'>
                                        ₹ 249
                                    </h6>
                                </div>
                            </div>

                            <div className='w-full flex items-center justify-center space-x-1 flex-wrap rounded-full px-3 py-1.5 border border-[#A8A8A8] font-rubik'>
                                <span className='text-secondary-green'>00kcal -</span>
                                <span>00g Protein</span> •
                                <span>00g Carbs</span> •
                                <span>00g Fat</span>
                            </div>

                            <h6 className='normal-case font-rubik font-bold'>
                                Ingredients
                            </h6>

                            <p className='font-rubik text-normal-grey text-justify'>
                                100 grams of mushrooms, olives, bell peppers, pizza cheese , see more...
                            </p>

                            <Button title='Add to cart' className='max-w-fit w-full mx-auto' />
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default ItemDetailPopup;