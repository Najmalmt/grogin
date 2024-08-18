import React from "react";
import { FaCreditCard, FaShieldAlt } from "react-icons/fa";

const InfoCard = () => {
    return (
        <div className="mt-3 rounded-lg border border-gray-200">
            <div className="flex items-center px-4 py-4 border-b-[1px] border-gray-700 pb-4">
                <FaCreditCard className="text-gray-400 text-[26px] mr-4" />
                <div className="text-white text-[13px]">
                    <span className="font-bold mr-1 text-gray-600">
                        Payment.
                    </span>
                    <span className="text-gray-400">
                        Payment upon receipt of goods, Payment by card in the
                        department, Google Pay, Online card, -5% discount in
                        case of payment
                    </span>
                </div>
            </div>
            <div className="flex items-center px-4 py-4">
                <FaShieldAlt className=" text-[26px] mr-4 text-gray-400" />
                <div className=" text-[13px]">
                    <span className="font-bold mr-1 text-gray-600">
                        Warranty.
                    </span>
                    <span className="text-gray-400">
                        The Consumer Protection Act does not provide for the
                        return of this product of proper quality.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
