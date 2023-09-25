import { BillDetails, BillOptionsAndPromo } from "@/components/Common";

const Bill = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <BillOptionsAndPromo />

                <BillDetails />
            </div>
        </section>
    )
}

export default Bill;