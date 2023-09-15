import Image from "next/image";

const HeroBanner = () => {
    return (
        <section className='w-full'>
            <div className='w-full relative aspect-[16/5]'>
                <Image
                    src='/Images/home/home_slide_bg1.png'
                    alt='Banner'
                    quality={100}
                    fill
                    priority
                    className='object-cover'
                />
            </div>
        </section>
    )
}

export default HeroBanner;