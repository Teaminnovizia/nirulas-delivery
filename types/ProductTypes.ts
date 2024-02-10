import { AddOnProps } from "./CustomizeProps"

export interface ProductProps {
    clean_description: string
    description: string
    id: number
    is_bogo_product: 0 | 1
    is_customizable: 0 | 1
    is_non_veg: 0 | 1
    menu_id: 0 | 1
    mrp: number
    name: string
    price: number
    sku: string
    status: number
    sub_menu_id: number
    thumbnail: number
    customize_data: AddOnProps[]
    energy?: any
    protein?: any
    carbohydrates?: any
    fat?: any
}