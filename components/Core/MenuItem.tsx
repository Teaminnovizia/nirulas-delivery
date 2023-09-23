import StarIcon from "@/icons/StarIcon";
import { MenuItemProps } from "@/types/MenuTypes";
import Image from "next/image";
import Button from "./Button";

const MenuItem = ({ data, ...restProps }: { data: PropsType } & MenuItemProps) => {
    return (
        <div
            className='flex rounded-2xl w-full h-full bg-white flex-col gap-2 overflow-hidden'
            style={{ boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.02), 0px 4px 16px 3px rgba(0, 0, 0, 0.05)' }}
        >
            <div onClick={() => restProps.setShowItemDetail(true)} className='relative w-full aspect-[16/8] cursor-pointer'>
                <Image
                    src={data.image}
                    alt={data.title}
                    quality={100}
                    fill
                    loading='lazy'
                    className='object-cover'
                />
            </div>

            <div className='sm:px-8 px-4 sm:py-6 py-4 w-full space-y-2'>
                <div className='flex items-center w-full justify-between gap-4'>
                    <h4 className='font-rubik text-normal-black normal-case font-bold md:text-3xl text-2xl'>
                        {data.title}
                    </h4>

                    <Button title="ADD" onClick={() => restProps.setShowItemDetailWithAddOn(true)} />
                </div>

                <div className='flex items-center gap-4'>
                    <h5 className='font-rubik normal-case font-bold md:text-3xl text-2xl text-primary-red'>
                        ₹{data.price}
                    </h5>

                    <div className='flex items-center gap-1'>
                        <div className='flex items-center justify-center flex-shrink-0 border border-primary-green rounded-sm p-1'>
                            <span className='w-3 h-3 rounded-full bg-primary-green' />
                        </div>

                        <StarIcon width={28} height={28} />
                    </div>
                </div>

                <p className='font-rubik font-normal text-justify'>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default MenuItem;

// ***temp type***
interface PropsType {
    _id: string
    title: string
    image: string
    price: number
    description: string
}