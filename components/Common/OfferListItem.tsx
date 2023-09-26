import Image from "next/image";
import { Button } from "../Core";

const OfferListItem = () => {
    return (
        <div className='w-full rounded-xl bg-secondary-light-red flex sm:items-center justify-between sm:space-x-4 max-sm:space-y-4 px-3 py-5 max-sm:flex-col'>
            <div className='flex items-center space-x-3'>
                <Image
                    src='/Images/offers/welcome.svg'
                    alt='Offer'
                    quality={100}
                    width={100}
                    height={100}
                    loading='lazy'
                />

                <div className='space-y-2'>
                    <h6 className='font-rubik font-medium text-sm text-black'>
                        Welcome offers
                    </h6>

                    <small className='font-rubik text-[11px]'>
                        Exclusive to New Delhi: Limited-time offer!
                    </small>
                </div>
            </div>

            <Button title='Apply now' className='font-normal text-sm flex-shrink-0' />
        </div>
    )
}

export default OfferListItem;