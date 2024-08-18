import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../../../features/cart/cartSlice";

import { MdAdd } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import Header from "../Home/_components/Header/Header";
import Navigation from "../Home/_components/Navigation/Navigation";
import Footer from "../Home/_components/Footer/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const cleanPrice = (price) => {
        // Remove currency symbols and any other non-numeric characters
        return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = cleanPrice(item.price);
            const itemQuantity = Number(item.quantity) || 1; // Default to 1 if quantity is missing
            return total + itemPrice * itemQuantity;
        }, 0);
    };

    return (
        <>
            <Header />
            <Navigation />
            <div className="flex justify-between xs:px-40 px-20 mb-10">
                <div className=" bg-white pt-3 rounded-md">
                    <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-4 mb-4"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={item.imageUrl[0]}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {item.category.join(", ")}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                                className="text-red-500 text-sm mt-2 font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex w-[200px] justify-between">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    handleDecreaseQuantity(
                                                        item.id
                                                    )
                                                }
                                                className="p-2"
                                            >
                                                <LuMinus size={20} />
                                            </button>
                                            <span className="mx-2 font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleIncreaseQuantity(
                                                        item.id
                                                    )
                                                }
                                                className="p-2"
                                            >
                                                <MdAdd size={20} />
                                            </button>
                                        </div>
                                        <p className="text-lg font-semibold">
                                            $
                                            {(
                                                cleanPrice(item.price) *
                                                (Number(item.quantity) || 1)
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <Link to={"/"} className="text-blue-500">
                        ← Continue Shopping
                    </Link>
                </div>
                <div className="bg-gray-100 w-[300px] h-[400px] p-5 flex flex-col rounded-[5px] pt-3 shadow-lg mt-4 md:mt-0">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-4">
                        <p>Items</p>
                        <p>{cartItems.length}</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p>Shipping</p>
                        <p>$5.00</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="promo-code" className="mb-2">
                            Promo Code
                        </label>
                        <input
                            type="text"
                            id="promo-code"
                            className="p-2 border rounded-md"
                            placeholder="Enter your code"
                        />
                        <button className="bg-red-500 text-white p-2 rounded-md mt-2">
                            Apply
                        </button>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold">Total Cost</p>
                        <p className="font-semibold">
                            ${(calculateTotal() + 5.0).toFixed(2)}
                        </p>
                    </div>
                    <button className="bg-purple-600 text-white w-full p-3 rounded-md">
                        Checkout
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
