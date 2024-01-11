import { AddedItem } from "@/components/Common";
import { LinkButton } from "@/components/Core";

const AddedItems = ({ CartData }: { CartData: any }) => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto py-4 space-y-8'>
                <div className='w-full space-y-4'>
                    <h2 className='font-rubik text-primary-red text-center font-bold'>
                        PLACE ORDER
                    </h2>

                    <h6 className='font-rubik text-primary-red text-center font-bold text-base normal-case'>
                        Added Items
                    </h6>
                </div>

                <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:auto-rows-auto gap-5'>
                    {/* <AddedItem />
                    <AddedItem />
                    <AddedItem /> */}
                    
                    {
                        Array.isArray(CartData?.carts_items) && CartData?.carts_items.map((ci: any, i: number) => <AddedItem data={ci} index={i + 1} key={i} />)
                    }
                </div>

                <LinkButton href='/' title='Want to Add More Items' className='font-normal max-w-fit block mx-auto' />
            </div>
        </section>
    )
}

export default AddedItems;