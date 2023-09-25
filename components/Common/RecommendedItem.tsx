import Image from "next/image";
import { Button } from "../Core";

const RecommendedItem = () => {
    return (
        <div
            className={`flex flex-col items-center space-y-4 text-center outline-none`}
        >
            <div className='flex items-center justify-center mx-auto sm:max-w-[140px] max-w-[200px] w-full h-[140px]'>
                <Image
                    src='/Images/temp/fudge.png'
                    alt='Recommended'
                    quality={100}
                    width={150}
                    height={150}
                    loading='lazy'
                    className='rounded-full overflow-hidden border border-[#C9C3C4]'
                />
            </div>

            <h6 className='sm:text-lg text-base font-rubik normal-case font-bold whitespace-pre-line'>
                Classic Fudge Brownie
            </h6>

            <Button title='Add' />
        </div>
    )
}

export default RecommendedItem;