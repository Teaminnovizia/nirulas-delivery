'use client'

import { cart_atom } from "@/atoms/index";
import { AddToCart, clearCartApi, fetchCartItems } from "@/utils/LibFunctions";
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";

const CartListItem = dynamic(() => import('@/components/Common').then(mod => mod.CartListItem));

const CartList = () => {
    const [CartData, setCartData] = useRecoilState(cart_atom);
    const [productData, setProductData] = useState({});
    const [customizedData, setCustomizedData] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [uniqueProduct, setUniqueProduct] = useState("");

    async function fetchCarts() {
        var cartObj = await fetchCartItems(); // cartObj
        if (cartObj.status) {
            setCartData(cartObj.result);
        }
    }

    useEffect(() => {
        fetchCarts();
    }, []);

    function addToCart (product: any) {
        setCustomizedData("");
        setShowModal(false);
        setUniqueProduct("");

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

        if (product.cart_item_id) {
            apiProduct.cart_item_id = product.cart_item_id;
        }

        if (apiProduct.is_customized) {
            apiProduct.new_customize_data = product.new_customize_data;
        }

        AddToCart(apiProduct)
        .then(async (data) => {
            if (data.status) {
                // setShowItemDetailWithAddOnPopup(false);

                // window.$('.customizebox').removeClass('slide');
                // window.$('.customItem').prop('checked', false);
                if (data.message === "popup") {
                    // setShowPopup(data.result.response_msg);
                    alert(data.result.response_msg);
                } else {
                    setProductData(data.result);
                    if (product.increase) {
                        // var cart = window.$("#animate-cart");
                        // var imgtodrag = window.$("#img_" + product.id).eq(0);
                        // if (imgtodrag) {
                        //     window.addToCartAnimation(imgtodrag, cart);
                        // }
                    }

                    if (data.result) {
                        // setCookie("token", data.result.token);
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
                                alert("error: " + data.message);
                            }
                        }
                        if (data.message === "popup") {
                            // setShowPopup(data.result.response_msg);
                            alert(data.result.response_msg);
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
                alert("error: " + data.message);

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

    const clearCart = async (cart_id: any) => {
        try {
            if(!CartData?.id) {
                return alert('Cart is already empty');
            }
            if (window.confirm("Are you sure you want to clear the cart?")) {
                const clearCartRes = await clearCartApi({ cart_id: cart_id });
                if (clearCartRes.status) {
                    // window.$(".menuflex span").removeClass("counter");
                    // window.$(".menuflex span").text("");
                    // window.$(".cartclick h4").text("Cart");
                    await fetchCarts();
                    alert("success: " + clearCartRes.message);
                }
            }

        } catch (error) {
            alert("error: " + error);
        }
    }
    
    return (
        <section className='w-full sm:px-8 px-3'>
            <div className='w-full space-y-8 py-10 max-w-6xl mx-auto'>
                <div className='w-full space-y-2 relative flex sm:items-center items-end max-sm:flex-col sm:px-4'>
                    <h2 className='font-rubik text-primary-red text-center w-full font-bold'>
                        Review cart
                    </h2>

                    <button onClick={() => {clearCart(CartData?.id)}} className='text-primary-red border-none outline-none font-rubik font-medium sm:absolute right-5'>
                        Clear cart
                    </button>
                </div>

                <div className='w-full space-y-4 sm:px-4'>
                    {
                        Array.isArray(CartData?.carts_items) && CartData.carts_items.map((ci, i) => {
                            return <CartListItem key={i} data={ci} addToCart={addToCart} />
                        })
                    }
                    {/* <CartListItem />
                    <CartListItem />
                    <CartListItem /> */}
                </div>
            </div>
        </section>
    )
}

export default CartList;