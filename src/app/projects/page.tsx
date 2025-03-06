'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../_components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe',
        image: '/images/projects/ecommerce.jpg',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
        link: '/projects/ecommerce',
    },
    {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'Real-time social media analytics dashboard',
        image: '/images/projects/dashboard.jpg',
        tags: ['React', 'Firebase', 'D3.js', 'Material-UI'],
        link: '/projects/dashboard',
    },
    {
        id: 3,
        title: '3D Product Configurator',
        description: 'Interactive 3D product customization tool',
        image: '/images/projects/configurator.jpg',
        tags: ['Three.js', 'React Three Fiber', 'WebGL', 'GSAP'],
        link: '/projects/configurator',
    },
    // Add more projects here
];

// Get unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredProjects = selectedTag
        ? projects.filter(project => project.tags.includes(selectedTag))
        : projects;

    return (
        <main className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my portfolio of web development projects, featuring modern technologies
                        and interactive experiences.
                    </p>
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedTag
                                ? 'bg-primary text-white'
                                : 'bg-background/50 text-gray-400 hover:text-white'
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-primary text-white'
                                    : 'bg-background/50 text-gray-400 hover:text-white'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
} 