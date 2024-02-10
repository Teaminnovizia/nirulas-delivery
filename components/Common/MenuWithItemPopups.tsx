'use client'

import { cart_atom } from "@/atoms/index";
import { MenuItemsContainer } from "@/components/Common";
import { AddToCart, fetchCartItems } from "@/utils/LibFunctions";
import { setCookie } from "cookies-next";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { toastOptions } from "../Layout";
import { ItemDetailPopup, ItemDetailWithAddOnPopup } from "./PopUps";

const MenuWithItemPopups = ({ MenuProductData }: { MenuProductData: any[] }) => {
    const [productInfo, setProductInfo] = useState<any>(null);
    const [showItemDetailPopup, setShowItemDetailPopup] = useState(false);
    const [showItemDetailWithAddOnPopup, setShowItemDetailWithAddOnPopup] = useState(false);
    const [customizedData, setCustomizedData] = useState<any>(null);
    const [CartData, setCartData] = useRecoilState(cart_atom);

    useEffect(() => {
        if(showItemDetailPopup) {
            // var product = 
            setProductInfo(showItemDetailPopup);
        }
        else {
            setProductInfo(null);
        }
    }, [showItemDetailPopup])

    useEffect(() => {
        if(showItemDetailWithAddOnPopup) {
            // var product = 
            setProductInfo(showItemDetailWithAddOnPopup);
        }
        else {
            setProductInfo(null);
        }
    }, [showItemDetailWithAddOnPopup])

    async function fetchCarts() {
        var cartObj = await fetchCartItems(); // cartObj
        if (cartObj.status) {
            setCartData(cartObj.result);
        }
    }

    useEffect(() => {
        fetchCarts();
    }, []);
    

    function addToCart (product: any, done?: (error?: string) => void) {
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
                setCustomizedData("");

                toast.success("Added To Cart", toastOptions);
                // setShowModal(false);
                setShowItemDetailWithAddOnPopup(false);
                if(typeof(done) == "function") {
                    done();
                }

                // window.$('.customizebox').removeClass('slide');
                // window.$('.customItem').prop('checked', false);
                if (data.message === "popup") {
                    // setShowPopup(data.result.response_msg);
                    toast.success(data.result.response_msg, toastOptions as any);
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
                                toast.error(data.message, toastOptions as any);
                            }
                        }
                        if (data.message === "popup") {
                            // setShowPopup(data.result.response_msg);
                            toast.success(data.result.response_msg, toastOptions as any);
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
                toast.error(data.message, toastOptions as any);

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
        <>
            <div className='w-full space-y-12'>
                {MenuProductData.filter(x => x.items.length).map((x) => (
                    <MenuItemsContainer
                        data={x}
                        key={x.id}
                        setShowItemDetail={setShowItemDetailPopup}
                        setShowItemDetailWithAddOn={setShowItemDetailWithAddOnPopup}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            {showItemDetailPopup && (
                <ItemDetailPopup
                    productInfo={productInfo}
                    showPopup={showItemDetailPopup}
                    setShowPopup={setShowItemDetailPopup}
                />
            )}

            {showItemDetailWithAddOnPopup && (
                <ItemDetailWithAddOnPopup
                    productInfo={productInfo}
                    showPopup={showItemDetailWithAddOnPopup}
                    setShowPopup={setShowItemDetailWithAddOnPopup}
                    addToCart={addToCart}
                />
            )}
        </>
    )
}

export default MenuWithItemPopups;