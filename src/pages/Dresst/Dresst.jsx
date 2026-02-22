import React from 'react';
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const Dresst = ({ singleDress }) => {
    const { name, image, price, rating, review } = singleDress;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border p-6">

                <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                    <img
                        className='h-[180px] object-contain'
                        src={image}
                        alt={name}
                    />
                </figure>

                <div className="card-body">

                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    {/* Price */}
                    <p className="text-lg font-semibold text-green-600">
                        ৳ {price}
                    </p>

                    {/* Review & Rating */}
                    <div className="card-actions justify-between items-center">

                        {/* Left Side - Review */}
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            💬 <span>{review} Reviews</span>
                        </div>

                        {/* Right Side - Rating */}
                        <div className="flex items-center gap-1">
                            {
                                [...Array(5)].map((_, index) => (
                                    <span key={index}>
                                        {index < Math.round(rating) ? "⭐" : "☆"}
                                    </span>
                                ))
                            }
                            <span className="ml-2 text-sm">({rating})</span>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="mt-4 flex gap-3">
                        {/* Add to Cart */}
                        <button className="btn btn-outline w-1/2 gap-2 hover:scale-105 transition-all duration-300">
                            <FaShoppingCart className="text-sm" />
                            Add to Cart
                        </button>

                        {/* Buy Now */}
                        <button className="btn btn-primary w-1/2 gap-2 shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                            <FaBolt className="text-sm" />
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dresst;
