import { PaymentModeItem } from "@/components/Common";
import { Divider } from "@/components/Core";
import CoinIcon from "@/icons/CoinIcon";
import OnlinePaymentIcon from "@/icons/OnlinePaymentIcon";
import PaytmIcon from "@/icons/PaytmIcon";
import { ModeType } from "@/types/PaymentTypes";

const PaymentMode = () => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='Payment Mode' />

                <div className='max-w-2xl w-full mx-auto grid max-[500px]:grid-cols-1 grid-cols-3 min-[500px]:auto-rows-auto gap-5'>
                    {MODES.map((x) => (
                        <PaymentModeItem key={x.name} mode={x} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PaymentMode;

const MODES: ModeType[] = [
    {
        name: 'Online Payment',
        icon: <OnlinePaymentIcon />
    },
    {
        name: 'Cash on Delivery',
        icon: <CoinIcon />
    },
    {
        name: 'Paytm UPI',
        icon: <PaytmIcon />
    },
]