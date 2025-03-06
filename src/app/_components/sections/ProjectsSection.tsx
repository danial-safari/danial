'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
    const projects = [
        {
            title: "Modern E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory, AI-powered recommendations, and seamless payment integration.",
            image: "/images/projects/ecommerce.jpg",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
            link: "#",
            github: "https://github.com/yourusername/ecommerce",
            featured: true
        },
        {
            title: "AI Content Generator",
            description: "An AI-powered platform that generates high-quality content using advanced language models and machine learning algorithms.",
            image: "/images/projects/configurator.jpg",
            tags: ["React", "Python", "TensorFlow", "OpenAI", "MongoDB"],
            link: "#",
            github: "https://github.com/yourusername/ai-generator",
            featured: true
        },
        {
            title: "Real-time Analytics Dashboard",
            description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and predictive analytics.",
            image: "/images/projects/dashboard.jpg",
            tags: ["Vue.js", "D3.js", "Node.js", "WebSocket", "Redis"],
            link: "#",
            github: "https://github.com/yourusername/analytics",
            featured: true
        }
    ];

    return (
        <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]" />

            {/* Content Container */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6"
                    >
                        <span className="text-sm font-medium text-primary">Featured Work</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4"
                    >
                        Latest Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Explore my recent work showcasing innovative solutions and creative development
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="relative flex flex-col h-full bg-gradient-to-b from-background/80 to-background rounded-3xl overflow-hidden backdrop-blur-xl border border-foreground/[0.08] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-[-1px] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-sm" />
                                    <div className="absolute inset-[-1px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl animate-gradient-xy" />
                                </div>

                                {/* Project Image */}
                                <div className="relative h-52 overflow-hidden p-4 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-80" />
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="relative flex flex-col flex-grow p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold transition-colors duration-500 group-hover:text-primary">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-muted-foreground/80 text-sm line-clamp-2 transition-colors duration-500 group-hover:text-muted-foreground">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/5 text-primary/70 border border-primary/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/5 text-primary/70 border border-primary/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Link */}
                                    <div className="mt-6 pt-6 border-t border-foreground/[0.08] flex items-center justify-between">
                                        <Link
                                            href={project.link}
                                            className="inline-flex items-center text-sm font-medium text-foreground/80 transition-all duration-500 group-hover:text-primary"
                                        >
                                            View Project
                                            <svg
                                                className="w-4 h-4 ml-2 transition-all duration-500 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/projects"
                        className="group inline-flex items-center px-6 py-3 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                    >
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                            View All Projects
                        </span>
                        <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;