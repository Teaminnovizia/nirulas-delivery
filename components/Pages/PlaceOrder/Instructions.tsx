import { Divider, Input, TextArea } from "@/components/Core";
import { PlaceOrderProps } from "@/types/PlaceOrderProps";

type onChangeProps = (field: string, value: any) => void

const Instructions = ({ onChange, formValues }: { onChange: onChangeProps, formValues: PlaceOrderProps }) => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='BEFORE YOU PLACE THE ORDER' />

                <div className='max-w-xl w-full mx-auto space-y-6'>
                    <TextArea
                        rows={4}
                        required
                        placeholder='add cooking instructions'
                        className='resize-none'
                        value={formValues?.instruction}
                        onChange={e => onChange('instruction', e.target.value)}
                    />

                    <div className='w-full space-y-2'>
                        <h4 className='font-rubik font-bold text-center normal-case'>
                            Gift ?
                        </h4>

                        <p className='font-rubik text-sm text-center'>
                            Is it a gift for someone ?
                        </p>

                        <div className='flex items-center justify-center w-full space-x-4'>
                            <div className='flex items-center space-x-2'>
                                <input type='radio' id='gift_yes' name='gift_yes' checked={formValues?.gift == 'yes'} onChange={() => onChange('gift', 'yes')} className='outline-none border-none accent-primary-red' />
                                <label htmlFor='gift_yes' className='font-rubik'>Yes</label>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <input type='radio' id='gift_no' name='gift_no' checked={formValues?.gift == 'no'} onChange={() => {onChange('gift', 'no')}} className='outline-none border-none accent-primary-red' />
                                <label htmlFor='gift_no' className='font-rubik'>No</label>
                            </div>
                        </div>
                    </div>
                    {
                        formValues?.gift == 'yes'
                            ?
                            <>
                                <div className="grid">
                                    <label>Receiver Name :</label>
                                    <Input
                                        type='text'
                                        placeholder='Receiver Name'
                                        required
                                        value={formValues?.receiver_name}
                                        onChange={e => onChange('receiver_name', e.target.value)}
                                    />
                                    {/* <input type="text" name="receiver_name" id="receiver_name" onChange={} className={"form-control"} /> */}
                                    {/* {
                                        errors.receiver_name ? <p className="error">This field is required</p> : null
                                    } */}
                                </div>
                            </>
                            :
                            null
                    }
                </div>
            </div>
        </section>
    )
}

export default Instructions;