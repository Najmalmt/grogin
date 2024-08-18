import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Screens/Login/LoginPage";

const AuthRoute = () => (
    <Routes>
        <Route path="/" element={<LoginPage />} />
    </Routes>
);

export default AuthRoute;
