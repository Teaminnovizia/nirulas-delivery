import { ModeType } from "@/types/PaymentTypes";

const PaymentModeItem = ({ mode }: { mode: ModeType }) => {
    return (
        <div className='w-full flex items-center flex-col space-y-6 h-full justify-between cursor-pointer'>
            <div className='h-full w-full flex items-center justify-center'>
                {mode.icon}
            </div>

            <p className='font-rubik font-medium text-lg'>
                {mode.name}
            </p>
        </div>
    )
}

export default PaymentModeItem;