"use client"; // Ensure React hooks work

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiHeart, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle scroll detection for header transformation
    useEffect(() => {
        const handleScroll = () => {
            // Assuming hero section height is 100vh
            const heroHeight = window.innerHeight;
            setIsScrolled(window.scrollY >= heroHeight - 70);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    // Define animation variants
    const headerVariants = {
        top: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
            flexDirection: "row"
        },
        side: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "80px",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "2rem 0"
        }
    };

    const logoVariants = {
        top: { 
            rotate: 0,
            marginBottom: 0
        },
        side: { 
            rotate: 0,
            marginTop: "2rem",
            marginBottom: "3rem"
        }
    };

    const navVariants = {
        top: { 
            flexDirection: "row",
            alignItems: "center",
            gap: "40px"
        },
        side: { 
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem"
        }
    };

    const linkVariants = {
        top: { 
            display: "flex",
            fontSize: "lg"
        },
        side: { 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem"
        }
    };

    const textVariants = {
        top: { 
            display: "block",
            opacity: 1,
            fontSize: "lg"
        },
        side: { 
            display: "none",
            opacity: 0,
            fontSize: "xs"
        }
    };

    const iconVariants = {
        top: { 
            display: "none",
            opacity: 0
        },
        side: { 
            display: "flex",
            opacity: 1,
            background: "rgba(22, 185, 0, 0.1)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center"
        }
    };

    return (
        <motion.header 
            className="flex items-center justify-between p-4 md:p-8 w-full z-50 transition-all bg-transparent"
            initial="top"
            animate={isScrolled ? "side" : "top"}
            variants={headerVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.img 
                src="media/payetonlogo.png" 
                alt="Logo" 
                width="160" 
                height="auto" 
                className="z-10 max-w-[160px]"
                variants={logoVariants}
                transition={{ duration: 0.5 }}
            />
            
            <nav className="flex items-center">
                {/* Mobile Menu Button - Only visible in top position on mobile */}
                {!isScrolled && (
                    <div className="md:hidden z-10">
                        <button 
                            onClick={toggleMenu} 
                            className="text-white text-2xl focus:outline-none"
                        >
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                )}

                {/* Desktop/Side Navigation */}
                <motion.div 
                    className={`${isScrolled ? 'block' : 'hidden md:block'}`}
                    variants={navVariants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.ul 
                        className="flex font-medium text-white"
                        variants={navVariants}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                        <motion.li variants={linkVariants} transition={{ duration: 0.5 }}>
                            <motion.a href="#" className="hover:border-b-2 border-[#16B900] pb-1 flex flex-col items-center">
                                <motion.span 
                                    variants={iconVariants} 
                                    transition={{ duration: 0.3 }}
                                    className="text-xl text-[#16B900]"
                                >
                                    <FiHome />
                                </motion.span>
                                <motion.span 
                                    variants={textVariants} 
                                    transition={{ duration: 0.3 }}
                                >
                                    Home
                                </motion.span>
                            </motion.a>
                        </motion.li>
                        <motion.li variants={linkVariants} transition={{ duration: 0.5 }}>
                            <motion.a href="#about" className="hover:border-b-2 border-[#16B900] pb-1 flex flex-col items-center">
                                <motion.span 
                                    variants={iconVariants} 
                                    transition={{ duration: 0.3 }}
                                    className="text-xl text-[#16B900]"
                                >
                                    <FiInfo />
                                </motion.span>
                                <motion.span 
                                    variants={textVariants} 
                                    transition={{ duration: 0.3 }}
                                >
                                    About
                                </motion.span>
                            </motion.a>
                        </motion.li>
                        <motion.li variants={linkVariants} transition={{ duration: 0.5 }}>
                            <motion.a href="#gallery" className="hover:border-b-2 border-[#16B900] pb-1 flex flex-col items-center">
                                <motion.span 
                                    variants={iconVariants} 
                                    transition={{ duration: 0.3 }}
                                    className="text-xl text-[#16B900]"
                                >
                                    <FiHeart />
                                </motion.span>
                                <motion.span 
                                    variants={textVariants} 
                                    transition={{ duration: 0.3 }}
                                >
                                    Our Work & Reviews
                                </motion.span>
                            </motion.a>
                        </motion.li>
                        <motion.li variants={linkVariants} transition={{ duration: 0.5 }}>
                            <motion.a href="#" className="hover:border-b-2 border-[#16B900] pb-1 flex flex-col items-center">
                                <motion.span 
                                    variants={iconVariants} 
                                    transition={{ duration: 0.3 }}
                                    className="text-xl text-[#16B900]"
                                >
                                    <FiPhone />
                                </motion.span>
                                <motion.span 
                                    variants={textVariants} 
                                    transition={{ duration: 0.3 }}
                                >
                                    Contact
                                </motion.span>
                            </motion.a>
                        </motion.li>
                        {!isScrolled && (
                            <motion.li variants={linkVariants} transition={{ duration: 0.5 }}>
                                <button className="border-2 border-[#16B900] bg-[#16B900] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    View Services
                                </button>
                            </motion.li>
                        )}
                    </motion.ul>
                </motion.div>

                {/* Mobile Navigation Overlay - Only in top position */}
                {!isScrolled && (
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
                )}
            </nav>
        </motion.header>
    );
}