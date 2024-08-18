import React from "react";
import Product from "../../Home/_components/Products/_components/Product";

const RelatedProducts = ({ relatedProducts, selectedIcon }) => {
    const limitedRelatedProducts = relatedProducts.slice(0, 6);
    return (
        <div className="mt-8 xs:px-40 px-20 mb-10">
            <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
                {limitedRelatedProducts.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        selectedIcon={selectedIcon}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
