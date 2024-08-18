import React from "react";
import loginImage from "../../../../assets/login-side.jpg";

const SideImage = () => {
    return (
        <div className="hidden md:block w-1/2 bg-gray-100 h-screen">
            <img
                src={loginImage}
                alt="Side Illustration"
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default SideImage;
