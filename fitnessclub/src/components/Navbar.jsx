import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Logo from "./Logo"
import { RiMenu3Line } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";



function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Toggle mobile menu on button click
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <nav className="bg-background shadow-md relative z-10">
            <div className="container mx-auto flex justify-between items-center md:py-4">
                <div className='hidden md:flex items-center gap-2'>
                    <MdOutlinePhoneInTalk className='text-primary text-2xl' />
                    <p className='text-md text-text pt-1.5'> +977 000 000 00</p>
                </div>
                <Logo />
                <nav className='flex items-center md:gap-4 duration-300'>
                    <ul className='hidden md:flex gap-5 mt-1.5 uppercase font-semibold'>
                        <li><a href="#" className='text-text hover:text-primary duration-300'>Service </a></li>
                        <li><a href="#" className='text-text hover:text-primary duration-300'>About</a></li>
                        <li><a href="#" className='text-text hover:text-primary duration-300'>Join</a></li>
                    </ul>
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-text p-2 focus:outline-none h-16 flex items-center justify-center"
                    >
                        {isMobileMenuOpen ? <RiMenu2Line className='h-7 w-7' /> : <RiMenu3Line className='h-7 w-7' />}
                    </button>



                </nav>
                {/* Mobile Menu */}
                <nav
                    className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:hidden space-y-4 fixed bg-background w-[70%] h-full top-0 left-0 transation-all duration-300 py-8 px-8 flex justify-between flex-col`}
                >
                    <div>
                        <div class="flex items-center justify-start gap-3 mt-6">
                            <div className="h-12 w-12 bg-slate-500 rounded-full flex justify-center items-center ">
                                <FaUser className='w-8 h-8'></FaUser>
                            </div>
                            <div>
                                <h1 className='text-text'>Hello User</h1>
                                <h1 class="text-sm text-slate-500 ml-2.5">Premium user</h1>
                            </div>
                        </div>
                        <ul className='uppercase space-y-8 mt-10'>
                            <li><a href="#" className='text-text hover:text-primary duration-300'>Service</a></li>
                            <li><a href="#" className='text-text hover:text-primary duration-300'>About</a></li>
                            <li><a href="#" className='text-text hover:text-primary duration-300'>Join</a></li>
                        </ul>
                    </div>
                    <footer>
                        <p className='text-text'> Made with ❤ by Dilshad</p>
                    </footer>


                </nav>
            </div>
        </nav>
    );
}

export default Navbar;
