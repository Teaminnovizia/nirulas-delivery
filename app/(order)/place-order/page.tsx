"use client"

import { cart_atom, login_popup, user_atom } from "@/atoms/index";
import { PlaceOrderProps } from "@/types/PlaceOrderProps";
import { capturePayment, fetchCartItems, getCommon, getLocationList, getUserAddress, paymentModeList, placeOrder, saveUserRouteAnalytics, saveUtmAnalytics, verifyOrderPayment } from "@/utils/LibFunctions";
import { ConfigData } from "@/utils/constants";
import { getCookie } from "cookies-next";
import * as geolib from 'geolib';
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import ReactGa from 'react-ga';
import useRazorpay from "react-razorpay";
import { useRecoilState } from "recoil";

const AddedItems = dynamic(() => import('@/components/Pages/PlaceOrder/AddedItems'));
const YourDetails = dynamic(() => import('@/components/Pages/PlaceOrder/YourDetails'));
const Instructions = dynamic(() => import('@/components/Pages/PlaceOrder/Instructions'));
const Summery = dynamic(() => import('@/components/Pages/PlaceOrder/Summery'));
const PaymentMode = dynamic(() => import('@/components/Pages/PlaceOrder/PaymentMode'));
const Cancellation = dynamic(() => import('@/components/Pages/PlaceOrder/Cancellation'));

