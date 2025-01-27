import React from 'react';

const Hero = () => {


    return (
        <section
            id="hero"
            className="h-[75vh] bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: `url("img/hero.jpg")`,
            }}
        >
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-overlay bg-opacity-50"></div>

            {/* Hero content */}
            <div className="relative text-center text-text flex flex-col items-center px-4 max-w-2xl">
                <p className="text-lg font-medium mb-4 text-primary">Start Your Fitness Journey</p>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Your Fitness Journey Begins!
                </h1>
                <p className="text-sm md:text-lg italic mb-8">
                    “The body achieves what the mind believes.”
                </p>
                <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
