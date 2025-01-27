import React from 'react';

const Info = () => {
    return (
        <section className="bg-background py-14">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-cardBackground py-8 px-6 rounded-lg">
                    {/* Text Content */}
                    <div className="col-span-2 space-y-3">
                        <h1 className="text-3xl sm:text-4xl font-bold text-text">
                            <span className="text-primary">Sweat now, shine later.</span> Your body is a reflection of your lifestyle choices.
                        </h1>
                    </div>

                    {/* Contact Button */}
                    <div className="sm:grid sm:place-items-center">
                        <a
                            href="#"
                            className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-secondary duration-200 tracking-widest uppercase rounded-lg"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
