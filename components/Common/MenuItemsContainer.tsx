import { MenuItemsContainerProps } from '@/types/MenuTypes';
import { MenuItem } from "../Core";

const MenuItemsContainer = ({ data, ...restProps }: { data: PropsType } & MenuItemsContainerProps) => {
    return (
        <div id={data._id} className='w-full space-y-5'>
            <div className='w-full space-y-3'>
                <div className='flex items-center w-full relative'>
                    <h3 className='sm:text-3xl text-2xl bg-white pr-3'>
                        {data.title}
                    </h3>

                    <span className='absolute w-full h-[1px] bg-primary-grey -z-[1]' />
                </div>

                <p className='w-full text-left text-primary-grey font-medium font-rubik'>
                    100% Original  |  Taste sensations at your fingertips
                </p>
            </div>

            <div className='w-full grid md:grid-cols-2 grid-cols-1 auto-rows-auto gap-10'>
                {data.items.map((x) => (
                    <MenuItem
                        data={x}
                        key={x._id}
                        setShowItemDetail={restProps.setShowItemDetail}
                        setShowItemDetailWithAddOn={restProps.setShowItemDetailWithAddOn}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuItemsContainer;

// ***temparary type***
interface PropsType {
    _id: string
    title: string
    items: {
        _id: string
        title: string
        image: string
        price: number
        description: string
    }[]
}