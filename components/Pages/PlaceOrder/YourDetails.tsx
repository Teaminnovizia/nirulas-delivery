import { Button, Divider, Input, TextArea } from "@/components/Core";

const YourDetails = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='your Details' />

                <div className='max-w-xl w-full mx-auto space-y-4'>
                    <Input
                        type='text'
                        placeholder='Name'
                        required
                    />

                    <Input
                        type='number'
                        placeholder='Contact no.'
                        required
                    />

                    <TextArea
                        rows={3}
                        required
                        placeholder='Address'
                        className='resize-none'
                    />

                    <Button title='Change Address' className='max-w-fit mx-auto block' />
                </div>

                <div className='max-w-xl w-full mx-auto space-y-4'>
                    <div className='w-full space-y-2'>
                        <h4 className='font-rubik font-bold text-center'>
                            SCHEDULE
                        </h4>

                        <div className='flex items-center justify-center w-full space-x-4'>
                            <div className='flex items-center space-x-2'>
                                <input type='radio' id='schedule_yes' name='schedule' className='outline-none border-none accent-primary-red' />
                                <label htmlFor='schedule_yes' className='font-rubik'>Yes</label>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <input type='radio' id='schedule_no' name='schedule' className='outline-none border-none accent-primary-red' />
                                <label htmlFor='schedule_no' className='font-rubik'>No</label>
                            </div>
                        </div>
                    </div>

                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-4'>
                        <Input
                            type='date'
                            required
                            placeholder='Date'
                        />

                        <Input
                            type='time'
                            required
                            placeholder='Time'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourDetails;