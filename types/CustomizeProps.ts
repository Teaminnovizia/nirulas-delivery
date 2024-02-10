export interface AddOnProps {
    display_order: number
    id: number
    is_base: 0 | 1
    is_date_select: 0 | 1
    is_limited: number
    is_multiple_select: 0 | 1
    is_time_select: 0 | 1
    max?: number
    type: string
    item: AddOnItemProps[]
}

export interface AddOnItemProps {
    customize_id: number
    display_order: number
    id: number
    non_veg_id: number
    price: number
    show_price: 0 | 1
    title: string
    veg_topping_id: number
}