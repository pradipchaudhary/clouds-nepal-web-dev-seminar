import React from 'react';

const Card = ({ title, price, duration }) => {
    return (
        <div className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-cardBackground  duration-300 text-text rounded-lg group">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h1 className="text-center text-4xl font-semibold text-primary">{price}</h1>
            <p>Monthly access to fitness area.</p>
            <p>Training sessions on demand.</p>
            <p>Personal trainer on demand.</p>
            <p>Live classes on demand.</p>
            <p className="font-semibold text-2xl">Duration: {duration}</p>
            <a
                href="#"
                className="primary-btn mt-4 group-hover:scale-105 duration-200 inline-block bg-primary text-white px-6 py-2 rounded-lg"
            >
                Learn more
            </a>
        </div>
    );
};

const Prices = () => {
    return (
        <section className="bg-background py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container mx-auto">
                {/* Header */}
                <div className="pb-12">
                    <h1 className="text-text text-3xl font-bold text-center sm:text-4xl">
                        Why <span className="text-primary">Choose</span> Us
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                    <Card title="Gold Card" price="$499" duration="12 months" />
                    <Card title="Flexible Card" price="$899" duration="12 months" />
                    <Card title="Platinum Card" price="$1299" duration="12 months" />
                </div>
            </div>
        </section>
    );
};

export default Prices;
