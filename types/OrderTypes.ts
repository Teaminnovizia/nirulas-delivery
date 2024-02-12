export interface OrderProps {
    id: number
    status: number
    grand_total: number
    order_number: string
    created: string
    orders_items: OrderItemProps[]
}

export interface OrderItemProps {
    isOfferItem: number | boolean
    is_customized: number | boolean
    price: number
    qty: number
    product_name: string
    order_customized_data: OrderCustomizeItemDetailProps[]
}

export interface OrderCustomizeItemDetailProps {
    title: string
}