'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './ui/Logo';
import Link from 'next/link';
import Button from './ui/Button';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) {
        return (
            <header className="h-20">
                <nav className="container mx-auto px-4 h-20">
                    <div className="flex items-center justify-between h-full">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                </nav>
            </header>
        );
    }

    return (
        <motion.header
            className={`
                fixed 
                top-0 
                left-0 
                right-0 
                z-50 
                transition-all 
                duration-300
                ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''}
            `}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <nav className="container mx-auto px-4 h-20">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/">
                        <Logo />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                            Projects
                        </a>
                        <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                            Skills
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Right Section: Let's Talk Button & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Let's Talk Button */}
                        <Button href="#contact" variant="primary" size="sm">
                            Let's Talk
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Button>

                        {/* Theme Switcher */}
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar; 