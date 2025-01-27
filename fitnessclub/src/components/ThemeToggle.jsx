import React, { useState, useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";




const ThemeToggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button
            onClick={toggleTheme}
            className=' text-text text-lg w-10 h-10 flex items-center justify-center'>
            {
                theme === 'dark'
                    ?
                    <MdLightMode />
                    :
                    <MdDarkMode />
            }
        </button>
    )
}

export default ThemeToggle