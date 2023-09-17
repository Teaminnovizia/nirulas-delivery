import { ReactElement } from 'react';

export interface CommonProps {
    showPopup: boolean
    setShowPopup: Function
}

export interface PopupContainerProps extends CommonProps {
    children(setClose: Function): ReactElement
    maxWidth: number | string
}