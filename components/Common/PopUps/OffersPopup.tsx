import { CommonProps } from "@/types/PopUpsTypes";
import OfferListItem from "../OfferListItem";
import PopupContainer from "./PopupContainer";

const OffersPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    return (
        <PopupContainer
            maxWidth='550px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-2xl shadow-md py-5 sm:px-6 px-4 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto space-y-6'>
                        <h4 className='font-rubik block text-center font-bold'>
                            Our Offers
                        </h4>

                        <div className='w-full space-y-4 max-h-[75vh] overflow-y-scroll'>
                            <OfferListItem />
                            <OfferListItem />
                            <OfferListItem />
                            <OfferListItem />
                            <OfferListItem />
                        </div>
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default OffersPopup;