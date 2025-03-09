"use client"; // Ensure React hooks work

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent hash links from auto-scrolling on initial page load
    useEffect(() => {
        // Check if the page loaded with a hash in the URL
        if (window.location.hash) {
            // If there's a hash, prevent the default scroll behavior
            // by setting the hash to empty temporarily
            const hash = window.location.hash;
            window.location.hash = '';
            
            // Optional: Restore the hash after a brief delay without scrolling
            setTimeout(() => {
                history.replaceState(null, null, hash);
            }, 100);
        }
    }, []);
    return (
        <header>
            <nav className="flex items-center p-4 md:p-8 justify-between">
                <img src="media/payetonlogo.png" alt="Logo" width="160px" height="auto" className="z-10"/>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-10">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white text-2xl focus:outline-none"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex gap-[40px] items-center font-medium text-lg text-white">
                        <li>
                            <a href="#" className="hover:border-b-2 border-[#16B900] pb-1">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:border-b-2 border-[#16B900] pb-1">About</a>
                        </li>
                        <li>
                            <a href="#gallery" className="hover:border-b-2 border-[#16B900] pb-1">Our Work & Reviews</a>
                        </li>
                        <li>
                            <a href="#" className="hover:border-b-2 border-[#16B900] pb-1">Contact</a>
                        </li>
                        <button className="border-2 border-[#16B900] bg-[#16B900] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                            View Services
                        </button>
                    </ul>
                </div>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed inset-0 bg-black bg-opacity-90 z-0 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <ul className="flex flex-col gap-6 items-center font-medium text-xl text-white">
                            <li>
                                <a href="#" className="hover:text-[#16B900]" onClick={toggleMenu}>Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#16B900]" onClick={toggleMenu}>About</a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-[#16B900]" onClick={toggleMenu}>Our Work & Reviews</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#16B900]" onClick={toggleMenu}>Contact</a>
                            </li>
                            <li>
                                <button className="border-2 border-[#16B900] bg-[#16B900] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer mt-4">
                                    View Services
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}