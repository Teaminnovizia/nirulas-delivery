"use client"

import { UrlObject } from "url";
import { getCookie, server } from "./axios-config";
import { ADD_ROUTE_ANALYTICS, ADD_TIP, ADD_TO_CART, ADD_UTM_ANALYTICS, APPLY_COUPON, APPLY_LOYALTY_POINTS, CAPTURE_PAYMENT, CHANGE_DELIVERY_TYPE, CLEAR_CART, FETCH_CART_ITEMS, FETCH_COUPON_DEALS, GET_ADDRESSES, GET_BRANCH_ADDRESS, GET_COMMON, GET_LOCATION_LIST, GET_ONE_ORDER, GET_USER_ADDRESS, GET_USER_BY_MOBILE, HOME_SLIDER, MENU_LIST, MENU_WITH_PRODUCTS, PAYMENT_MODES, PLACE_ORDER, REMOVE_COUPON, REMOVE_LOYALTY_POINTS, SEND_OTP, VERIFY_ORDER_PAYMENT, VERIFY_OTP } from "./constants/routes";

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
        console.log('Error', error.message);
    }
}

export const getCommon = async (type: string) => {
    try {
        var { data } = await server.get(GET_COMMON + "/" + type);
        return data?.result;
    } catch (error: any) {
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
        console.log('Error', error.message);
    }
}

export const fetchCartItems = async (from_cart = false) => {
    try {
        let payloads = { "mobile": getCookie("mobile"), "token": getCookie("token") } as any;
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
        console.log('Error', error.message);
    }
}

export const getLocationList = async () => {
    try {
        var { data } = await server.get(GET_LOCATION_LIST);
        // console.log(data);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const changeDeliveryType = async (type: string) => {
    try {
        var { data } = await server.get(CHANGE_DELIVERY_TYPE + "/" + type);
        // console.log(data);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const addTip = async (tip: string) => {
    try {
        var { data } = await server.get(ADD_TIP + "/" + tip);
        // console.log(data);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const getCouponDeals = async () => {
    try {
        var { data } = await server.get(FETCH_COUPON_DEALS);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const applyCouponApi = async (couponData: any) => {
    try {
        let payload = { ...couponData, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(APPLY_COUPON, payload);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const removeCouponApi = async (cart_id: any) => {
    try {
        let payload = { ...cart_id, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(REMOVE_COUPON, payload);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const clearCartApi = async (cart_id: any) => {
    try {
        let payload = { ...cart_id, "mobile": getCookie("mobile"), "token": getCookie("token") };
        var { data } = await server.post(CLEAR_CART, payload);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}

export const applyLoyaltyPointsApi = async () => {
    try {
        var { data } = await server.get(APPLY_LOYALTY_POINTS);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
}


export const removeLoyaltyPointsApi = async () => {
    try {
        var { data } = await server.get(REMOVE_LOYALTY_POINTS);
        return data;
    } catch (error: any) {
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
        console.log('Error', error.message);
    }
}

export const getUniqueOrder = async (payload: any) => {
    try {
        var { data } = await server.post(GET_ONE_ORDER, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
        console.log('Error', error.message);
    }
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
        console.log('Error', error.message);
    }
}

export const addUserRouteAnalytics = async (payload: any) => {
    try {
        var { data } = await server.post(ADD_ROUTE_ANALYTICS, payload);
        // console.log(data);
        return data;
    } catch (error: any) {
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
        console.log('Error', error.message);
    }
}
