import React from "react";
import { FiChevronDown } from "react-icons/fi";

const navItems = [
    { label: "Home", hasDropdown: true },
    { label: "Shop", hasDropdown: true },
    { label: "Fruits & Vegetables" },
    { label: "Beverages" },
    { label: "Blog" },
    { label: "Contact" },
];

const rightNavItems = [
    { label: "Trending Products", hasDropdown: true },
    { label: "Almost Finished", hasDropdown: true, isSale: true },
];

const BottomNav = () => {
    return (
        <nav className="flex justify-between items-center xs:px-40 px-20 py-2 bg-white shadow">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-1 cursor-pointer"
                    >
                        <span className="text-black hover:text-purple-600 text-[15px] font-semibold">
                            {item.label}
                        </span>
                        {item.hasDropdown && (
                            <FiChevronDown className="text-gray-500" />
                        )}
                    </div>
                ))}
            </div>

            {/* Right Menu Items */}
            <div className="flex space-x-8 items-center">
                {rightNavItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-1 cursor-pointer"
                    >
                        <span
                            className={`text-[15px] font-semibold ${
                                item.isSale
                                    ? "text-red-600"
                                    : "text-black hover:text-purple-600"
                            }`}
                        >
                            {item.label}
                        </span>
                        {item.isSale && (
                            <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                SALE
                            </div>
                        )}
                        <FiChevronDown
                            className={
                                item.isSale ? "text-red-600" : "text-gray-500"
                            }
                        />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
