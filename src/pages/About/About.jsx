import React from 'react';
import image from '../../assets/hoodie-999.jpg';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">

            {/* Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Welcome to our fashion world! We provide high-quality and stylish clothing
                    for modern people who love comfort and elegance.
                </p>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Image with colorful border */}
                <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <div className="overflow-hidden rounded-2xl bg-white">
                        <img
                            src={image}
                            alt="About us"
                            className="rounded-2xl w-full transition duration-500 hover:scale-105 hover:-translate-y-2"
                        />
                    </div>
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Who We Are
                    </h2>

                    <p className="text-gray-600 mb-4">
                        We are a passionate fashion brand dedicated to bringing you the latest
                        trends in men's wear. Our mission is to combine quality, comfort,
                        and affordability in every product.
                    </p>

                    <p className="text-gray-600 mb-6">
                        From panjabi to t-shirts, we carefully select every item to ensure
                        you get the best style for every occasion.
                    </p>

                    <button className="btn btn-primary">
                        Explore Products
                    </button>
                </div>
            </div>

        </div>
    );
};

export default About;