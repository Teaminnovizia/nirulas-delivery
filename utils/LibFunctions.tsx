"use client"

import { toastOptions } from "@/components/Layout";
import { toast } from "react-toastify";
import { UrlObject } from "url";
import { getCookie, server } from "./axios-config";
import { ADD_ROUTE_ANALYTICS, ADD_TIP, ADD_TO_CART, ADD_UTM_ANALYTICS, APPLY_COUPON, APPLY_LOYALTY_POINTS, CAPTURE_PAYMENT, CHANGE_DELIVERY_TYPE, CHANGE_ORDER_STATUS, CLEAR_CART, FAILED_ORDER_LIST, FETCH_CART_ITEMS, FETCH_COUPON_DEALS, GET_ADDRESSES, GET_BRANCH_ADDRESS, GET_COMMON, GET_LOCATION_LIST, GET_ONE_ORDER, GET_USER_ADDRESS, GET_USER_BY_MOBILE, HOME_SLIDER, MENU_LIST, MENU_WITH_PRODUCTS, MISSED_ORDER, MY_ORDERS, ORDER_LIST, ORDER_PAYMENT, PAYMENT_HISTORY, PAYMENT_MODES, PLACE_ORDER, PRODUCT_DETAILS_WITH_CUSTOMIZE, PRODUCT_SEARCH, REMOVE_COUPON, REMOVE_LOYALTY_POINTS, REPEAT_ORDER, SEND_OTP, USER_LOGIN, VERIFY_ORDER_PAYMENT, VERIFY_OTP } from "./constants/routes";

export const getUrlObjectLink = (link: string): UrlObject => link as unknown as UrlObject;

