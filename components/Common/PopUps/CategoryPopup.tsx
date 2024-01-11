import { categories_atom } from "@/atoms/index";
import { CommonProps } from "@/types/PopUpsTypes";
import { BsArrowLeft } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import CategoryItemContainer from "../CategoryItemContainer";
import PopupContainer from "./PopupContainer";

const CategoryPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const Categories = useRecoilValue(categories_atom);
    return (
        <PopupContainer
            maxWidth='1152px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-2xl shadow-md sm:py-8 py-5 sm:px-4 px-2 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center space-y-6'>
                        <h2 className='sm:text-3xl text-2xl text-center relative w-full max-sm:mt-4'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute left-0 text-primary-grey cursor-pointer max-sm:-top-5'
                            />

                            Never Stop MuNching!
                        </h2>

                        <CategoryItemContainer setClose={setClose} Categories={Categories} />
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default CategoryPopup;