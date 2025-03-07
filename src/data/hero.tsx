'use client';

import { ReactNode } from 'react';

export interface IconConfig {
    icon: ReactNode;
    position: string;
}

export const heroIcons: IconConfig[] = [
    // Code Icon
    {
        icon: (
            <svg
                className="w-8 h-8 text-primary group-hover:text-secondary transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
        position: "right-[15%] xl:right-[15%] top-[30%]"
    },
    // Design Icon
    {
        icon: (
            <svg
                className="w-8 h-8 text-secondary group-hover:text-primary transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
            </svg>
        ),
        position: "left-[15%] xl:left-[15%] top-[30%]"
    },
    // Performance Icon
    {
        icon: (
            <svg
                className="w-8 h-8 text-primary group-hover:text-secondary transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
        position: "left-[20%] xl:left-[15%] bottom-[25%]"
    },
    // Innovation Icon
    {
        icon: (
            <svg
                className="w-8 h-8 text-secondary group-hover:text-primary transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        ),
        position: "right-[20%] xl:right-[15%] bottom-[25%]"
    }
]; 