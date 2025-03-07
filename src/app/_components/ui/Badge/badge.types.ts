import { ReactNode } from "react";

export type BadgeProps = {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'outline' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    animate?: boolean;
}