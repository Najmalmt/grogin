import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState("description");

    // Dummy review data
    const reviews = [
        {
            user: "John Doe",
            rating: 4,
            comment: "Great product! Highly recommended.",
        },
        {
            user: "Jane Smith",
            rating: 3,
            comment:
                "Satisfactory performance, but there’s room for improvement.",
        },
    ];

    return (
        <div className="w-full xs:px-40 px-20 p-4">
            {/* Tabs */}
            <div className="border-b-2 border-gray-200 flex space-x-4">
                <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 px-4 text-sm font-medium ${
                        activeTab === "description"
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500"
                    }`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`pb-2 px-4 text-sm font-medium ${
                        activeTab === "reviews"
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500"
                    }`}
                >
                    Reviews ({reviews.length})
                </button>
            </div>

            {/* Content */}
            <div className="mt-4">
                {activeTab === "description" && (
                    <div>
                        <p>
                            Quisque varius diam vel metus mattis, id aliquam
                            diam rhoncus. Proin vitae magna in dui finibus
                            malesuada et at nulla. Morbi elit ex, viverra vitae
                            ante vel, blandit feugiat ligula. Fusce fermentum
                            iaculis nibh, at sodales leo maximus a. Nullam
                            ultricies sodales nunc, in pellentesque lorem mattis
                            quis. Cras imperdiet est in nunc tristique lacinia.
                            Nullam aliquam mauris eu accumsan tincidunt.
                            Suspendisse velit ex, aliquet vel ornare vel,
                            dignissim a tortor.
                        </p>
                        <p className="mt-2">
                            Morbi ut sapien vitae odio accumsan gravida. Morbi
                            vitae erat auctor, eleifend nunc a, lobortis neque.
                            Praesent aliquam dignissim viverra. Maecenas lacus
                            odio, feugiat eu nunc sit amet, maximus sagittis
                            dolor. Vivamus nisi sapien, elementum sit amet eros
                            sit amet, ultricies cursus ipsum. Sed consequat
                            luctus ligula. Curabitur laoreet rhoncus blandit.
                            Aenean vel diam ut arcu pharetra dignissim ut sed
                            leo. Vivamus faucibus, ipsum in vestibulum
                            vulputate, lorem orci convallis quam, sit amet
                            consequat nulla felis pharetra lacus. Duis semper
                            erat mauris, sed egestas purus commodo vel.
                        </p>
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div>
                        {reviews.map((review, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <FaUserCircle
                                        size={24}
                                        className="text-gray-500"
                                    />
                                    <span className="font-medium">
                                        {review.user}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`${
                                                i < review.rating
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
