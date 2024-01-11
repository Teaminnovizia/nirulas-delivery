import CoinIcon from "@/icons/CoinIcon";
import OnlinePaymentIcon from "@/icons/OnlinePaymentIcon";
import PaytmIcon from "@/icons/PaytmIcon";
import { ModeType } from "@/types/PaymentTypes";

const PaymentModeItem = ({ mode, selected, onClick }: { mode: ModeType, onClick: Function, selected?: boolean }) => {
    return (
        <div className={`w-full flex items-center flex-col space-y-6 h-full justify-between cursor-pointer ${selected && 'shadow shadow-red-400'}`} onClick={() => onClick(mode.slug)}>
            <div className='h-full w-full flex items-center justify-center'>
                {PaymentIcon[mode.slug]}
            </div>

            <p className='font-rubik font-medium text-lg'>
                {mode.name}
            </p>
        </div>
    )
}

export default PaymentModeItem;

const PaymentIcon: any = {
    "cod": <CoinIcon />,
    "online": <OnlinePaymentIcon />,
    "razorpay_link": <OnlinePaymentIcon />,
    "paytm_wallet (qr code)": <PaytmIcon />,
}