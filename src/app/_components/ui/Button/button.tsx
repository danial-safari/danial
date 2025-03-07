'use client';

import { motion } from 'framer-motion';
import { ButtonProps } from './button.types';

export const Button = ({ children, variant = 'primary', href, onClick, className = '', size = 'md' }: ButtonProps) => {
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3 text-lg'
    };

    const baseStyles = `
        relative 
        font-medium 
        rounded-lg 
        transition-all 
        duration-200 
        flex 
        items-center 
        justify-center 
        gap-2 
        ${sizeStyles[size]}
    `;

    const variants = {
        primary: `
            bg-primary 
            hover:bg-primary/90 
            active:bg-primary/80 
            text-primary-foreground 
            shadow-lg 
            shadow-primary/20 
            hover:shadow-xl 
            hover:shadow-primary/30 
            hover:-translate-y-0.5 
            active:translate-y-0 
            font-medium
        `,
        secondary: `
            bg-secondary
            hover:bg-secondary/80
            active:bg-secondary/90
            text-secondary-foreground
            shadow-lg
            shadow-secondary/10
            hover:shadow-xl
            hover:-translate-y-0.5
            active:translate-y-0
            font-medium
        `,
        outline: `
            bg-transparent
            border-2
            border-primary
            hover:bg-primary/10
            text-primary
            hover:text-primary-foreground
            hover:-translate-y-0.5
            active:translate-y-0
            font-medium
        `,
        text: `
            bg-transparent
            text-foreground/80
            hover:text-foreground
            hover:bg-foreground/10
            hover:-translate-y-0.5
            active:translate-y-0
            font-medium
        `
    };

    const content = (
        <>
            <span className="relative z-10 flex gap-2 items-center">{children}</span>
            <motion.div
                className="absolute inset-0 w-full h-full bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={false}
            />
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`group ${baseStyles} ${variants[variant]} ${className}`}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`group ${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </button>
    );
};

