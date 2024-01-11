import { location_atom } from "@/atoms/index";
import { Button, Input } from "@/components/Core";
import { CommonProps } from "@/types/PopUpsTypes";
import { fetchBranchFromAddress } from "@/utils/LibFunctions";
import { setCookie } from "cookies-next";
import { BsArrowLeft } from "react-icons/bs";
import { useRecoilState } from "recoil";
import PopupContainer from "./PopupContainer";

const LocationPopup = ({ showPopup, setShowPopup }: CommonProps) => {
    const [address, setAddress] = useRecoilState(location_atom);

    const handleAddress = async (value: any) => {
        // if(!value) {
        //     return alert('Please insert address');
        // }

        var result = await fetchBranchFromAddress(value);
        // console.log({result});
        
        setCookie("address", value, { path: '/' });
        // localStorage.setItem('address', JSON.stringify(result.result));
        // setShowModal(!showModal);
        if(result.status == 0) {
            alert(result.message);
        }
        else {
            setShowPopup(false);
        }
    }

    return (
        <PopupContainer
            maxWidth='1152px'
            showPopup={showPopup}
            setShowPopup={setShowPopup}
        >
            {(setClose) => (
                <div className='w-full bg-white rounded-2xl shadow-md sm:py-8 py-5 sm:px-4 px-2 max-h-[95vh] overflow-y-scroll'>
                    <div className='max-w-5xl w-full mx-auto flex flex-col items-center space-y-6'>
                        <h4 className='sm:text-3xl text-2xl text-center relative w-full max-sm:mt-4'>
                            <BsArrowLeft
                                onClick={() => setClose()}
                                className='absolute left-0 text-primary-grey cursor-pointer max-sm:-top-5'
                            />

                            Enter Address or Pincode
                        </h4>
                    </div>
                    <div className="md:w-1/2 mx-auto space-y-3">
                        <img src="https://api2.nirulas.com/nirulas-api/public/assets/images/locationfind.svg" alt="Location" />
                        <div>
                            <Input
                                value={address}
                                placeholder="Enter Addess / Pincode"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <Button title="Add / Edit Pincode" onClick={() => { handleAddress(address); }} />
                    </div>
                </div>
            )}
        </PopupContainer>
    )
}

export default LocationPopup;