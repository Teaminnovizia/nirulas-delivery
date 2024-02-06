'use client';

import { cart_atom } from "@/atoms/index";
import { Button } from "@/components/Core";
import { toastOptions } from "@/components/Layout";
import { AddToCart, fetchCartItems, getHomeSliders } from "@/utils/LibFunctions";
import { BaseUrl } from "@/utils/constants";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false
};

const HeroBanner = () => {
    const [Sliders, setSliders] = useState<any[]>([]);
    const setCartData = useSetRecoilState(cart_atom);

    useEffect(() => {
        getHomeSliders()
        .then(data => {
            // console.log(data);
            setSliders(data);
        })
        .catch(e => console.log(e));
    }, [])

    function addToCart (product: any) {
        let apiProduct: any = {
            product_id: product.id,
            qty: product.qty || 1,
            price: product.price,
            product_name: product.name,
            is_customized: product.is_customizable,
            convenience_fee: 0,
            delivery_charge: 0,
        }

        if (product.remove_item) {
            apiProduct.remove_item = product.remove_item;
        }

        if (product.is_customizable) {
            apiProduct.new_customize_data = product.new_customize_data;
        }

        AddToCart(apiProduct)
        .then(async (data) => {
            if (data.status) {
                // setCustomizedData("");

                toast.success("Added To Cart", toastOptions);
                // setShowModal(false);
                // setShowItemDetailWithAddOnPopup(false);

                // window.$('.customizebox').removeClass('slide');
                // window.$('.customItem').prop('checked', false);
                if (data.message === "popup") {
                    // setShowPopup(data.result.response_msg);
                    toast.success(data.result.response_msg, toastOptions);
                } else {
                    if (product.increase) {
                        // var cart = window.$("#animate-cart");
                        // var imgtodrag = window.$("#img_" + product.id).eq(0);
                        // if (imgtodrag) {
                        //     window.addToCartAnimation(imgtodrag, cart);
                        // }
                        // toast.success('Product added to cart!', toastOptions as any);
                    }

                    if (data.result) {
                        setCookie("token", data.result.token);
                    }

                    // setShowModal(!showModal);
                    // setShowItemDetailWithAddOnPopup(!showItemDetailWithAddOnPopup);

                    // const getCartData = await module.getCartItem();
                    var cartObj = await fetchCartItems();
                    if (cartObj.status) {
                        setCartData(cartObj.result);

                        if (cartObj.result) {
                            // window.$(".cartclick").css("opacity", "1");
                            // window.$(".menuflex span").addClass("counter");
                            // window.$(".menuflex span").html(cartObj.result.items_qty);
                            // window.$(".cartclick h4").text("View Cart");
                        } else {
                            // window.$(".cartclick").css("opacity", "0.8");
                            // window.$(".menuflex span").removeClass("counter");
                            // window.$(".menuflex span").html("");
                            // window.$(".cartclick h4").text("Cart");
                        }

                        if (cartObj.result && cartObj.result.offer_id) {
                            if (data.message === "You have an active coupon applied which is applicable for this product. Please remove and apply again") {
                                // window.createNotification("error", data.message);
                                // alert("error: " + data.message);
                                toast.error(data.message, toastOptions);
                            }
                        }
                        if (data.message === "popup") {
                            // setShowPopup(data.result.response_msg);
                            toast.success(data.result.response_msg, toastOptions);
                        }
                    }
                }
                // if (window.$(".add-button-" + product.id)) {
                //     window.$(".add-button-" + product.id).find(".loader-icon").hide();
                //     window.$(".add-button-" + product.id).find(".qty-toggle").show();
                //     window.$(".add-button-" + product.id).find("a").attr("data-disabled", "false");
                //     window.$(".add-button-" + product.id).find(".fa-spin").hide();
                // }
            } else {
                // window.createNotification("error", data.message);
                // alert("error: " + data.message);
                toast.error(data.message, toastOptions);

                // if (window.$(".add-button-" + product.id)) {
                //     window.$(".add-button-" + product.id).find(".loader-icon").hide();
                //     window.$(".add-button-" + product.id).find(".qty-toggle").show();
                //     window.$(".add-button-" + product.id).find("a").attr("data-disabled", "false");
                //     window.$(".add-button-" + product.id).find(".fa-spin").hide();
                // }
            }
        })
        .catch(error => {})
    }

    return (
        <section className='w-full'>
            <Slider {...settings} className='w-full'>
                {Sliders?.map((x) => (
                    <div key={x?.alt} className='w-full relative aspect-[16/5]'>
                        <Image
                            src={BaseUrl + "public" + x?.desktop_banner}
                            alt={x?.name}
                            quality={100}
                            fill
                            priority
                            className='object-cover'
                        />
                        <Button className="absolute bottom-[10%] left-[50%] text-white" title="Add To Cart" onClick={() => addToCart(x)} />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default HeroBanner;

const DATA = [
    {
        image: '/Images/home/home_slide_bg1.png',
        alt: 'Jamun'
    },
    {
        image: '/Images/home/home_slide_bg2.png',
        alt: 'Pizza'
    },
    {
        image: '/Images/home/home_slide_bg3.png',
        alt: 'Burger'
    },
    {
        image: '/Images/home/home_slide_bg4.png',
        alt: 'Healthy'
    },
]