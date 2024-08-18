import React, { useState, useEffect } from "react";

const SpecialOfferCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 81,
        hours: 6,
        minutes: 50,
        seconds: 2,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = {
                    ...prevTime,
                    seconds: prevTime.seconds - 1,
                };

                if (newTime.seconds < 0) {
                    newTime.seconds = 59;
                    newTime.minutes -= 1;
                }

                if (newTime.minutes < 0) {
                    newTime.minutes = 59;
                    newTime.hours -= 1;
                }

                if (newTime.hours < 0) {
                    newTime.hours = 23;
                    newTime.days -= 1;
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg flex items-center space-x-2">
            <span className="text-orange-600 font-bold text-[13px] mr-1">
                Special Offer :
            </span>
            <div className="flex space-x-2">
                <div className="bg-white text-orange-600 font-semibold border-orange-300 border-[2px] text-[13px] py-[6px] px-[10px] rounded-md">
                    {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="bg-white text-orange-600 font-semibold border-orange-300 border-[2px] text-[13px] py-[6px] px-[10px] rounded-md">
                    {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="bg-white text-orange-600 font-semibold border-orange-300 border-[2px] text-[13px] py-[6px] px-[10px] rounded-md">
                    {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="bg-white text-orange-600 font-semibold border-orange-300 border-[2px] text-[13px] py-[6px] px-[10px] rounded-md">
                    {String(timeLeft.seconds).padStart(2, "0")}
                </div>
            </div>
            <span className="text-gray-600 ml-2 text-[11px]">
                Remains until the end of the offer.
            </span>
        </div>
    );
};

export default SpecialOfferCountdown;
