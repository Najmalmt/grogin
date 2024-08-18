import React from "react";
import Header from "./_components/Header/Header";
import Products from "./_components/Products/Products";
import Navigation from "./_components/Navigation/Navigation";
import Footer from "./_components/Footer/Footer";
const Home = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Products />
            <Footer />
        </>
    );
};

export default Home;
