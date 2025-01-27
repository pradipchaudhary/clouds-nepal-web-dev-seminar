import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        message: "This service is amazing! It helped us achieve great results.",
        image: "https://picsum.photos/102/102"
    },
    {
        id: 2,
        name: "Jane Smith",
        message: "Absolutely outstanding! Highly recommend to everyone.",
        image: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Chris Brown",
        message: "A game-changer in our industry!",
        image: "https://picsum.photos/102/102"
    },
    {
        id: 4,
        name: "Emily Davis",
        message: "I love how intuitive and helpful this platform is!",
        image: "https://picsum.photos/102/102"
    },
    {
        id: 5,
        name: "Michael Scott",
        message: "Best service we've ever used. Highly recommend!",
        image: "https://picsum.photos/102/102"
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at once
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on small screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time on tablets
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="bg-background text-text py-8">
            <div className="container mx-auto  py-10">
                <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
                <Slider {...settings} className="gap-slider">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-6 bg-cardBackground rounded-lg shadow-md mx-2 min-h-[260px]">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full mb-6 w-20 h-20 object-cover"
                            />
                            <p className="italic">"{testimonial.message}"</p>
                            <h3 className="text-xl text-primary mt-4 font-semibold mb-2">{testimonial.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
