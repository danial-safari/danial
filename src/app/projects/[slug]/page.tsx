'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Project, ProjectStatus } from '@/app/_components/ProjectStatus/types';
import { getStatusColor, getPriorityColor } from '@/app/_components/ProjectStatus/utils/styles';

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

// This would typically come from your API or database
const getProject = async (slug: string): Promise<Project | null> => {
    // Mock data - replace with actual data fetching
    const projects: Project[] = [
        {
            id: '1',
            title: 'Website Redesign',
            description: 'Complete overhaul of the company website with modern design principles and improved user experience.',
            status: 'In Progress',
            startDate: '2024-03-01',
            estimatedEndDate: '2024-04-15',
            progress: 60,
            priority: 'High',
            team: [
                { name: 'John Doe', role: 'Lead Designer' },
                { name: 'Jane Smith', role: 'Developer' },
            ],
            slug: 'website-redesign',
            logo: '/projects/website-redesign.png',
        },
        // Add more projects as needed
    ];

    return projects.find(p => p.slug === slug) || null;
};

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Project Header */}
                    <div className="flex items-start gap-6 mb-8">
                        <div className="w-24 h-24 flex-shrink-0">
                            {project.logo ? (
                                <Image
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    width={96}
                                    height={96}
                                    className="rounded-xl object-cover"
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="text-4xl font-semibold text-primary">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                            <p className="text-lg text-muted-foreground mb-4">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                {project.priority && (
                                    <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(project.priority)}`}>
                                        {project.priority} Priority
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Progress Section */}
                        <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-foreground/10">
                            <h2 className="text-xl font-semibold mb-4">Progress</h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Completion</span>
                                        <span className="font-medium">{project.progress}%</span>
                                    </div>
                                    <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-500"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-foreground/10">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Start Date</p>
                                            <p className="font-medium">
                                                {new Date(project.startDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">End Date</p>
                                            <p className="font-medium">
                                                {new Date(project.estimatedEndDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Section */}
                        <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-foreground/10">
                            <h2 className="text-xl font-semibold mb-4">Team Members</h2>
                            <div className="space-y-4">
                                {project.team?.map((member) => (
                                    <div
                                        key={member.name}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-lg font-medium text-primary">
                                                {member.name[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-sm text-muted-foreground">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 