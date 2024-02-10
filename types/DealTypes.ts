export interface DealProps {
    code: string,
    description: string
    for_app: 0 | 1
    id: number
    is_visible: 0 | 1
    location_id: string
    min_amount: number
    offer_type: string
    title: string
    upto: number
    value: number
}