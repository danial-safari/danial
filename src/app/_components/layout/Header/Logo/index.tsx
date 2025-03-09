'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link
            href="/#hero"
            className="relative z-10 group min-w-48"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                        animate={{
                            rotate: isHovered ? 90 : 6,
                            scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    <motion.div
                        className="absolute inset-[2px] bg-background rounded-xl flex items-center justify-center"
                        animate={{
                            rotate: isHovered ? 90 : 6,
                            scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            DS
                        </span>
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.span
                        className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            width: isHovered ? 'auto' : 0,
                            x: isHovered ? 0 : -20,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            staggerChildren: 0.05
                        }}
                    >
                        Danial
                    </motion.span>
                </div>
            </div>
        </Link>
    );
};

export default Logo; 