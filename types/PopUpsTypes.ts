import { ReactElement } from 'react';

export interface CommonProps {
    showPopup: boolean
    setShowPopup: Function
    productInfo?: any
}

export interface PopupContainerProps extends CommonProps {
    children(setClose: Function): ReactElement
    maxWidth: number | string
}

export type AddressSubmitType = (currentStep: number, setClose?: Function) => void;