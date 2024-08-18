import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navigation = () => {
    return (
        <div className="flex text-[12px] xs:px-40 px-20 font-medium py-4">
            <span className="flex items-center text-slate-400">
                Home <MdKeyboardArrowRight />
            </span>
            <span className="ml-1">Shop</span>
        </div>
    );
};

export default Navigation;
