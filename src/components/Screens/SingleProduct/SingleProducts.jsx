import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "../Home/_components/Header/Header";
import SpecialOfferCountdown from "./_components/SpecialOfferCountdown";
import Footer from "../Home/_components/Footer/Footer";
import InfoCard from "./_components/InfoCard";
import ProductActions from "./_components/ProductActions";
import ProductDetails from "./_components/ProductDetails";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../../features/wishlist/wishlistSlice";
import RelatedProducts from "./_components/RelatedProducts";

const SingleProducts = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [activeImg, setActiveImage] = useState(null);
    const [amount, setAmount] = useState(1);
    const [loading, setLoading] = useState(true);
    const [singleProduct, setSingleProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const isInWishlist = wishlist.some((item) => item.id === singleProduct?.id);

    const handleWishlistClick = (event) => {
        event.stopPropagation();
        if (isInWishlist) {
            dispatch(removeFromWishlist(singleProduct));
        } else {
            dispatch(addToWishlist(singleProduct));
        }
    };

    const handleAddToCart = () => {
        const productWithQuantity = {
            ...singleProduct,
            quantity: amount,
        };
        dispatch(addToCart(productWithQuantity));
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchProductData = async () => {
            try {
                const response = await fetch("/products.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const products = await response.json();
                const product = products.find((p) => p.id === parseInt(id));
                setSingleProduct(product);

                if (product) {
                    const productImages = product.imageUrl;
                    const duplicatedImages =
                        productImages.length === 1
                            ? Array(4).fill(productImages[0])
                            : productImages;
                    setImages(duplicatedImages);
                    setActiveImage(duplicatedImages[0]);

                    // Filter related products based on category
                    const related = products.filter(
                        (p) =>
                            p.category.some((cat) =>
                                product.category.includes(cat)
                            ) && p.id !== product.id
                    );
                    setRelatedProducts(related);
                } else {
                    throw new Error("Product not found");
                }
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductData();
    }, [id]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setZoomPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <Header />
            <div className="flex xs:px-40 px-20 flex-col pt-5 pb-10 justify-between lg:flex-row gap-16">
                <div className="flex flex-col gap-6 lg:w-2/4 relative">
                    {loading ? (
                        <Skeleton width={350} height={350} />
                    ) : (
                        <>
                            <img
                                src={activeImg}
                                alt=""
                                className="w-[350px] h-[350px] aspect-square object-cover rounded-lg"
                                onMouseEnter={handleMouseEnter}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                            {isHovering && (
                                <div
                                    className="absolute border border-gray-300 rounded-lg bg-white overflow-hidden"
                                    style={{
                                        width: "450px",
                                        height: "350px",
                                        backgroundRepeat: "no-repeat",
                                        top: "0",
                                        left: "370px",
                                        backgroundImage: `url(${activeImg})`,
                                        backgroundSize: "700px 700px",
                                        backgroundPosition: `-${
                                            zoomPosition.x * 1.2
                                        }px -${zoomPosition.y * 1.2}px`,
                                    }}
                                />
                            )}
                        </>
                    )}
                    <div className="flex flex-row justify-between w-[480px] h-24">
                        {loading
                            ? Array(4)
                                  .fill()
                                  .map((_, index) => (
                                      <Skeleton
                                          key={index}
                                          width={96}
                                          height={96}
                                      />
                                  ))
                            : images.map((img, index) => (
                                  <img
                                      key={index}
                                      src={img}
                                      alt=""
                                      className="w-24 h-24 rounded-md cursor-pointer"
                                      onClick={() => setActiveImage(img)}
                                  />
                              ))}
                    </div>
                </div>
                <div className="flex flex-col lg:w-2/4">
                    {loading ? (
                        <Skeleton count={3} />
                    ) : (
                        <>
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold">
                                    {singleProduct?.name}
                                </h1>
                            </div>
                            <div className="flex items-center text-sm space-x-2 pb-[10px] mb-5 border-b">
                                <div className="flex items-center mt-1 h-[11px]">
                                    {[...Array(5)].map((star, index) => (
                                        <FaStar
                                            key={index}
                                            className={`${
                                                index < singleProduct?.rating
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-900 font-semibold px-[5px] py-[1px] border border-gray-300 rounded-[6px]">
                                    {singleProduct?.rating}
                                </span>
                                <span className="text-gray-600 text-[12px] font-normal">
                                    2
                                </span>
                                <span className="text-black text-[13px] font-medium">
                                    <span className="text-gray-200 mx-2">
                                        |
                                    </span>{" "}
                                    <span className="text-gray-400">SKU:</span>{" "}
                                    E7F8G9H0
                                </span>
                            </div>
                            <p className="text-gray-700 text-[14px] mb-2">
                                Con un'ammortizzazione incredibile per
                                sostenerti in tutti i tuoi chilometri,
                                Invincible 3 offre un livello di comfort
                                elevatissimo sotto il piede.
                            </p>
                            <div className="flex items-center mb-2">
                                <span className="text-[30px] font-bold text-red-600 mr-3">
                                    {singleProduct?.price}
                                </span>
                                <span className="text-[22px] font-semibold line-through text-black">
                                    {singleProduct?.oldPrice}
                                </span>
                            </div>
                            <button className="bg-green-600 mb-4 text-white text-[14px] font-bold py-3 px-1 rounded-[8px] w-[160px]">
                                Order on WhatsApp
                            </button>
                            <SpecialOfferCountdown />
                            <div className="flex flex-row items-center mt-4 gap-4">
                                <div className="flex flex-row p-[2px] items-center border-[1px] rounded-md">
                                    <button
                                        className="pl-2 pb-1 rounded-lg text-gray-500 text-3xl"
                                        onClick={() =>
                                            setAmount((prev) =>
                                                Math.max(prev - 1, 1)
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                    <span className="py-[1px] px-5 rounded-lg">
                                        {amount}
                                    </span>
                                    <button
                                        className="pr-2 pb-1 rounded-lg text-gray-500 text-3xl"
                                        onClick={() =>
                                            setAmount((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="bg-green-600 text-white text-[14px] font-bold py-3 px-8 rounded-[8px]
                                    h-full"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                                <button className="bg-black text-white text-[14px] font-bold py-3 px-8 rounded-[8px] h-full">
                                    Buy Now
                                </button>
                            </div>
                            <InfoCard />
                            <ProductActions
                                isInWishlist={isInWishlist}
                                handleWishlistClick={handleWishlistClick}
                            />
                        </>
                    )}
                </div>
            </div>
            <ProductDetails />
            {!loading && singleProduct && relatedProducts.length > 0 && (
                <RelatedProducts
                    relatedProducts={relatedProducts}
                    selectedIcon="grid"
                />
            )}
            <Footer />
        </>
    );
};

export default SingleProducts;
