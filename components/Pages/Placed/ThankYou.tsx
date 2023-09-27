import { Weather } from "@/components/Common";
import Image from "next/image";

const ThankYou = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto pb-4 space-y-8'>
                <div className='w-full grid sm:grid-cols-7 grid-cols-1 auto-rows-auto gap-8'>
                    <div className='w-full h-full sm:col-span-4'>
                        <Image
                            src='/Images/icons/delivery-5.png'
                            alt='Delivery'
                            quality={100}
                            width={600}
                            height={200}
                            priority
                        // className='scale-110'
                        />
                    </div>

                    <div className='w-full space-y-3 sm:col-span-3 sm:mt-12'>
                        <h1 className='font-rubik normal-case text-3xl font-bold'>
                            Your order has <br /> been accepted!
                        </h1>

                        <h2 className='normal-case font-rubik text-[#FF0303] font-bold sm:text-5xl'>
                            Thank You!
                        </h2>

                        <p className='font-rubik font-medium text-xl'>
                            Your order will deliver in 45-50 min
                        </p>

                        <Weather />
                    </div>
                </div>

                <Image
                    src='/Images/temp/map.jpeg'
                    alt='Map'
                    quality={100}
                    width={1200}
                    height={400}
                    priority
                    className='rounded-2xl'
                />
            </div>
        </section>
    )
}

export default ThankYou;