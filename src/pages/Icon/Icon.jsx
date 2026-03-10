import React from "react";
import {
    FaRegCalendarCheck,
    FaBoxOpen,
    FaTruck,
    FaShippingFast,
} from "react-icons/fa";

const steps = [
    { icon: <FaRegCalendarCheck />, title: "Booking", delay: "0s" },
    { icon: <FaBoxOpen />, title: "Packing", delay: "0.2s" },
    { icon: <FaTruck />, title: "Transportation", delay: "0.4s" },
    { icon: <FaShippingFast />, title: "Delivery", delay: "0.6s" },
];

const Icon = () => {
    return (
        <div className="w-full py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                Our Working Process
            </h2>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-5xl mx-auto">

                {/* line (only desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -z-10"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">

                        <div
                            style={{ animationDelay: step.delay }}
                            className="w-24 h-24 border border-black rounded-full flex items-center justify-center bg-white text-3xl animate-bounce"
                        >
                            {step.icon}
                        </div>

                        <p className="mt-3 font-semibold">{step.title}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Icon;