import React from "react";
import LoginForm from "./_components/LoginForm";
import SideImage from "./_components/SideImage";

const LoginPage = () => {
    return (
        <div>
            <div className="flex">
                <div className=" w-full md:w-2/3">
                    <LoginForm />
                </div>
                <SideImage />
            </div>
        </div>
    );
};

export default LoginPage;
