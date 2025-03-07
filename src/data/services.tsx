'use client';

import React, { ReactNode } from 'react';

export interface Service {
    title: string;
    description: string;
    features: string[];
    icon: ReactNode;
}

export const services: Service[] = [
    {
        title: "Web Development",
        description: "Building modern, responsive web applications with cutting-edge technologies and best practices.",
        features: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "Progressive Web Apps",
            "Performance Optimization",
            "SEO Implementation"
        ],
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        )
    },
    {
        title: "Mobile Development",
        description: "Creating cross-platform mobile applications that deliver exceptional user experiences.",
        features: [
            "React Native Apps",
            "iOS Development",
            "Android Development",
            "App Store Optimization",
            "Mobile UI/UX Design"
        ],
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
            </svg>
        )
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user interfaces that enhance user experience and satisfaction.",
        features: [
            "User Interface Design",
            "User Experience Design",
            "Wireframing & Prototyping",
            "Design Systems",
            "Usability Testing"
        ],
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
        title: "Cloud Solutions",
        description: "Implementing scalable cloud infrastructure and DevOps practices for optimal performance.",
        features: [
            "Cloud Architecture",
            "AWS/Azure Services",
            "DevOps Implementation",
            "CI/CD Pipelines",
            "Infrastructure as Code"
        ],
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
            </svg>
        )
    }
]; 