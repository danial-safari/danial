'use client';
import { motion } from 'framer-motion';
import { BadgeProps } from './Badge.types';

const Badge = ({
    children,
    className = '',
    variant = 'default',
    size = 'md',
    animate = false,
    ...props
}: BadgeProps) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-300';

    const sizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5'
    };

    const variantClasses = {
        default: 'bg-primary/10 text-primary rounded-full',
        outline: 'border border-primary/20 text-primary rounded-full hover:bg-primary/10',
        secondary: 'bg-secondary/10 text-secondary rounded-full'
    };

    const Component = animate ? motion.span : 'span';
    const animateProps = animate ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true }
    } : {};

    return (
        <Component
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${className}
            `}
            {...animateProps}
        >
            {children}
        </Component>
    );
};

export default Badge; 