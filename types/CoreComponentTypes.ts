export interface CheckboxCustomProps {
    placeCheckboxLeft?: boolean
    textClassName?: string
}

export interface VariableButtonProps {
    containerClassName?: string
    decrementClassName?: string
    incrementClassName?: string
    value: string | number
    onDecrease: Function | (() => void)
    onIncrease: Function | (() => void)
}