import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const OrdersHeader = () => {
    return (
        <div className="flex text-xs justify-between items-center mx-auto py-2 xs:px-40 px-20 border-b border-gray-200">
            <div className="flex space-x-8 pr-4">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                    About Us
                </a>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                    My account
                </a>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                    Wishlist
                </a>
            </div>
            <div className="flex-grow ">
                <span className="text-gray-600 pl-4 border-l-2">
                    We deliver to you every day from{" "}
                    <span className="text-orange-600 font-bold">
                        7:00 to 23:00
                    </span>
                </span>
            </div>
            <div className="flex space-x-8">
                <div className="text-gray-600 flex items-center hover:text-gray-900">
                    English{" "}
                    <span className="ml-1">
                        <MdKeyboardArrowDown fontSize={"14px"} />
                    </span>
                </div>
                <div className="text-gray-600 flex items-center hover:text-gray-900">
                    USD{" "}
                    <span className="ml-1">
                        <MdKeyboardArrowDown fontSize={"14px"} />
                    </span>
                </div>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                    Order Tracking
                </a>
            </div>
        </div>
    );
};

export default OrdersHeader;
