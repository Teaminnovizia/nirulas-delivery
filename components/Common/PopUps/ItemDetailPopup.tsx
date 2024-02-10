import { Button } from "@/components/Core";
import { CommonProps } from "@/types/PopUpsTypes";
import { ProductProps } from "@/types/ProductTypes";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import PopupContainer from "./PopupContainer";

const ItemDetailPopup = ({ showPopup, setShowPopup, productInfo }: { productInfo: ProductProps } & CommonProps) => {
    return (
        <PopupContainer
            maxWidth='520px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-4 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='w-full space-y-6'>
                        <div className='w-full relative'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute left-1 text-primary-red cursor-pointer -top-3 text-2xl'
                            />

                            <h2 className='sm:text-3xl text-2xl text-center sm:max-w-[65%] max-w-[80%] w-full mx-auto normal-case'>
                                {productInfo?.name}
                            </h2>
                        </div>

                        <div className='max-w-[80%] w-full mx-auto flex items-center justify-center'>
                            <Image
                                src={`${BaseUrl}public${productInfo?.thumbnail}`}
                                alt={productInfo?.name}
                                quality={100}
                                width={250}
                                height={250}
                                priority
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
                                        -
                                    </h6>
                                </div>

                                <div className='text-center px-2 space-y-1 border-r border-primary-skin'>
                                    <p className='text-[#515151] font-rubik font-medium'>
                                        Weight
                                    </p>

                                    <h6 className='normal-case font-rubik font-bold'>
                                        -
                                    </h6>
                                </div>

                                <div className='text-center px-2 space-y-1'>
                                    <p className='text-[#515151] font-rubik font-medium'>
                                        Price
                                    </p>

                                    <h6 className='normal-case font-rubik font-bold'>
                                        ₹{productInfo?.price}
                                    </h6>
                                </div>
                            </div>

                            <div className='w-full flex items-center justify-center space-x-1 flex-wrap rounded-full px-3 py-1.5 border border-[#A8A8A8] font-rubik'>
                                <span className='text-secondary-green'>{productInfo?.energy || '0'}kcal -</span>
                                <span>{productInfo?.protein || '0'} Protein</span> <span>•</span>
                                <span>{productInfo?.carbohydrates || '0'} Carbs</span> <span>•</span>
                                <span>{productInfo?.fat || '0'} Fat</span>
                            </div>

                            <h6 className='normal-case font-rubik font-bold'>
                                Ingredients
                            </h6>

                            <p className='font-rubik text-normal-grey text-justify'>
                                {productInfo?.clean_description}
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