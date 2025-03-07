'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const GradientText = ({ children, className = '', as = 'span' }: GradientTextProps) => {
    const Component = as;

    return (
        <Component
            className={`bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent ${className}`}
        >
            {children}
        </Component>
    );
};

export default GradientText; 