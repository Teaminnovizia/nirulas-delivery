export interface PlaceOrderProps {
    name: string
    delivery: string
    gift: string
    instruction: string
    payment_mode: string
    location_id?: string
    receiver_name?: string
    schedule_date?: string
    schedule_time?: string
    selected_address?: string
    order_type: "delivery" | "pickup" | any
    source: "DESKTOP_SITE" | "MOBILE_SITE"
}