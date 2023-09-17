import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ data, setClose }: { data: { _id: string, title: string, image: string }, setClose?: Function }) => {
    return (
        <Link
            href={`/#${data._id}`} className='flex items-center flex-col w-full gap-4'
            onClick={() => {
                if (setClose) setClose();
            }}>
            <Image
                src={data.image}
                alt={data.title}
                quality={100}
                width={100}
                height={100}
                loading='lazy'
                className='rounded-full overflow-hidden'
            />

            <h5 className='font-rubik font-medium normal-case text-center'>
                {data.title}
            </h5>
        </Link>
    )
}

export default CategoryItem;