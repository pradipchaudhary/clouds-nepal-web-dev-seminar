import React from 'react';

const AboutTwo = () => {
    return (
        <section className="py-8 md:py-14 bg-cardBackground duration-300">
            <div className="container mx-auto md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
                    {/* Text Section */}
                    <div className="text-text">
                        <div className="space-y-5 sm:py-10">
                            {/* Title Section */}
                            <div className="flex items-center gap-4">
                                <div className="text-primary text-6xl font-bold">01</div>
                                <div>
                                    <p className="text-primary uppercase text-sm">Global Fitness</p>
                                    <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="leading-8 tracking-wide text-sm sm:text-base">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                                magnam! Tenetur odio quo et maxime?
                            </p>
                            <p className="leading-8 tracking-wide text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                                tempora.
                            </p>

                            {/* Button */}
                            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="/img/about-1.png"
                            alt="About Us"
                            className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutTwo;
