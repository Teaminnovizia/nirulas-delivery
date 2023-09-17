import { CATEGORY_DATA } from "@/utils/constants";
import { CategoryItem } from "../Core";

const CategoryItemContainer = ({ setClose }: { setClose?: Function }) => {
    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 auto-rows-auto gap-6 w-full'>
            {CATEGORY_DATA.map((x) => (
                <CategoryItem key={x?._id} data={x} setClose={setClose} />
            ))}
        </div>
    )
}

export default CategoryItemContainer;