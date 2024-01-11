import { Divider } from "@/components/Core";
import moment from 'moment';
import Image from "next/image";

const Order = ({ isOrderData }: { isOrderData: IOrder | null }) => {
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='max-w-6xl mx-auto py-4 pb-24 space-y-8'>
                <Divider title={`Order #${isOrderData?.id}`} titleClassName='text-[#313131] text-4xl' className='bg-primary-red' />

                <div className='w-full space-y-4'>
                    <div className='w-full flex items-center space-x-3'>
                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            {moment(isOrderData?.created).format('lll')}
                        </p>

                        <span className='h-3 w-[1px] bg-secondary-border-grey' />

                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            Payment mode : {isOrderData?.payment_method}
                        </p>

                        <span className='h-3 w-[1px] bg-secondary-border-grey' />

                        <p className='text-[#313131] font-rubik font-normal text-sm'>
                            {isOrderData?.orders_items?.length || 0} items
                        </p>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Qty & item name
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Total
                        </h6>
                    </div>

                    {
                        Array.isArray(isOrderData?.orders_items) &&
                        isOrderData?.orders_items.map((order: any, i: number) => {
                            return <div className='w-full flex items-center justify-between space-x-4' key={i}>
                                <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                                    {order.product_name}
                                </p>

                                <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                                    ₹ {order.price}
                                </p>
                            </div>
                        })
                    }

                    {/* <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            1 x Bigboy Mutton Burger
                        </p>

                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            ₹ 100.70
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            1 x Bigboy Mutton Burger
                        </p>

                        <p className='font-rubik text-sm font-normal normal-case text-[#313131]'>
                            ₹ 100.70
                        </p>
                    </div> */}

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Item total
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ {isOrderData?.subtotal}
                        </h6>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Convenience Fee
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ {isOrderData?.convenience_fee}
                        </h6>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            Total
                        </h6>

                        <h6 className='font-rubik text-base font-medium normal-case text-[#313131]'>
                            ₹ {Number(isOrderData?.subtotal || 0) + Number(isOrderData?.convenience_fee || 0)}
                        </h6>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            cgst(9%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ {isOrderData?.cgst9}
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            Sgst(9%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ {isOrderData?.sgst9}
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            cgst(2.5%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ {isOrderData?.cgst2}
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            sgst(2.5%)
                        </p>

                        <p className='font-rubik text-sm font-normal text-[#313131]'>
                            ₹ {isOrderData?.sgst2}
                        </p>
                    </div>

                    <Divider />

                    <div className='w-full flex items-center justify-between space-x-4'>
                        <h5 className='font-rubik text-xl font-semibold normal-case text-[#313131]'>
                            Grand Total
                        </h5>

                        <h5 className='font-rubik text-xl font-semibold normal-case text-[#313131]'>
                            ₹ {isOrderData?.grand_total}
                        </h5>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center sm:space-x-8 space-x-4'>
                    <button className='text-[#313131] rounded-3xl bg-[#EDEDED] px-4 sm:py-4 py-2.5 flex items-center justify-center space-x-2 max-w-[180px] w-full'>
                        <Image
                            src='/Images/icons/chat.png'
                            alt='Chat With Us'
                            quality={100}
                            width={20}
                            height={20}
                            loading='lazy'
                            className='flex-shrink-0'
                        />

                        <p className='text-[#313131] font-rubik text-sm font-medium'>
                            Chat with us
                        </p>
                    </button>

                    <button className='text-[#313131] rounded-3xl bg-[#EDEDED] px-4 sm:py-4 py-2.5 flex items-center justify-center space-x-2 max-w-[180px] w-full'>
                        <Image
                            src='/Images/icons/phone.png'
                            alt='Call us'
                            quality={100}
                            width={20}
                            height={20}
                            loading='lazy'
                            className='flex-shrink-0'
                        />

                        <p className='text-[#313131] font-rubik text-sm font-medium'>
                            Call us
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Order;


interface IOrder {
    "id": number,
    "order_number": string,
    "order_type": string,
    "pickup_person": string,
    "location_id": number,
    "applied_coins": number,
    "receiver_name": null| string,
    "schedule": null | string,
    "created": string,
    "items_qty": number,
    "grand_total": number,
    "payment_method": string,
    "payment_status": number,
    "status": number,
    "subtotal": number,
    "offer_discount": number,
    "convenience_fee": number,
    "cgst": number,
    "sgst": number,
    "cgst2": number,
    "sgst2": number,
    "cgst9": number,
    "sgst9": number,
    "tip": number,
    "offer_id": number,
    "instruction": string,
    "cake_instruction": null,
    "source": string,
    "cancel_reason": null | string,
    "platform_up_id": null | string,
    "aggregator_order_id": null | any,
    "cancel_date_time": null | any,
    "orders_items": [
      {
        "product_name": string,
        "qty": number,
        "price": number,
        "is_customized": number,
        "isOfferItem": number,
        "order_customized_data": [
          {
            "title": string
          }
        ]
      },
      {
        "product_name": string,
        "qty": number,
        "price": number,
        "is_customized": number,
        "isOfferItem": number,
        "order_customized_data": [
          {
            "title": string
          }
        ]
      }
    ],
    "user": {
      "mobile": string,
      "name": null,
      "email": null
    },
    "user_address": {
      "name": string,
      "address_1": string,
      "address_2": string,
      "landmark": string,
      "city": string,
      "state": string,
      "pincode": string,
      "branch_id": number,
      "location": {
        "id": number,
        "name": string
      }
    },
    "location": {
      "id": number,
      "name": string,
      "lat": string,
      "long": string,
      "status": number,
      "radius": number
    },
    "coupon": any,
    "urban_delivery_boy_order": any
  }