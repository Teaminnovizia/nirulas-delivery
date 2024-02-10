export interface CartItemProps {
    cart_customized_data: CartCustomizeItemProps[]
    cart_id: number
    cgst2: number
    cgst9: number
    coupon_discount_amount: number | null
    coupon_discount_percent: number | null
    id: number
    isOfferItem: 0 | 1 | boolean
    is_active: 0 | 1 | boolean
    is_customized: 0 | 1 | boolean
    loyalty_discount_amount: number
    loyalty_discount_percent: number
    price: number
    product_id: number
    qty: number
    product_name: string
    remarks: string | null
    sgst2: number
    sgst9: number
    tax_amount: number
    updated: string
    created: string
}

export interface CartProps {
        carts_items: CartItemProps[]
        applied_coins: number
        cgst: number
        cgst2: number
        cgst9: number
        convenience_fee: number
        delivery_charge: number
        grand_total: number
        id: number
        is_active: number
        items_count: number
        items_qty: number
        offer_discount: number
        offer_id: number
        order_type: string
        sgst: number
        sgst2: number
        sgst9: number
        subtotal: number
        tip: number
        user_mobile: string
}

export interface CartCustomizeItemProps {
    cart_item_id: number
    created: string
    customize_item_id: number
    id: number
    is_base: number
    is_offer_item: number
    price: number
    title: string
}
