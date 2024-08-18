import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Home/_components/Header/Header";
import Navigation from "../Home/_components/Navigation/Navigation";
import Footer from "../Home/_components/Footer/Footer";
import { removeFromWishlist } from "../../../features/wishlist/wishlistSlice";

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleRemove = (id) => {
        dispatch(removeFromWishlist({ id }));
    };

    return (
        <>
            <Header />
            <Navigation />
            <div className="container flex flex-col justify-between xs:px-40 px-20 mb-10">
                <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist.length === 0 ? (
                        <p>Your wishlist is empty.</p>
                    ) : (
                        wishlist.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b pb-4 mb-4"
                            >
                                <div className="flex">
                                    <img
                                        src={item.imageUrl[0]}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                    <div className="min-w-[250px] flex flex-col justify-between h-[140px]">
                                        <div>
                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {item.category.join(", ")}
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                                className="text-red-500 text-sm p-2 bg-slate-200 rounded mt-2 font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-[200px] justify-between">
                                    <div className="flex items-center">
                                        <span className="mx-2 font-medium">
                                            {item.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Wishlist;
