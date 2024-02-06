import { PaymentModeItem } from "@/components/Common";
import { Divider } from "@/components/Core";
import { PlaceOrderProps } from "@/types/PlaceOrderProps";

type onChangeProps = (field: string, value: any) => void;

const PaymentMode = ({ onChange, formValues, paymentModeData }: { onChange: onChangeProps, formValues: PlaceOrderProps, paymentModeData: any[] }) => {

    function onClick(val: string) {
        onChange('payment_mode', val);
    }

    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-6 py-8 max-w-6xl mx-auto'>
                <Divider title='Payment Mode' />

                <div className='max-w-2xl w-full mx-auto grid max-[500px]:grid-cols-1 grid-cols-2 min-[500px]:auto-rows-auto gap-5'>
                    {Array.isArray(paymentModeData) && paymentModeData.map((x) => (
                        <PaymentModeItem key={x.name} mode={x} selected={formValues?.payment_mode == x?.slug} onClick={onClick} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PaymentMode;

// const MODES: ModeType[] = [
//     {
//         name: 'Online Payment',
//         icon: <OnlinePaymentIcon />
//     },
//     {
//         name: 'Cash on Delivery',
//         icon: <CoinIcon />
//     },
//     {
//         name: 'Paytm UPI',
//         icon: <PaytmIcon />
//     },
// ]