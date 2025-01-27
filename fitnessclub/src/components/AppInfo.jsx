import React from 'react';

const AppInfo = () => {
    return (
        <section className="py-4 bg-background">
            <div className="container mx-auto">
                <div
                    className="text-white py-10 sm:min-h-[300px] sm:flex sm:justify-end sm:items-center md:rounded-xl"
                    style={{
                        backgroundImage: "url('/img/our-app.jpg')",
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div>
                        <div className="space-y-6 max-w-xl mx-auto text-center">
                            <h1 className="text-2xl sm:text-4xl font-semibold font-serif">
                                Get Started with our app
                            </h1>
                            <p className="sm:px-20">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?
                            </p>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                {/* Play Store Button */}
                                <a href="#">
                                    <img
                                        src="/img/play_store.png"
                                        alt="Download on Play Store"
                                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    />
                                </a>
                                {/* App Store Button */}
                                <a href="#">
                                    <img
                                        src="/img/app_store.png"
                                        alt="Download on App Store"
                                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppInfo;
