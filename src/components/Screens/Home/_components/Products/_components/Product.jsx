import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../../features/cart/cartSlice";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../../../../../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const Product = ({ product, selectedIcon }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const handleWishlistClick = (event) => {
        event.stopPropagation();
        if (isInWishlist) {
            dispatch(removeFromWishlist(product));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div
            className={`border relative ${
                selectedIcon === "list" ? "flex justify-between p-4" : "p-2"
            }`}
        >
            <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={`block ${
                    selectedIcon === "list" ? "flex items-center mr-10" : ""
                }`}
            >
                <img
                    src={product.imageUrl[0]}
                    alt={product.name}
                    className={`${
                        selectedIcon === "list"
                            ? "w-[160px] h-[160px] object-cover mb-3 mr-3"
                            : "w-full h-[152px] object-cover mb-3"
                    }`}
                />
                <div>
                    <h3 className="font-semibold text-[13px] leading-[17px]">
                        {product.name.slice(0, 20)}
                        {product.name.length > 40 ? "..." : ""}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mt-3 h-[11px]">
                        {[...Array(5)].map((star, index) => (
                            <FaStar
                                key={index}
                                className={`${
                                    index < product.rating
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                    <div
                        className={`flex ${
                            selectedIcon === "list" ? "hidden" : ""
                        } items-center mt-2`}
                    >
                        <span className="text-[22px] font-bold text-red-600 mr-3">
                            {product.price}
                        </span>
                        <span className="text-[16px] font-semibold line-through text-black">
                            {product.oldPrice}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Wishlist Button */}
            <span
                className={`absolute cursor-pointer ${
                    selectedIcon === "list" ? "left" : "top-2 right-2"
                } text-[22px] ${
                    isInWishlist ? "text-red-500" : "text-gray-200"
                }`}
                onClick={handleWishlistClick}
            >
                <FaHeart />
            </span>

            {/* conditional rendering of price tag on list */}

            <div
                className={`flex ${
                    selectedIcon === "list" ? "" : "hidden"
                } items-center mt-2`}
            >
                <span className="text-[22px] font-bold text-red-600 mr-3">
                    {product.price}
                </span>
                <span className="text-[16px] font-semibold line-through text-black">
                    {product.oldPrice}
                </span>
            </div>
            <div className="flex items-center mt-1">
                {/* Cart Button */}
                <button
                    className="text-2xl text-white p-2 rounded-[8px] bg-green-600"
                    onClick={handleAddToCart}
                >
                    <FaShoppingCart fontSize={18} />
                </button>

                {product.isInStock ? (
                    <span className="text-green-600 text-[11px] font-bold uppercase ml-3">
                        In Stock
                    </span>
                ) : (
                    <span className="text-red-600">Out of Stock</span>
                )}
            </div>
        </div>
    );
};

export default Product;
