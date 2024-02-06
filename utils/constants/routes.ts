/*
* External APIs
*/
export const location_using_coords = 'https://api.geoapify.com/v1/geocode/reverse?';    // lat=16.1511&lon=44.445&apiKey=process.env.GEOAPIFY_API_KEY


/*
* Project APIs
*/

export const HOME_SLIDER = "/slider/list";  // GET
export const GET_COMMON = "/common/getCommonSetting";  // GET param { /:string }
export const PAYMENT_MODES = "/payment-mode";  // GET
export const MENU_LIST = "/menu/list?website=true";  // GET
export const MENU_WITH_PRODUCTS = "/product/menuWithProduct?from=website";  // GET
export const GET_USER_BY_MOBILE = "/user/getUserByMobile";  // POST body { mobile }
export const ADD_TO_CART = "/carts/addToCart";  // POST body { convenience_fee, delivery_charge, is_customized, price, product_id, product_name, qty, mobile, token }
export const FETCH_CART_ITEMS = "/carts/viewCart";  // POST body { mobile, token, from_cart }
export const SEND_OTP = "/sendOtpForRegistration";  // POST body { mobile }
export const VERIFY_OTP = "/verifyOtp";  // POST body { mobile, otp, token }
export const GET_USER_ADDRESS = "/getUserAddress";  // POST
export const GET_LOCATION_LIST = "/location/activeList";  // GET
export const CHANGE_DELIVERY_TYPE = "/carts/delivery-type";  // GET param { /:string }
export const ADD_TIP = "/carts/add-tip";  // GET param { /:string }
export const FETCH_COUPON_DEALS = "/deals/list";  // GET
export const APPLY_COUPON = "/carts/applyCoupon";  // POST { id, cart_id, mobile, token }
export const REMOVE_COUPON = "/carts/removeCoupon";  // POST { cart_id, mobile, token }
export const CLEAR_CART = "/carts/clearCart";  // POST { cart_id, mobile, token }
export const APPLY_LOYALTY_POINTS = "/carts/applyLoyaltyPoints";  // GET
export const REMOVE_LOYALTY_POINTS = "/carts/removeLoyaltyPoints";  // GET
export const GET_ADDRESSES = "/address";  // GET
export const PLACE_ORDER = "/orders/placeOrder";  // POST
export const VERIFY_ORDER_PAYMENT = "/orders/verifyOrderPayment";  // POST
export const CAPTURE_PAYMENT = "/orders/capturePayment";  // POST
export const GET_ONE_ORDER = "/orders/getUniqueOrder";  // POST
export const GET_BRANCH_ADDRESS = "/getBranchByAddress";  // POST
export const PRODUCT_DETAILS_WITH_CUSTOMIZE = "/product/getWithCustomize";  // GET param { /:id }
export const ORDER_PAYMENT = "/orders/orderPayment";  // POST
export const ORDER_LIST = "/orders-list";  // GET
export const FAILED_ORDER_LIST = "/orders/failedOrderDataList";  // GET
export const CHANGE_ORDER_STATUS = "/orders/changeOrderStatus";  // POST
export const MISSED_ORDER = "/missedOrders/add";  // POST
export const MY_ORDERS = "/my-orders";  // GET
export const PAYMENT_HISTORY = "/payment-history";  // GET

export const USER_LOGIN = "/userLogin";  // POST
export const PRODUCT_SEARCH = "/product-search";  // GET


export const ADD_ROUTE_ANALYTICS = "/analytics_route/add";  // POST
export const ADD_UTM_ANALYTICS = "/utm/add_analytics";  // POST