import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className="py-10 w-full bg-cardBackground text-text transition-colors duration-300">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                    {/* Logo and Social Icons */}
                    <div className="flex items-center justify-center gap-3">
                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            className="w-16"
                        />
                        <div>
                            <div className="flex items-center gap-3">
                                <a href="#" className="text-3xl hover:text-primary transition-colors duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-3xl hover:text-primary transition-colors duration-300">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-3xl hover:text-primary transition-colors duration-300">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:block text-center">
                        Contact us: +91 123456789
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center justify-center gap-8">
                            <li>
                                <a
                                    href="/#services"
                                    className="inline-block text-lg font-semibold hover:text-primary py-1 transition-colors duration-300"
                                >
                                    SERVICES
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#about"
                                    className="inline-block text-lg font-semibold hover:text-primary py-1 transition-colors duration-300"
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#join"
                                    className="inline-block text-lg font-semibold hover:text-primary py-1 transition-colors duration-300"
                                >
                                    JOIN
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
