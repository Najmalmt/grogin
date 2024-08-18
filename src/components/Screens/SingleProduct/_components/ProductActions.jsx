import React from "react";
import { FaHeart, FaShareAlt, FaExchangeAlt } from "react-icons/fa";

const ProductActions = ({ isInWishlist, handleWishlistClick }) => {
    return (
        <div className="flex space-x-4 py-1 mt-3 items-center">
            {/* Add to Wishlist */}
            <div className="flex items-center space-x-2">
                <span
                    className={`cursor-pointer text-[22px] p-1 border rounded-[6px] ${
                        isInWishlist ? "text-red-500" : "text-gray-200"
                    }`}
                    onClick={handleWishlistClick}
                >
                    <FaHeart size={20} />
                </span>
                <span className="text-[13px] font-medium text-gray-600 hover:text-gray-800">
                    Add to whishlist
                </span>
            </div>

            {/* Share this Product */}
            <div className="flex items-center space-x-2">
                <div className="p-1 border rounded-[6px] text-gray-600 hover:text-gray-800 hover:border-gray-800">
                    <FaShareAlt size={20} />
                </div>
                <span className="text-[13px] font-medium text-gray-600 hover:text-gray-800">
                    Share this Product
                </span>
            </div>

            {/* Compare */}
            <div className="flex items-center space-x-2">
                <div className="p-1 border rounded-[6px] text-gray-600 hover:text-gray-800 hover:border-gray-800">
                    <FaExchangeAlt size={20} />
                </div>
                <span className="text-[13px] font-medium text-gray-600 hover:text-gray-800">
                    Compare
                </span>
            </div>
        </div>
    );
};

export default ProductActions;
