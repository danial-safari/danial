'use client';
import { motion } from 'framer-motion';
import { NavLinkProps } from '../header.types';

export const NavLink = ({ href, label, icon, isActive, isMobile = false }: NavLinkProps) => {
    if (isMobile) {
        return (
            <motion.a
                href={href}
                className="relative flex flex-col items-center justify-center w-16 h-16 text-xs"
                whileTap={{ scale: 0.95 }}
            >
                <div
                    className={`
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        gap-1
                        transition-colors
                        duration-200
                        ${isActive ? 'text-primary' : 'text-muted-foreground'}
                    `}
                >
                    {/* Icon */}
                    <div className="relative">
                        {isActive && (
                            <motion.div
                                layoutId="navbar-active-mobile"
                                className="absolute inset-[-4px] bg-primary/10 rounded-full"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }}
                            />
                        )}
                        <div className="relative z-10">
                            {icon}
                        </div>
                    </div>

                    {/* Label */}
                    <span className="font-medium">{label}</span>
                </div>
            </motion.a>
        );
    }

    return (
        <motion.a
            href={href}
            className={`
                relative 
                px-4 
                py-1.5 
                text-sm 
                font-medium 
                rounded-full
                transition-colors 
                duration-300
                ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
            `}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
        >
            {isActive && (
                <motion.div
                    layoutId="navbar-active-desktop"
                    className="absolute inset-0 bg-foreground/10 rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                />
            )}
            <span className="relative z-10">{label}</span>
        </motion.a>
    );
};

export default NavLink;