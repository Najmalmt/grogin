import React from "react";
import Offer from "./_components/Offer";
import OrdersHeader from "./_components/OrdersHeader";
import Navbar from "./_components/Navbar";
import BottomNav from "./_components/BottomNav";
import "../../../../../App.css";

const Header = () => {
    return (
        <div className="header-container">
            <Offer />
            <OrdersHeader />
            <Navbar />
            <BottomNav />
        </div>
    );
};

export default Header;
