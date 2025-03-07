'use client';
import { useState, useEffect } from 'react';
import { navLinks } from '@/data/header/navLinks';
import { Desktop, Mobile } from './Navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [showCTA, setShowCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            // Show CTA after scrolling down a bit
            setShowCTA(window.scrollY > 300);

            // Update active section based on scroll position
            const sections = ['about', 'projects', 'skills', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Desktop
                isScrolled={isScrolled}
                activeSection={activeSection}
                navLinks={navLinks}
            />
            <Mobile
                activeSection={activeSection}
                navLinks={navLinks}
                showCTA={showCTA}
            />
        </>
    );
};

export default Header; 