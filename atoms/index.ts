import { atom } from "recoil";

export const loading_atom = atom({
    key: 'custom_loading',
    default: false,
})

export const location_atom = atom({
    key: 'location',
    default: "",
})

export const category_popup = atom({
    key: 'category_popup',
    default: false
})

export const login_popup = atom({
    key: 'login_popup',
    default: false
})

export const signup_popup = atom({
    key: 'signup_popup',
    default: false
})

export const categories_atom = atom({
    key: 'categories',
    default: []
})

export const rec_prod_atom = atom({
    key: 'rec_prod',
    default: []
})

export const cart_atom = atom({
    key: 'cart',
    default: {
        carts_items: [],
        applied_coins: 0,
        cgst: 0,
        cgst2: 0,
        cgst9: 0,
        convenience_fee: 0,
        delivery_charge: 0,
        grand_total: 0,
        id: 0,
        is_active: 0,
        items_count: 0,
        items_qty: 0,
        offer_discount: 0,
        offer_id: 0,
        order_type: "",
        sgst: 0,
        sgst2: 0,
        sgst9: 0,
        subtotal: 0,
        tip: 0,
        user_mobile: null
    }
})

export const user_atom = atom({
    key: 'user',
    default: null as any
})

export const address_atom = atom({
    key: 'address',
    default: [] as any[]
})