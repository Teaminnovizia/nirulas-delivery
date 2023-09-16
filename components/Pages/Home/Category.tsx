import { CategoryItemContainer } from "@/components/Common";
import { Button } from "@/components/Core";

const Category = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='flex flex-col items-center gap-10 max-w-6xl w-full mx-auto sm:py-8 py-4'>
                <h1 className='md:text-5xl text-3xl text-center'>
                    Never Stop MuNching!
                </h1>

                <CategoryItemContainer />

                <Button title='Show more' />
            </div>
        </section>
    )
}

export default Category;