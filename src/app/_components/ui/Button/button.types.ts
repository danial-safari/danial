import { ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}