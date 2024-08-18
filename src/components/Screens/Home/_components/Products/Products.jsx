import React, { useState } from "react";
import ProductFilter from "./_components/ProductFilter";
import ProductList from "./_components/ProductList";

const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 30]);

    return (
        <div className="xs:px-40 px-20 flex justify-between mb-8">
            <ProductFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedStatuses={selectedStatuses}
                setSelectedStatuses={setSelectedStatuses}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
            <ProductList
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedStatuses={selectedStatuses}
                priceRange={priceRange}
            />
        </div>
    );
};

export default Products;
