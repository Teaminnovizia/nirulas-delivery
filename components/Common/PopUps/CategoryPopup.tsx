import { CommonProps } from "@/types/PopUpsTypes";
import { BsArrowLeft } from "react-icons/bs";
import CategoryItemContainer from "../CategoryItemContainer";
import PopupContainer from "./PopupContainer";

const CategoryPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    return (
        <PopupContainer
            maxWidth='1152px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-2xl shadow-md sm:py-8 py-5 sm:px-4 px-2'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center gap-6'>
                        <h1 className='sm:text-3xl text-2xl text-center relative w-full'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute left-0 text-primary-grey cursor-pointer'
                            />

                            Never Stop MuNching!
                        </h1>

                        <CategoryItemContainer setClose={setClose} />
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default CategoryPopup;