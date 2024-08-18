import React, { useEffect, useState } from "react";
import { FaThLarge, FaList, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import backgroundImage from "../../../../../../assets/products_background.jpg";
import Product from "./Product";

const ProductList = ({
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    setSelectedColors,
    selectedBrands,
    setSelectedBrands,
    priceRange,
}) => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState("grid");
    const location = useLocation();

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search")?.toLowerCase() || "";

    const filteredProducts = products.filter((product) => {
        const productName = product.name?.toLowerCase() || "";
        const productCategories = product.category || [];
        const productBrand = product.brand?.toLowerCase() || "";

        const nameMatch = productName.includes(searchQuery);
        const categoryMatch = productCategories.some((cat) =>
            cat.toLowerCase().includes(searchQuery)
        );
        const brandMatch = productBrand.includes(searchQuery);

        const inCategory =
            selectedCategories.length === 0 ||
            selectedCategories.some((category) =>
                productCategories.includes(category)
            );
        const inColor =
            selectedColors.length === 0 ||
            selectedColors.includes(product.color);
        const inBrand =
            selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand);
        const priceValue =
            parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0;
        const inPriceRange =
            priceValue >= priceRange[0] && priceValue <= priceRange[1];

        return (
            (nameMatch || categoryMatch || brandMatch) &&
            inCategory &&
            inColor &&
            inBrand &&
            inPriceRange
        );
    });

    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleRemoveFilter = (filterType, value) => {
        switch (filterType) {
            case "category":
                setSelectedCategories((prev) =>
                    prev.filter((item) => item !== value)
                );
                break;
            case "color":
                setSelectedColors((prev) =>
                    prev.filter((item) => item !== value)
                );
                break;
            case "brand":
                setSelectedBrands((prev) =>
                    prev.filter((item) => item !== value)
                );
                break;
            default:
                break;
        }
    };
    //icons bg manager
    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    const handleClearAll = () => {
        setSelectedCategories([]);
        setSelectedColors([]);
        setSelectedBrands([]);
    };
    return (
        <div
            className={`flex ${
                selectedCategories.length > 0 ||
                selectedColors.length > 0 ||
                selectedBrands.length > 0
                    ? "mt-0"
                    : "mt-6"
            } flex-col pl-5 w-[906px]`}
        >
            {/* Display Selected Filters */}
            {(selectedCategories.length > 0 ||
                selectedColors.length > 0 ||
                selectedBrands.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-2">
                    <button
                        onClick={handleClearAll}
                        className="flex items-center text-gray-700 rounded-md text-xs font-bold"
                    >
                        Clear filters <FaTimes className="ml-1" />
                    </button>
                    {selectedCategories.map((category) => (
                        <div
                            key={category}
                            className="flex items-center  text-gray-500 font-medium rounded-md text-xs"
                        >
                            <span>{category}</span>
                            <FaTimes
                                className="ml-1 cursor-pointer"
                                onClick={() =>
                                    handleRemoveFilter("category", category)
                                }
                            />
                        </div>
                    ))}
                    {selectedColors.map((color) => (
                        <div
                            key={color}
                            className="flex items-center text-gray-500 font-medium rounded-md text-xs"
                        >
                            <span>{color}</span>
                            <FaTimes
                                className="ml-1 cursor-pointer"
                                onClick={() =>
                                    handleRemoveFilter("color", color)
                                }
                            />
                        </div>
                    ))}
                    {selectedBrands.map((brand) => (
                        <div
                            key={brand}
                            className="flex items-center text-gray-500 font-medium rounded-md text-xs"
                        >
                            <span>{brand}</span>
                            <FaTimes
                                className="ml-1 cursor-pointer"
                                onClick={() =>
                                    handleRemoveFilter("brand", brand)
                                }
                            />
                        </div>
                    ))}
                </div>
            )}
            <div
                className={`relative flex items-center min-w-[850px] h-[270px] rounded-[6px] overflow-hidden bg-gray-50 py-12 sm:py-24`}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={backgroundImage}
                        alt="Groceries"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-left">
                        <span className="bg-orange-100 text-orange-800 text-[10px] rounded-[30px] font-bold px-2.5 py-1">
                            Only This Week
                        </span>
                        <h2 className="mt-4 text-[30px] leading-8 font-extrabold tracking-tight text-gray-900">
                            Grocery store with different <br />
                            treasures
                        </h2>
                        <p className="mt-4 max-w-2xl text-[13px] text-gray-500">
                            We have prepared special discounts for you on
                            grocery
                            <br />
                            products...
                        </p>
                        <div className="mt-4">
                            <a
                                href="/"
                                className="inline-block bg-white border border-gray-300 rounded-full text-[12px] py-[6px] px-3 font-bold text-gray-700 shadow-sm hover:bg-gray-50"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-2 justify-between py-[9px] px-3 bg-gray-100">
                <div className="text-gray-600 text-xs">
                    Showing all {filteredProducts.length} results
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="sort" className="text-gray-600 text-xs">
                            Sort:
                        </label>
                        <select
                            id="sort"
                            className="border font-medium border-gray-300 rounded px-[10px] py-1 text-xs"
                        >
                            <option value="latest">Sort by latest</option>
                            <option value="price">Sort by price</option>
                            <option value="rating">Sort by rating</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label
                            htmlFor="items"
                            className="text-gray-600 text-xs"
                        >
                            Show:
                        </label>
                        <select
                            id="items"
                            className="border font-medium text-xs border-gray-300 rounded px-[10px] py-1"
                        >
                            <option value="20">20 Items</option>
                            <option value="10">10 Items</option>
                            <option value="30">30 Items</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaThLarge
                            onClick={() => handleIconClick("grid")}
                            className={`cursor-pointer rounded-[6px] p-[6px] ${
                                selectedIcon === "grid"
                                    ? "bg-slate-200 "
                                    : " text-gray-600"
                            }`}
                            size={30}
                        />
                        <FaList
                            onClick={() => handleIconClick("list")}
                            className={`cursor-pointer rounded-[6px] p-[6px] ${
                                selectedIcon === "list"
                                    ? "bg-slate-200 "
                                    : " text-gray-600"
                            }`}
                            size={30}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${
                    selectedIcon === "grid"
                        ? "grid grid-cols-2 md:grid-cols-5 my-2"
                        : "flex flex-col my-2"
                }`}
            >
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        isInWishlist={wishlist.includes(product.id)}
                        onToggleWishlist={toggleWishlist}
                        selectedIcon={selectedIcon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
