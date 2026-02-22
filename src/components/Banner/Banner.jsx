import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dress1 from "../../assets/dop.webp";
import dress2 from "../../assets/shirt-99.jpg";
import dress3 from "../../assets/hoodie-999.jpg";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      swipeable
      emulateTouch
    >
      {/* Slide 1 */}
      <div className="relative">
        <img
          src={dress1}
          alt="Fashion Dress"
          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="text-white px-6 md:px-12 max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Discover Your Perfect Dress
            </h1>
            <p className="text-sm md:text-lg mb-6">
              Explore our latest fashion collection designed for modern style.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative">
        <img
          src={dress2}
          alt="Trendy Fashion"
          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="text-white px-6 md:px-12 max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              New Arrival Fashion
            </h1>
            <p className="text-sm md:text-lg mb-6">
              Premium quality dresses with elegant design.
            </p>
            <button className="btn btn-secondary">Explore Now</button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative">
        <img
          src={dress3}
          alt="Stylish Outfit"
          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="text-white px-6 md:px-12 max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Style That Speaks
            </h1>
            <p className="text-sm md:text-lg mb-6">
              Upgrade your wardrobe with our trending outfits.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;