import AppleButton from "@/icons/AppleButton";
import PlayStoreButton from "@/icons/PlayStoreButton";
import { LinkColProps } from "@/types/FooterTypes";
import Image from "next/image";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';

const Footer = () => {
    return (
        <>
            <footer className='relative w-full bg-primary-brown z-0 !text-primary-white'>
                <div className='max-w-full w-full flex overflow-hidden items-center rounded-3xl rounded-t-[28px] relative -top-6 justify-center'>
                    {Array.from({ length: 160 })?.map((_, i) => (
                        <Verticle_Shade key={i + ''} i={i} />
                    ))}
                </div>

                <div className='mx-auto flex items-start w-full gap-5 py-4 sm:px-8 px-2 flex-wrap justify-between'>
                    <div className='flex flex-col items-center sm:max-w-[15%] w-full'>
                        <Image
                            src='/Images/logo/nirulas.png'
                            alt='logo'
                            quality={100}
                            width={180}
                            height={100}
                            loading='lazy'
                        />
                    </div>

                    <div className='flex lg:max-w-[58%] sm:max-w-[80%] w-full flex-col gap-10 items-center'>
                        <div className='grid sm:grid-cols-4 grid-cols-2 gap-6 w-fit mx-auto'>
                            {LINKS?.map((x) => (
                                <Link_Col
                                    data={x}
                                    key={x?.title}
                                />
                            ))}
                        </div>

                        <div className='flex items-center w-full justify-evenly gap-4 flex-wrap'>
                            <div className='flex gap-3 items-center max-sm:w-full'>
                                <BsShop className='text-3xl' />

                                <h6 className='text-[18px] text-primary-white'>
                                    1800-1025247
                                </h6>
                            </div>

                            <div className='flex gap-3 items-center max-sm:w-full'>
                                <h6 className='text-[18px] text-primary-white'>
                                    Follow Us
                                </h6>

                                <div className='flex items-center gap-2'>
                                    {SOCIAL_LINKS?.map((x) => (
                                        <a key={x?.slug} href={x?.slug} title={x?.title} className='text-lg rounded-full p-1 border-2 border-white'>
                                            {x?.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex lg:flex-col sm:flex-row flex-col lg:gap-3 max-sm:gap-y-5 w-full lg:max-w-[23%] lg:items-end items-center justify-between lg:text-end text-left'>
                        <h5 className='text-[1.7rem] leading-7 text-primary-white'>
                            Your favorite Nirula&apos;s store <br className='hidden lg:inline-block' /> is now a tap away!
                        </h5>

                        <div className='flex items-center gap-1'>
                            <button title="Apple">
                                <AppleButton width={132} height={32} />
                            </button>

                            <button title="Play Store">
                                <PlayStoreButton width={132} height={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='flex w-full items-center justify-center p-4 bg-black uppercase z-0'>
                <p className='text-primary-white'>
                    Copyright © Nirula&apos;s, All Rights Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer;

const Verticle_Shade = ({ i }: { i: number }) => {
    return (
        <span className={`flex-shrink-0 w-10 h-24 rounded-b-full ${i % 2 === 0 ? 'bg-primary-red' : 'bg-grey-red'}`} />
    )
}

const Link_Col = ({ data }: { data: LinkColProps }) => {
    return (
        <div className='flex flex-col items-start w-full gap-2'>
            <h5 className="uppercase text-primary-white">
                {data?.title}
            </h5>

            <div className='flex flex-col gap-1'>
                {data?.links?.map((x) => (
                    <a href={x?.slug} key={x?.title} className='!font-["Poppins"]'>
                        {x?.title}
                    </a>
                ))}
            </div>
        </div>
    )
}

const LINKS: LinkColProps[] = [
    {
        title: 'About',
        links: [
            {
                title: 'Contact us',
                slug: 'https://nirulas-pages.vercel.app/contact-us'
            },
            {
                title: 'Legal',
                slug: 'https://nirulas-pages.vercel.app/#'
            },
            {
                title: 'Privacy Policy',
                slug: 'https://nirulas-pages.vercel.app/policy'
            },
            {
                title: 'Terms and Conditions',
                slug: 'https://nirulas-pages.vercel.app/terms-and-conditions'
            },
        ]
    },
    {
        title: 'Work',
        links: [
            {
                title: 'Franchising',
                slug: 'https://nirulas-pages.vercel.app/franchising'
            },
            {
                title: 'Career',
                slug: 'https://nirulas-pages.vercel.app/career'
            },
        ]
    },
    {
        title: 'Site Map',
        links: [
            {
                title: 'Home',
                slug: 'https://nirulas-pages.vercel.app/'
            },
            {
                title: 'Store Location',
                slug: 'https://nirulas-pages.vercel.app/contact-us'
            },
        ]
    },
    {
        title: 'Nutrition',
        links: [
            {
                title: 'Full Nutrition Guide',
                slug: 'https://nirulas-pages.vercel.app/food'
            },
            {
                title: 'Food Allergies and Sensitives',
                slug: 'https://nirulas-pages.vercel.app/#'
            },
        ]
    },
]

const SOCIAL_LINKS = [
    {
        icon: <GrFacebookOption />,
        slug: 'https://facebook.com',
        title: 'Facebook'
    },
    {
        icon: <AiOutlineInstagram />,
        slug: 'https://instagram.com',
        title: 'Instagram'
    },
    {
        icon: <AiOutlineTwitter />,
        slug: 'https://twitter.com',
        title: 'Twitter'
    },
    {
        icon: <AiFillYoutube />,
        slug: 'https://youtube.com',
        title: 'Youtube'
    },
]