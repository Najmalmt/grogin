import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import play from "../../../../../assets/play-store.png";
import app from "../../../../../assets/app-store.png";
import visa from "../../../../../assets/visa.png";
import master from "../../../../../assets/master.png";
import paypal from "../../../../../assets/paypal.png";
import skrill from "../../../../../assets/skrill.png";
import klarna from "../../../../../assets/klarna.png";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-40">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-0 pb-8 border-b">
                    <div className="w-[300px]">
                        <h3 className="text-[20px] font-bold">
                            Join our newsletter for £10 offs
                        </h3>
                        <p className="text-gray-600 text-[13px] font-normal leading-[19.51px]">
                            Register now to get latest updates on promotions &
                            coupons. Don’t worry, we not spam!
                        </p>
                    </div>
                    <div className="w-[418px] rounded-[8px]">
                        <div className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="p-3 w-full md:w-auto flex-grow border border-gray-300 rounded-l-lg"
                            />
                            <button className="bg-purple-600 text-[14px] font-bold text-white px-6 py-3 rounded-r-[8px]">
                                SEND
                            </button>
                        </div>
                        <p className="text-gray-500 text-[11px] mt-2">
                            By subscribing you agree to our{" "}
                            <a href="/" className="text-purple-600">
                                Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a href="/" className="text-purple-600">
                                Privacy & Cookies Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b border-gray-300">
                    <div className="flex flex-row justify-between w-full py-[51px]">
                        <div className="mb-8 md:mb-0 w-[320px]">
                            <h4 className="font-semibold mb-4 text-[14px]">
                                Do You Need Help ?
                            </h4>
                            <p className="text-gray-600 text-[13px] leading-[19.5px] mb-4">
                                Autoseligen syr. Nek diarask fröbomba. Nör
                                <br />
                                antipol kynoda nynat. Pressa fåmoska.
                            </p>
                            <div className="flex items-center">
                                <AiOutlinePhone
                                    className="text-xl mr-2"
                                    fontSize={28}
                                />
                                <p className="text-[12px]">
                                    Monday–Friday: 08am–9pm
                                </p>
                            </div>
                            <p className="text-[20px] ml-7 font-semibold mb-4">
                                0 800 300-353
                            </p>
                            <div className="flex items-center">
                                <AiOutlineMail className=" mr-2" />
                                <p className="text-[12px]">
                                    Need help with your order?
                                </p>
                            </div>
                            <p className="text-gray-600 font-semibold text-[14px] ml-6">
                                info@example.com
                            </p>
                        </div>
                        <div className="flex w-[800px] justify-between">
                            <div className="mb-8 md:mb-0">
                                <h4 className="font-semibold text-[14px] mb-4">
                                    Make Money with Us
                                </h4>
                                <ul className="text-gray-600 text-[13px]">
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Sell on Grogin
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Sell Your Services on Grogin
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Sell on Grogin Business
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Sell Your Apps on Grogin
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Become an Affiliate
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Advertise Your Products
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Sell-Publish with Us
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Become an Blowwe Vendor
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-8 md:mb-0">
                                <h4 className="font-semibold text-[14px] mb-4">
                                    Let Us Help You
                                </h4>
                                <ul className="text-gray-600 text-[13px]">
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Accessibility Statement
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Your Orders
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Returns & Replacements
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Shipping Rates & Policies
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Refund and Returns Policy
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Cookie Settings
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-8 md:mb-0">
                                <h4 className="font-semibold text-[14px] mb-4">
                                    Get to Know Us
                                </h4>
                                <ul className="text-gray-600 text-[13px]">
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Careers for Grogin
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            About Grogin
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Investor Relations
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Grogin Devices
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Customer reviews
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Social Responsibility
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            href="/"
                                            className="hover:text-purple-600"
                                        >
                                            Store Locations
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-semibold text-[14px] mb-4">
                                    Download our app
                                </h4>
                                <div className="flex flex-col mb-4 md:mb-0">
                                    <a
                                        href="/"
                                        className="text-gray-600 flex hover:text-purple-600 mb-2"
                                    >
                                        <img
                                            src={play}
                                            className="w-[120px]"
                                            alt=""
                                        />
                                        <p className="text-[10px] ml-2">
                                            Download App Get <br />
                                            -10% Discount
                                        </p>
                                    </a>
                                    <a
                                        href="/"
                                        className="text-gray-600 flex hover:text-purple-600"
                                    >
                                        <img
                                            src={app}
                                            className="w-[120px]"
                                            alt=""
                                        />
                                        <p className="text-[10px] ml-2">
                                            Download App Get <br />
                                            -20% Discount
                                        </p>
                                    </a>
                                </div>

                                <div className=" mt-11">
                                    <h6 className="text-[12px] mb-2">
                                        Follow us on social media:
                                    </h6>
                                    <div className="flex space-x-4">
                                        <a
                                            href="/"
                                            className=" text-blue-700 hover:text-purple-600 p-2 bg-white rounded-[6px]"
                                        >
                                            <FaFacebookF size="15" />
                                        </a>
                                        <a
                                            href="/"
                                            className=" text-sky-500 hover:text-purple-600 p-2 bg-white rounded-[6px]"
                                        >
                                            <FaTwitter size="15" />
                                        </a>
                                        <a
                                            href="/"
                                            className="text-red-500 hover:text-purple-600 p-2 bg-white rounded-[6px]"
                                        >
                                            <FaInstagram size="15" />
                                        </a>
                                        <a
                                            href="/"
                                            className="text-sky-600 hover:text-purple-600 p-2 bg-white rounded-[6px]"
                                        >
                                            <FaLinkedinIn size="15" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex text-center justify-between text-gray-500 text-sm mt-8">
                    <div>
                        <p className="text-[12px] font-medium">
                            Copyright 2024 © Grogin WooCommerce WordPress Theme.
                            All rights reserved. Powered by{" "}
                            <span className="text-purple-800">KLBTheme</span>.
                        </p>
                        <div className="flex mt-2 gap-2 items-center">
                            <img src={visa} className="w" alt="" />
                            <img src={master} alt="" />
                            <img src={paypal} alt="" />
                            <img src={skrill} alt="" />
                            <img src={klarna} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center text-[12px] space-x-4 text-black font-medium">
                        <a
                            href="/"
                            className=" hover:text-purple-600 underline underline-offset-2"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href="/"
                            className=" hover:text-purple-600 underline underline-offset-2"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/"
                            className=" hover:text-purple-600 underline underline-offset-2"
                        >
                            Order Tracking
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
