import React from "react";
import { FaCheck } from "react-icons/fa";
import { Range, getTrackBackground } from "react-range";

const categories = [
    "Fruits & Vegetables",
    "Baby & Pregnancy",
    "Beverages",
    "Meats & Seafood",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Grocery & Staples",
    "Healthcare",
    "Household Needs",
];

const colors = ["Green"];
const brands = ["Fresh"];
const statuses = ["In Stock", "On Sale"];

const MIN = 0;
const MAX = 100;

const ProductFilter = ({
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    setSelectedColors,
    selectedBrands,
    setSelectedBrands,
    selectedStatuses,
    setSelectedStatuses,
    priceRange,
    setPriceRange,
}) => {
    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleColorClick = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((item) => item !== color)
                : [...prev, color]
        );
    };

    const handleBrandClick = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((item) => item !== brand)
                : [...prev, brand]
        );
    };

    const handleStatusClick = (status) => {
        setSelectedStatuses((prev) =>
            prev.includes(status)
                ? prev.filter((item) => item !== status)
                : [...prev, status]
        );
    };

    const handleSliderChange = (values) => {
        setPriceRange(values);
    };

    return (
        <div className="space-y-4 min-w-[250px] rounded-md">
            <div>
                <h3 className="font-semibold text-[14px] pb-3">
                    Widget price filter
                </h3>
                <div className="flex justify-between space-x-2">
                    <div className="max-w-[116px]">
                        <h3 className="text-[12px] font-medium text-gray-400 pb-1">
                            Min Price
                        </h3>
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) =>
                                handleSliderChange([
                                    +e.target.value,
                                    priceRange[1],
                                ])
                            }
                            className="w-full px-2 py-1 border rounded-md"
                            min="0"
                        />
                    </div>
                    <div className="flex pt-5 font-bold items-center">-</div>
                    <div className="w-[116px]">
                        <h3 className="text-[12px] font-medium text-gray-400 pb-1">
                            Max Price
                        </h3>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) =>
                                handleSliderChange([
                                    priceRange[0],
                                    +e.target.value,
                                ])
                            }
                            className="w-full px-2 py-1 p-2 border rounded-md"
                            min={priceRange[0]}
                        />
                    </div>
                </div>
                <Range
                    values={priceRange}
                    step={1}
                    min={MIN}
                    max={MAX}
                    onChange={handleSliderChange}
                    renderTrack={({ props, children }) => {
                        const { key, ...restProps } = props; // Destructure key out of props
                        return (
                            <div
                                {...restProps} // Spread the remaining props
                                className="h-1 w-full rounded-lg my-6"
                                style={{
                                    background: getTrackBackground({
                                        values: priceRange,
                                        colors: ["#ccc", "#000000", "#ccc"],
                                        min: MIN,
                                        max: MAX,
                                    }),
                                }}
                            >
                                {React.Children.map(children, (child, index) =>
                                    React.cloneElement(child, { key: index })
                                )}
                            </div>
                        );
                    }}
                    renderThumb={({ props }) => {
                        const { key, ...restProps } = props; // Destructure key out of props
                        return (
                            <div
                                {...restProps} // Spread the remaining props
                                className="h-4 w-4 bg-black rounded-full cursor-pointer"
                            />
                        );
                    }}
                />
                <div className="flex items-center justify-between mt-2 pb-5 border-b">
                    <span className="text-[14px] font-medium">
                        Price: ${priceRange[0]} — ${priceRange[1]}
                    </span>
                    <button className="px-3 text-[14px] font-semibold py-1 bg-gray-200 rounded-md">
                        Filter
                    </button>
                </div>
            </div>

            <div className=" border-b pb-4">
                <h3 className="font-semibold text-[14px] mb-3">
                    Product Categories
                </h3>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className="flex items-center cursor-pointer space-x-2"
                        >
                            <div
                                className={`w-4 h-4 border ${
                                    selectedCategories.includes(category)
                                        ? "bg-purple-500"
                                        : "bg-white"
                                } rounded-md flex items-center justify-center`}
                            >
                                {selectedCategories.includes(category) && (
                                    <FaCheck className="text-white text-sm" />
                                )}
                            </div>
                            <span className="text-[14px] font-medium">
                                {category}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-b pb-4">
                <h3 className="font-semibold text-[14px] mb-3">
                    Filter by Color
                </h3>
                <ul className="space-y-2">
                    {colors.map((color) => (
                        <li
                            key={color}
                            onClick={() => handleColorClick(color)}
                            className="flex items-center cursor-pointer space-x-2"
                        >
                            <div
                                className={`w-4 h-4 border ${
                                    selectedColors.includes(color)
                                        ? "bg-green-500"
                                        : "bg-white"
                                } rounded-md flex items-center justify-center`}
                            >
                                {selectedColors.includes(color) && (
                                    <FaCheck className="text-white text-sm" />
                                )}
                            </div>
                            <span className="text-[14px] font-medium">
                                {color}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-b pb-4">
                <h3 className="font-semibold text-[14px] mb-3">
                    Filter by Brands
                </h3>
                <ul className="space-y-2">
                    {brands.map((brand) => (
                        <li
                            key={brand}
                            onClick={() => handleBrandClick(brand)}
                            className="flex items-center cursor-pointer space-x-2"
                        >
                            <div
                                className={`w-4 h-4 border ${
                                    selectedBrands.includes(brand)
                                        ? "bg-green-500"
                                        : "bg-white"
                                } rounded-md flex items-center justify-center`}
                            >
                                {selectedBrands.includes(brand) && (
                                    <FaCheck className="text-white text-sm" />
                                )}
                            </div>
                            <span className="text-[14px] font-medium">
                                {brand}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-b pb-4">
                <h3 className="font-semibold text-[14px] mb-3">
                    Product Status
                </h3>
                <ul className="space-y-2">
                    {statuses.map((status) => (
                        <li
                            key={status}
                            onClick={() => handleStatusClick(status)}
                            className="flex items-center cursor-pointer space-x-2"
                        >
                            <div
                                className={`w-4 h-4 border ${
                                    selectedStatuses.includes(status)
                                        ? "bg-green-500"
                                        : "bg-white"
                                } rounded-md flex items-center justify-center`}
                            >
                                {selectedStatuses.includes(status) && (
                                    <FaCheck className="text-white text-sm" />
                                )}
                            </div>
                            <span className="text-[14px] font-medium">
                                {status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductFilter;
