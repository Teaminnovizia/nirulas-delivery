import { Checkbox, LinkButton } from "@/components/Core";
import GreenRectIcon from "@/icons/GreenRectIcon";
import { CommonProps } from "@/types/PopUpsTypes";
import { BaseUrl } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import PopupContainer from "./PopupContainer";

const ItemDetailWithAddOnPopup = ({ showPopup, setShowPopup, productInfo }: CommonProps) => {
    const [selectedBase, setSelectedbase] = useState<any>(null);
    const [baseData, setBaseData] = useState<any>(null);

    useEffect(() => {
        if(productInfo) {
            var _bases = productInfo.customize_data.find((cd: any) => cd.is_base);
            if(_bases?.item) {
                var _selected_base = _bases?.item?.find((bt: any) => bt?.price == productInfo?.price);
                setSelectedbase(_selected_base);
            }
            setBaseData(_bases);
        }
    }, [productInfo])

    useEffect(() => {
        if(selectedBase) {
            // after base select logic
        }
    }, [selectedBase])

    function onBaseclick(_base: any) {
        alert(JSON.stringify(_base));
        setSelectedbase(_base);
    }

    return (
        <PopupContainer
            maxWidth='1000px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-3xl shadow-md sm:py-8 py-5 sm:px-4 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:auto-rows-auto w-full gap-5'>
                        <div className='w-full space-y-6 relative max-w-sm mx-auto'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute lg:-left-5 left-0 text-primary-red cursor-pointer -top-3 text-2xl'
                            />

                            <div className='max-w-[80%] w-full max-md:mx-auto flex items-center max-md:justify-center justify-start'>
                                <Image
                                    src={`${BaseUrl}public${productInfo?.thumbnail}`}
                                    alt='Burger'
                                    quality={100}
                                    width={320}
                                    height={320}
                                    priority
                                // className='rounded-full overflow-visible'
                                />
                            </div>

                            <div>
                                <h2 className='text-2xl text-left font-rubik'>
                                    {productInfo?.name}
                                </h2>

                                <h2 className='text-2xl text-left font-rubik'>
                                    ₹ {productInfo?.price}
                                </h2>
                            </div>

                            <div className='w-full space-y-3'>
                                <p className='font-rubik text-normal-grey text-justify capitalize text-[13px]'>
                                    {productInfo?.clean_description}
                                </p>

                                <span className='w-full h-0.5 bg-primary-red flex-shrink-0 flex' />

                                {/* <Button title='Add to cart' className='max-w-fit w-full mx-auto !mt-6' /> */}
                                <LinkButton href='/cart' title='Add to cart' className='max-w-fit w-full mx-auto !mt-6' />
                            </div>
                        </div>

                        <div className='w-full space-y-6 max-w-sm mx-auto'>
                            <div className='w-full space-y-4'>
                                <h5 className='normal-case font-rubik font-bold'>
                                    {/* Burger */}
                                    Customize
                                </h5>

                                <div className='max-w-full w-full overflow-x-scroll'>
                                    <div className='w-full flex items-center space-x-2'>
                                        {
                                            baseData?.item?.map((base: any, i: number) => <ItemVarient base={base} key={i} onClick={onBaseclick} selectedBase={selectedBase} />)
                                        }
                                        {/* <ItemVarient />
                                        <ItemVarient />
                                        <ItemVarient />
                                        <ItemVarient /> */}
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

const ItemVarient = ({ base, selectedBase, onClick }: { base: any, selectedBase: any, onClick: Function }) => {
    return (
        <div className={`rounded-2xl p-3 border border-[#AAAAAA] space-y-2 w-fit flex-shrink-0 cursor-pointer ${selectedBase.id == base.id && 'bg-red-300'}`} onClick={() => onClick(base)}>
            <Image
                src='/Images/menu/burger-6.jpeg'
                alt='Burger'
                quality={100}
                width={70}
                height={70}
                loading='lazy'
            />

            <div className='space-y-1'>
                <h5 className='normal-case font-rubik font-medium text-base'>
                    {base?.title}
                </h5>

                {
                    base?.show_price && <h6 className='normal-case font-rubik font-medium'>
                        ₹ {base?.price}
                    </h6>
                }
                
            </div>
        </div>
    )
}

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