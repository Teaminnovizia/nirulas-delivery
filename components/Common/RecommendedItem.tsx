import { cart_atom } from "@/atoms/index";
import { AddToCart, fetchCartItems } from "@/utils/LibFunctions";
import { BaseUrl } from "@/utils/constants";
import { setCookie } from "cookies-next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Button, VariableButton } from "../Core";
import { toastOptions } from "../Layout";
import { ItemDetailWithAddOnPopup } from "./PopUps";

const RecommendedItem = ({ data }: { data: any }) => {
    const [showItemDetailWithAddOnPopup, setShowItemDetailWithAddOnPopup] = useState(false);
    const [CartData, setCartData] = useRecoilState(cart_atom);
    const [productInfo, setProductInfo] = useState<any>(null);
    const [isInCart, setIsInCart] = useState<any>(null);

    useEffect(() => {
        if (!CartData) return;
        var cart = CartData.carts_items.find((cd: any) => cd.product_id == data.id) as any;
        // console.log({CartData, cart})
        setIsInCart(cart);
    }, [CartData])

    useEffect(() => {
        if (showItemDetailWithAddOnPopup) {
            // var product = 
            setProductInfo(showItemDetailWithAddOnPopup);
        }
        else {
            setProductInfo(null);
        }
    }, [showItemDetailWithAddOnPopup])

    function addToCart(product: any, done?: (error?: string) => void) {
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

                    toast.success("Added To Cart", toastOptions);
                    // setShowModal(false);
                    setShowItemDetailWithAddOnPopup(false);
                    if (typeof (done) == "function") {
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
            .catch(error => { })
    }

    return (
        <Fragment>
            <div
                className={`flex flex-col items-center space-y-4 text-center outline-none`}
            >
                <div className='flex items-center justify-center mx-auto sm:max-w-[140px] max-w-[200px] w-full h-[140px]'>
                    <Image
                        src={BaseUrl + "public" + data?.thumbnail}
                        alt='Recommended'
                        quality={100}
                        width={150}
                        height={150}
                        loading='lazy'
                        className='rounded-full overflow-hidden border border-[#C9C3C4]'
                    />
                </div>

                <h6 className='sm:text-lg text-base font-rubik normal-case font-bold whitespace-pre-line'>
                    {data?.name}
                </h6>

                {/* <Button title='Add' /> */}

                {
                    isInCart && isInCart?.qty > 0 && isInCart?.is_customized == 0 ?
                        <VariableButton
                            value={isInCart.qty}
                            onDecrease={() => {
                                var _data = { ...data };
                                _data.qty = isInCart?.qty - 1;
                                if (_data.qty == 0) {
                                    _data.remove_item = true;
                                }
                                addToCart(_data)
                            }}
                            onIncrease={() => {
                                if (data.is_customizable == 1) {
                                    setShowItemDetailWithAddOnPopup(data)
                                }
                                else {
                                    var _data = { ...data };
                                    _data.qty = isInCart?.qty + 1;
                                    addToCart(_data)
                                }
                            }}
                        /> :
                        <div>
                            <Button title="ADD" onClick={() => {
                                if (data.is_customizable == 1) {
                                    setShowItemDetailWithAddOnPopup(data)
                                }
                                else {
                                    addToCart(data);
                                }
                            }} />
                            {data.is_customizable == 1 && <p className="text-xs text-center mt-1 text-primary-red">Customize</p>}
                        </div>
                }
            </div>

            {
                showItemDetailWithAddOnPopup && (
                    <ItemDetailWithAddOnPopup
                        productInfo={productInfo}
                        showPopup={showItemDetailWithAddOnPopup}
                        setShowPopup={setShowItemDetailWithAddOnPopup}
                        addToCart={addToCart}
                    />
                )
            }
        </Fragment>
    )
}

export default RecommendedItem;