export const getHomeSliders = async () => {
    try {
        var { data } = await server.get(HOME_SLIDER);
        // console.log(data);
        if(data.status == 1) {
            return data.result;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getCommon = async (type: string) => {
    try {
        var { data } = await server.get(GET_COMMON + "/" + type);
        return data?.result;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const paymentModeList = async (query: string) => {
    try {
        let url = PAYMENT_MODES;
        if (query) {
            url += query;
        }
        var { data } = await server.get(url);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getMenuList = async () => {
    try {
        var { data } = await server.get(MENU_LIST);
        // console.log(data);
        if(data.status == 1) {
            return data.result;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getMenuWithProducts = async () => {
    try {
        var { data } = await server.get(MENU_WITH_PRODUCTS);
        // console.log(data);
        if(data.status == 1) {
            return data.result;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getUserByMobile = async (mobile = "") => {
    try {
        let payload = { "mobile": getCookie("mobile") };
        if (mobile) {
            payload = { "mobile": mobile };
        }
        var { data } = await server.post(GET_USER_BY_MOBILE, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const AddToCart = async (body: any) => {
    try {
        body.mobile = getCookie("mobile");
        body.token = getCookie("token");

        var { data } = await server.post(ADD_TO_CART, body);
        // console.log(data);
        if(data.status == 1) {
            return data;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const fetchCartItems = async (from_cart = false) => {
    try {
        let payloads = { "mobile": getCookie("mobile"), "token": getCookie("token"), from_cart };
        if (from_cart) {
            payloads.from_cart = true;
        }
        var { data } = await server.post(FETCH_CART_ITEMS, payloads);
        // console.log(data);
        if(data.status == 1) {
            return data;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const sentOtpForVerification = async (body: any) => {
    try {
        var { data } = await server.post(SEND_OTP, body);
        // console.log(data);
        if(data.status == 1) {
            return data;
        }
        else {
            throw new Error(data.message);
        }
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const verifyOtp = async (body: any) => {
    try {
        if (getCookie("token")) {
            body = {
                ...body,
                token: getCookie('token')
            }
        }
        var { data } = await server.post(VERIFY_OTP, body);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getUserAddress = async () => {
    try {
        if (!getCookie("mobile") && !getCookie("token") && getCookie("is_logged_in") !== "yes") {
            return false;
        }
        let payload = { "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(GET_USER_ADDRESS, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getLocationList = async () => {
    try {
        var { data } = await server.get(GET_LOCATION_LIST);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const changeDeliveryType = async (type: string) => {
    try {
        var { data } = await server.get(CHANGE_DELIVERY_TYPE + "/" + type);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const addTip = async (tip: string) => {
    try {
        if(!getCookie("token")) {
            toast.error("Something went wrong!", toastOptions);
            return false;
        }
        var { data } = await server.get(ADD_TIP + "/" + tip);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getCouponDeals = async () => {
    try {
        var { data } = await server.get(FETCH_COUPON_DEALS);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const applyCouponApi = async (couponData: any) => {
    try {
        let payload = { ...couponData, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(APPLY_COUPON, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const removeCouponApi = async (cart_id: any) => {
    try {
        let payload = { ...cart_id, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(REMOVE_COUPON, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const clearCartApi = async (cart_id: any) => {
    try {
        let payload = { ...cart_id, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(CLEAR_CART, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const applyLoyaltyPointsApi = async () => {
    try {
        var { data } = await server.get(APPLY_LOYALTY_POINTS);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}


export const removeLoyaltyPointsApi = async () => {
    try {
        var { data } = await server.get(REMOVE_LOYALTY_POINTS);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const myAddress = async () => {
    try {
        if (!getCookie("token") || !getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }
        let query = `?page=${1}&limit=${100}`;

        var { data } = await server.get(GET_ADDRESSES + query);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const addAddress = async (payload: any) => {
    try {
        if (!getCookie("token") || !getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }

        var { data } = await server.post(GET_ADDRESSES, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const updateAddress = async (payload: any) => {
    try {
        if (!getCookie("token") || !getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }

        var { data } = await server.put(GET_ADDRESSES, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const DeleteAddress = async (id: any) => {
    try {
        if (!getCookie("token") || !getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }
        let query = `?id=${id}`;

        var { data } = await server.delete(GET_ADDRESSES + query);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const placeOrder = async (data: any) => {
    try {
        let payload = { ...data, "mobile": getCookie("mobile"), "token": getCookie("token") };

        var { data } = await server.post(PLACE_ORDER, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const verifyOrderPayment = async (data: any) => {
    try {
        let payload = { ...data, "mobile": getCookie("mobile"), "token": getCookie("token") };

        var { data } = await server.post(VERIFY_ORDER_PAYMENT, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const capturePayment = async (data: any) => {
    try {
        let payload = { ...data, "mobile": getCookie("mobile"), "token": getCookie("token") };

        var { data } = await server.post(CAPTURE_PAYMENT, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getUniqueOrder = async (payload: any) => {
    try {
        var { data } = await server.post(GET_ONE_ORDER, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}


export const generateRandomString = (length: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
};

export function removeFieldFromObject<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  fieldName: K
): T {
  // Use destructuring to create a new object and omit the specified field
  const { [fieldName]: _, ...rest } = obj;

  // Cast the return type to maintain strict type safety
  return rest as T;
}

export const saveUserRouteAnalytics = async (order_placed = false) => {
    try {
        const storedPath = localStorage.getItem("track_session");
        if (storedPath) {
            try {
                const parsedPath = JSON.parse(storedPath);
                if(Array.isArray(parsedPath?.histories) && parsedPath.histories.length > 0) {
                    await addUserRouteAnalytics({ page: parsedPath?.histories, date: parsedPath.date, order_placed });
                }
                localStorage.removeItem("track_session");
            } catch { }
        }
        // let payload = { ...data, "mobile": getCookie("mobile"), "token": getCookie("token") };

        // var { data } = await server.post(CAPTURE_PAYMENT, payload);
        // // console.log(data);
        // return data;
    } catch (error: any) {
        // toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const addUserRouteAnalytics = async (payload: any) => {
    try {
        if(!getCookie("token")) {
            return;
        }
        var { data } = await server.post(ADD_ROUTE_ANALYTICS, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        // toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const saveUtmAnalytics = async (order_placed = false) => {
    const storedUtm = localStorage.getItem("utm_analytics");
    if (storedUtm) {
        try {
            const parsedUtm = JSON.parse(storedUtm);
            await addUtmeAnalytics({ ...parsedUtm, order_placed });
            localStorage.removeItem("utm_analytics");
        } catch { }
    }
}

export const addUtmeAnalytics = async (payload: any) => {
    try {
        var { data } = await server.post(ADD_UTM_ANALYTICS, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        // toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const fetchBranchFromAddress = async (_address: any) => {
    try {
        var query = "?address=" + _address;
        var { data } = await server.post(GET_BRANCH_ADDRESS + query);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const getProductDetailWithCustomize = async (id: number) => {
    try {
        var { data } = await server.get(PRODUCT_DETAILS_WITH_CUSTOMIZE + "/" + id);
        // console.log(data);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const orderPayment = async (body: any) => {
    try {
        let payload = { ...body, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(ORDER_PAYMENT, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}


export const orderDataList = async (params: string) => {
    try {
        let query = "";
        if (params) {
            query = "?" + params;
        }
        var { data } = await server.get(ORDER_LIST + query);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const failedOrderDataList = async () => {
    try {
        let query = "";
        if (getCookie("branch")) {
            query = "?branch=" + getCookie("branch")
        }
        var { data } = await server.get(FAILED_ORDER_LIST + query);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const changeOrderStatusApi = async (payload: any) => {
    try {
        var { data } = await server.post(CHANGE_ORDER_STATUS, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const missedOrderAdd = async (body: any) => {
    try {
        let payload = { ...body, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(MISSED_ORDER, payload);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const myOrders = async (page = 1, limit = 10, sort_by = "created", sort_direction = "DESC") => {
    try {
        if (!getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }
        let query = `?page=${page}&limit=${limit}&sort_by=${sort_by}&sort_direction=${sort_direction}`;

        var { data } = await server.get(MY_ORDERS + query);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const repeatOrder = async (id: number) => {
    try {
        if (!getCookie("token") || !getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }

        let query = `?id=${id}`;
        var { data } = await server.get(REPEAT_ORDER + query);
        
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const paymentHistory = async (page = 1, limit = 10, payment_method = "COD") => {
    try {
        if (!getCookie("mobile") || getCookie("otp_verified") !== "yes") {
            return false;
        }
        let query = `?page=${page}&limit=${limit}&payment_method=${payment_method}`;

        var { data } = await server.get(PAYMENT_HISTORY + query);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}


export const userLogin = async (body: any) => {
    try {
        var { data } = await server.post(USER_LOGIN, body);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}

export const searchProduct = async (text: any) => {
    try {
        let query = `?search=${text}&is_site=1`;
        var { data } = await server.get(PRODUCT_SEARCH + query);
        return data;
    } catch (error: any) {
        toast.error("Something went wrong!", toastOptions);
        console.log('Error', error.message);
    }
}