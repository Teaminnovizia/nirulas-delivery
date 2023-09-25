import { CSSProperties } from "react"

export interface CommonProps {
    width?: number
    height?: number
}

export interface ArrowProps extends CommonProps {
    className?: string
    style?: CSSProperties
    onClick?: Function | (() => void)
    top?: string | number
    color?: string
}

export interface LeftArrowProps extends ArrowProps {
    left?: string | number
}

export interface RightArrowProps extends ArrowProps {
    right?: string | number
}