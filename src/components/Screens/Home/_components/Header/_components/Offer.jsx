import React from "react";

const Offer = () => (
    <div className="bg-purple-600 text-white text-xs py-2">
        <div className="flex items-center justify-between xs:px-80 px-60">
            <span className="font-semibold text-[12px] ml-2">
                FREE delivery & 40% Discount for the next 3 orders! Place your
                1st order now.
            </span>
            <span className="flex items-center text-[12px] font-medium ml-2">
                Until the end of the sale:
                <span className="text-[18px] font-bold ml-2">47</span> days
                <span className="text-[18px] font-bold ml-2">06</span> hours
                <span className="text-[18px] font-bold ml-2">52</span> minutes
                <span className="text-[18px] font-bold ml-2">13</span> sec.
            </span>
        </div>
    </div>
);

export default Offer;
