import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiSearch,
    FiX,
    FiMapPin,
} from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../../../../../assets/logo-grogin.png";
import { logoutUser } from "../../../../../../features/auth/authSlice";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchDisabled, setSearchDisabled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const cartItems = useSelector((state) => state.cart);
    const wishlistItems = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalCartQuantity = cartItems.reduce(
        (total, item) => total + (item.quantity || 0),
        0
    );

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            if (searchDisabled) return;
            setIsSearching(true);
            setSearchDisabled(true);
            navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setIsSearching(false);
        setSearchDisabled(false);
        navigate(`/`);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <nav className="flex relative items-center justify-between xs:px-40 px-20 py-2 border-b bg-white shadow">
            <div className="flex items-center space-x-4">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Grogin Logo"
                        className="h-[34px] w-[142px]"
                    />
                </Link>
                <FiMapPin className="text-gray-500" fontSize="24px" />
                <div className="flex flex-col">
                    <span className="text-gray-500 text-[11px]">
                        Deliver to
                    </span>
                    <span className="text-black font-medium text-[13px]">
                        all
                    </span>
                </div>
            </div>
            <div className="flex-1 mx-4">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        placeholder="Search for products, categories or brands..."
                        className={`w-full text-[14px] px-4 py-2 rounded-[8px] focus:outline-none ${
                            searchDisabled
                                ? "border-red-600 border-[2px]"
                                : "border-gray-300"
                        } bg-slate-100`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        disabled={searchDisabled}
                    />
                    <button
                        type={isSearching ? "button" : "submit"}
                        className="absolute top-2 right-2"
                        onClick={isSearching ? handleClearSearch : undefined}
                    >
                        {isSearching ? (
                            <FiX className="text-gray-400" fontSize="22px" />
                        ) : (
                            <FiSearch
                                className="text-gray-400"
                                fontSize="22px"
                            />
                        )}
                    </button>
                </form>
            </div>
            <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                    <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <FiUser className="text-black" fontSize="26px" />
                        <span className="text-black text-[12px] font-medium">
                            Joseph
                        </span>
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute top-full xs:right-28 right-10 rounded-lg bg-violet-300 w-60 p-3 border border-gray-300 shadow-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <FaCircleUser
                                    className="text-black"
                                    fontSize="24px"
                                />
                                <span className="text-black text-[14px] font-semibold">
                                    Joseph Stalin
                                </span>
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    onClick={handleLogout}
                                    className="py-2 px-4 text-[14px] font-medium text-white w-[76px] bg-violet-600 hover:bg-red-600 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <Link
                    to="/wishlist"
                    className="relative flex flex-col items-center"
                >
                    <FiHeart className="text-black" fontSize="26px" />
                    <div className="absolute -top-1 right-0.5 bg-red-600 text-white text-xs rounded-full w-[17px] h-[17px] flex items-center justify-center">
                        {wishlistItems.length}
                    </div>
                    <span className="text-black text-[12px] font-medium">
                        Wishlist
                    </span>
                </Link>
                <Link
                    to="/cart"
                    className="relative flex flex-col items-center"
                >
                    <FiShoppingCart className="text-black" fontSize="26px" />
                    <div className="absolute -top-1 right-2 bg-red-600 text-white text-xs rounded-full w-[17px] h-[17px] flex items-center justify-center">
                        {totalCartQuantity}
                    </div>
                    <span className="text-black text-[12px] font-medium">
                        Your Cart
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
