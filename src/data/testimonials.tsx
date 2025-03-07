'use client';

import React, { ReactNode } from 'react';

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    icon: ReactNode;
}

export const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "Tech Innovations Inc.",
        image: "/images/testimonials/sarah.jpg",
        content: "Working with this developer was an absolute pleasure. Their technical expertise and attention to detail transformed our vision into a reality. The end product exceeded our expectations.",
        icon: (
            <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
        )
    },
    {
        name: "Michael Chen",
        role: "CTO",
        company: "Digital Solutions Ltd",
        image: "/images/testimonials/michael.jpg",
        content: "The developer's expertise in modern web technologies and best practices helped us create a scalable and maintainable application. Their problem-solving skills are exceptional.",
        icon: (
            <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        )
    },
    {
        name: "Emily Rodriguez",
        role: "Lead Designer",
        company: "Creative Studio",
        image: "/images/testimonials/emily.jpg",
        content: "Their ability to translate design requirements into pixel-perfect implementations is remarkable. The collaboration was smooth, and they brought valuable insights to improve the user experience.",
        icon: (
            <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        )
    },
    {
        name: "David Smith",
        role: "Startup Founder",
        company: "InnovateTech",
        image: "/images/testimonials/david.jpg",
        content: "As a startup founder, finding a developer who understands both technical and business needs is crucial. They delivered a high-quality product within our timeline and budget constraints.",
        icon: (
            <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        )
    }
]; 