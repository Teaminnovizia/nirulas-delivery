
const AddedItem = ({ data, index }: { data: any, index: number }) => {
    return (
        <div className='flex items-center w-full space-y-3 flex-col'>
            {/* <Image
                src='/Images/menu/burger-5.png'
                alt='Burger'
                quality={100}
                width={130}
                height={130}
                priority
            /> */}

            <p className='font-bold font-rubik text-center sm:text-lg text-base'>
                {index}. {data?.product_name}
            </p>
        </div>
    )
}

export default AddedItem;