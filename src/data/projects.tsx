'use client';

import React, { ReactNode } from 'react';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    github?: string;
    featured?: boolean;
    icon: ReactNode;
}

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and analytics dashboard.",
        technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
        image: "/images/projects/ecommerce.jpg",
        link: "https://ecommerce-platform.com",
        github: "https://github.com/username/ecommerce-platform",
        featured: true,
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
            </svg>
        )
    },
    {
        title: "AI Image Generator",
        description: "An AI-powered image generation tool using DALL-E API, featuring custom style transfer and image manipulation capabilities.",
        technologies: ["React", "Node.js", "OpenAI API", "Canvas API", "AWS"],
        image: "/images/projects/ai-generator.jpg",
        link: "https://ai-image-generator.com",
        github: "https://github.com/username/ai-image-generator",
        featured: true,
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
        title: "Real-time Chat App",
        description: "A scalable real-time chat application with end-to-end encryption, file sharing, and video calls.",
        technologies: ["React", "Socket.io", "WebRTC", "Redis", "MongoDB"],
        image: "/images/projects/chat-app.jpg",
        link: "https://realtime-chat.com",
        github: "https://github.com/username/realtime-chat",
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
        )
    },
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and animations.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/images/projects/portfolio.jpg",
        link: "https://portfolio-website.com",
        github: "https://github.com/username/portfolio",
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        )
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, custom workflows, and analytics.",
        technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Chart.js"],
        image: "/images/projects/task-app.jpg",
        link: "https://task-management.com",
        github: "https://github.com/username/task-management",
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
            </svg>
        )
    }
]; 