const PlaceOrder = () => {
    const [Razorpay] = useRazorpay();
    const router = useRouter();

    const [CartData, setCartData] = useRecoilState(cart_atom);
    const [showLogin, setShowLogin] = useRecoilState(login_popup);
    const [userData, setUserData] = useRecoilState(user_atom);
    const [scheduleAvailable, setScheduleAvailable] = useState(1);
    const [paymentModeData, setPaymentModeData] = useState([]);
    const [isUserApiAddress, setUserApiAddress] = useState<string>("");
    const [locationData, setLocationData] = useState<any>();
    const [formValues, setFormValues] = useState<PlaceOrderProps>({
        gift: 'no',
        delivery: 'now',
        payment_mode: 'cod',
        order_type: "",
        source: "DESKTOP_SITE",
        name: "",
        instruction: "",
        location_id: "",
        contact: ""
    });
    const [selectedAddress, setSelectedAddress] = useState<any>(null);

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    function onChange(field: string, value: any) {
        setFormValues({
            ...formValues,
            [field]: value
        });
    }

    async function fetchCarts() {
        var cartObj = await fetchCartItems(); // cartObj
        if (cartObj.status) {
            setCartData(cartObj.result);
            return cartObj.result;
        }
    }

    useEffect(() => {
        async function defaultFunction() {

            let schedule_available = await getCommon("schedule_available");
            setScheduleAvailable(schedule_available);


            let paymentModeRes = await paymentModeList("?type=customer");
            if (paymentModeRes && paymentModeRes.status) {
                setPaymentModeData(paymentModeRes.result);
                console.log({payments: paymentModeRes.result})
            }

            const fetchedData = await fetchCarts();
            if (fetchedData) {
                // setProductData(fetchedData.data.result);
                if (getCookie("mobile") && getCookie("otp_verified") && getCookie("otp_verified") === "yes") {
                    let userAddressRes = await getUserAddress();
                    if (userAddressRes && userAddressRes.status) {
                        setUserApiAddress(userAddressRes.result);
                    }
                } else {
                    setShowLogin(true);
                }
                // setIsLoading(false);
            } else {
                // props.history.push({
                //     pathname: '/cart',
                // });
                setShowLogin(true);
            }

            const fetchedLocationData = await getLocationList();
            if (fetchedLocationData && fetchedLocationData.status) {
                setLocationData(fetchedLocationData.result);
            }
            window.navigator.geolocation.getCurrentPosition(
                async function (position) {
                    let distanceAway = 0;
                    let locations = [] as any[];

                    if (fetchedLocationData.result) {
                        let promise = fetchedLocationData.result.map(function (data: any) {
                            return new Promise((resolve, reject) => {
                                let distance = geolib.getPreciseDistance(
                                    { latitude: data.lat, longitude: data.long },
                                    { latitude: position.coords.latitude, longitude: position.coords.longitude }
                                );
                                let kilometer = geolib.convertDistance(distance, 'km');
                                if (kilometer <= data.radius) {
                                    return false;
                                } else {
                                    if (distanceAway !== 0 && distanceAway > kilometer) {
                                        distanceAway = kilometer;
                                    } else {
                                        distanceAway = kilometer;
                                    }
                                }
                                data.distance = distanceAway.toFixed(2);
                                locations.push(data);
                                return resolve;
                            })
                        });
                        await Promise.all(promise);
                    }
                    let _data = locations.sort(function (a, b) { return a.distance ? a.distance - b.distance : a.name - b.name });
                    onChange('location_id', _data[0]?.id)
                    setLocationData(_data);
                },
                function (error) {
                    alert("error: " + "Please allow your location to check delivery");
                    // window.createNotification("error", "Please allow your location to check delivery");
                }
            );
        }
        defaultFunction();
    }, []);

    const placeOrderSubmit = async () => {

        let data = {...formValues};

        // setIsLoading(true);
        data.order_type = CartData.order_type;
        if (data.order_type === "delivery") {
            if (!data.selected_address || data.selected_address === "") {
                alert("Please add or select a address");
                // setIsLoading(false);
                return false;
            }
        }
        // data.delivery = deliveryType;
        // data.payment_mode = paymentMethod;
        data.source = isDesktop ? "DESKTOP_SITE" : "MOBILE_SITE";

        // setFormData(data);

        let paymentAddress = "";
        let paymentName = "";
        if (selectedAddress) {
            paymentName = selectedAddress.name;
            paymentAddress = selectedAddress.address_1 + ", " + selectedAddress.address_2 + ", " + selectedAddress.city + ", " + selectedAddress.pincode;
        } else {
            paymentName = data.name;
            paymentAddress = "";
        }
        let placeOrderRes = await placeOrder(data);
        // await saveUserRouteAnalytics(true);
        // await saveUtmAnalytics(true);
        // console.log(placeOrderRes);
        // return false;
        if (placeOrderRes && placeOrderRes.status) {
            placeOrderRes = placeOrderRes.result
            if (data.payment_mode === "online") {
                let verifyOrderPaymentRes = await verifyOrderPayment({ id: placeOrderRes.order_id, customer_id: placeOrderRes.customer_id });
                console.log(verifyOrderPaymentRes);
                if (verifyOrderPaymentRes.status) {
                    const razorpay_option = {
                        key: ConfigData.RP_KEY_ID,
                        amount: verifyOrderPaymentRes.result.amount,
                        currency: "INR",
                        name: ConfigData.SITE_NAME,
                        description: ConfigData.site_description,
                        receipt: verifyOrderPaymentRes.result.id,
                        order_id: verifyOrderPaymentRes.result.id,
                        image: "https://api2.nirulas.com/nirulas-api/public/assets/images/logo.png",
                        handler: async (response: any) => {
                            try {
                                let paymentRes = {
                                    payment_mode: "Online",
                                    cart_id: CartData.id,
                                    order_id: placeOrderRes.order_id,
                                    paid_amount: Math.round(placeOrderRes.grand_total),
                                    payment_id: response.razorpay_payment_id,
                                    payment_order_id: response.razorpay_order_id,
                                    payment_signature: response.razorpay_signature,
                                };
                                const orderPaymentRes = await capturePayment(paymentRes);

                                // const orderPaymentRes = await orderPayment(paymentRes);
                                if (orderPaymentRes && orderPaymentRes.status) {

                                    ReactGa.pageview("/place-order");

                                    ReactGa.plugin.execute('ecommerce', 'addTransaction', {
                                        "id": placeOrderRes.order_id,
                                        "order_number": placeOrderRes.order_number,
                                        "revenue": Math.round(placeOrderRes.grand_total)
                                    });
                                    ReactGa.plugin.execute('ecommerce', 'send', null);
                                    ReactGa.plugin.execute('ecommerce', 'clear', null);

                                    setTimeout(() => {
                                        // props.history.push({
                                        //     pathname: "/thank-you/" + placeOrderRes.order_number + "/" + window.getCookie("mobile"),
                                        // });

                                        router.replace(`/placed?orderid=${placeOrderRes.order_number}&mobile=${getCookie("mobile")}`);
                                    }, 500);
                                } else {
                                    alert("error: " + orderPaymentRes.data.message);
                                }
                            } catch (err) {
                                console.log(err);
                                alert("error: " + "Something went wrong while processing payment. Please contact Nirulas for more.");
                            }
                        },
                        prefill: {
                            name: paymentName,
                            contact: getCookie("mobile"),
                        },
                        notes: {
                            address: paymentAddress,
                        },
                        theme: {
                            color: "#e01f25",
                        },
                    };
                    const rzp1 = new Razorpay(razorpay_option);
                    rzp1.open();
                } else {
                    alert("error: " + verifyOrderPaymentRes.message);
                }
            } else {
                ReactGa.pageview("/place-order");

                ReactGa.plugin.execute('ecommerce', 'addTransaction', {
                    "id": placeOrderRes.order_id,
                    "order_number": placeOrderRes.order_number,
                    "revenue": Math.round(placeOrderRes.grand_total)
                });
                ReactGa.plugin.execute('ecommerce', 'send', null);
                ReactGa.plugin.execute('ecommerce', 'clear', null);

                setTimeout(() => {
                    // props.history.push({
                    //     pathname: "/thank-you/" + placeOrderRes.order_number + "/" + window.getCookie("mobile"),
                    // });

                    router.replace(`/placed?orderid=${placeOrderRes.order_number}&mobile=${getCookie("mobile")}`);
                }, 500);
            }
        } else {
            await saveUserRouteAnalytics();
            await saveUtmAnalytics();
            if (placeOrderRes.message.toLowerCase().includes("not deliverable")) {
                let errorMsg = await getCommon("location_message");
                alert("error: " + errorMsg);
                // setOrderErrorMsg(errorMsg);
                // setOrderErrorType("location_error");
                // setShowTimeAvailability(true);
            } else if (placeOrderRes.message.toLowerCase().includes("out of stock")) {
                // props.history.push({
                //     pathname: '/cart',
                //     product: placeOrderRes.result
                // })
                router.replace("/cart");
            } else if(placeOrderRes.message.includes("Time Issue")) {
                // setOrderErrorType("time_error");
                // setOrderErrorMsg(placeOrderRes.message);
                // setShowTimeAvailability(true);
                alert("error: " + placeOrderRes.message);

                // setIsLoading(false);
                // return false;
            }
            alert("error: " + placeOrderRes.message);
        }
        // setIsLoading(false);
    };

    
    return (
        <>
            {/* <Head>
                <Script type="text/javascript" src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            </Head> */}
            <AddedItems CartData={CartData} />
            {
                getCookie("otp_verified") === "yes" && CartData && 
                <YourDetails
                    key={showLogin ? 1 : 0}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    scheduleAvailable={scheduleAvailable}
                    CartData={CartData}
                    onChange={onChange}
                    formValues={formValues}
                    locationData={locationData}
                />}
            <Instructions onChange={onChange} formValues={formValues} />
            <Summery CartData={CartData} />
            <PaymentMode onChange={onChange} formValues={formValues} paymentModeData={paymentModeData} />
            <Cancellation placeOrderSubmit={placeOrderSubmit} />
        </>
    )
}

export default PlaceOrder;