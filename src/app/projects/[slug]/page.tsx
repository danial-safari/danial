'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const projects = [
    {
        id: 1,
        slug: 'ecommerce',
        title: 'E-commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe',
        fullDescription: `
      This e-commerce platform provides a seamless shopping experience with features like:
      • Real-time inventory management
      • Secure payment processing with Stripe
      • Responsive design for all devices
      • Advanced search and filtering
      • User authentication and profiles
      • Order tracking and history
    `,
        image: '/images/projects/ecommerce.jpg',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
        technologies: [
            { name: 'Next.js', description: 'For server-side rendering and optimal performance' },
            { name: 'TypeScript', description: 'Ensuring type safety and better development experience' },
            { name: 'Stripe', description: 'Secure payment processing and subscription management' },
            { name: 'Tailwind CSS', description: 'Rapid UI development with utility-first CSS' },
        ],
        liveUrl: 'https://example.com/ecommerce',
        githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    // Add more detailed project data here
];

export default function ProjectPage() {
    const params = useParams();
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/projects" className="text-primary hover:text-primary/80">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen py-20 px-4 relative">
          
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Projects
                    </Link>

                    {/* Project Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                            <p className="text-gray-400 mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full bg-primary hover:bg-primary/80 text-white font-medium transition-colors"
                                >
                                    View Live
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                            >
                                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                                <div className="prose prose-invert max-w-none">
                                    {project.fullDescription.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                            >
                                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                                <div className="space-y-6">
                                    {project.technologies.map((tech) => (
                                        <div key={tech.name}>
                                            <h3 className="text-lg font-semibold text-primary mb-2">
                                                {tech.name}
                                            </h3>
                                            <p className="text-gray-400">{tech.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
} 