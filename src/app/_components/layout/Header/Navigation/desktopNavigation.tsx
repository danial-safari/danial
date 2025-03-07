'use client';

import { motion } from 'framer-motion';
import ThemeSwitcher from '@/app/_components/common/ThemeSwitcher';
import NavLink from './navLink';
import Logo from '../Logo';
import { DesktopNavigationProps } from '../header.types';
import { CallToAction } from '../CTA';

export const DesktopNavigation = ({ isScrolled, activeSection, navLinks }: DesktopNavigationProps) => {
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
                md:block
                hidden
                ${isScrolled ? 'bg-background/60 backdrop-blur-xl' : ''}
            `}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <nav className="container mx-auto px-4 h-20 relative">
                <div className="flex items-center justify-between h-full">
                    <Logo />
                    <motion.div
                        className="relative flex items-center rounded-full p-1.5 backdrop-blur-sm"
                        initial={false}
                        animate={{
                            backgroundColor: isScrolled ? "rgba(var(--foreground-rgb), 0.05)" : "rgba(var(--foreground-rgb), 0)"
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                isActive={activeSection === link.href.substring(1)}
                            />
                        ))}
                    </motion.div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-4 ml-4">
                            <CallToAction />
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-md" />
                                <ThemeSwitcher />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </nav>
            {isScrolled && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.header>
    );
};

export default DesktopNavigation; 