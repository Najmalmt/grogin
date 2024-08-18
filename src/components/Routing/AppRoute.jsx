import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Screens/Login/LoginPage";
import Home from "../Screens/Home/Home";
import SingleProducts from "../Screens/SingleProduct/SingleProducts";
import Wishlist from "../Screens/Wishlist/Wishlist";
import Cart from "../Screens/Cart/Cart";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="products/:id" element={<SingleProducts />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
};

export default AppRoute;
