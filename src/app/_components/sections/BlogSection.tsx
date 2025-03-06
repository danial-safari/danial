'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
    {
        title: "Building Modern Web Applications with Next.js 14",
        excerpt: "Explore the latest features and best practices for building performant web applications using Next.js 14 and React Server Components.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Development",
        image: "/images/blog/3d-animation.jpg",
        href: "/blog/building-modern-web-applications"
    },
    {
        title: "The Future of Frontend Development",
        excerpt: "Discover emerging trends and technologies shaping the future of frontend development, from AI integration to new frameworks.",
        date: "March 10, 2024",
        readTime: "4 min read",
        category: "Technology",
        image: "/images/blog/ux-design.jpg",
        href: "/blog/future-of-frontend"
    },
    {
        title: "Mastering TypeScript: Advanced Patterns",
        excerpt: "Deep dive into advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "Programming",
        image: "/images/blog/web-dev.jpg",
        href: "/blog/mastering-typescript"
    }
];

const BlogSection = () => {
    return (
        <section id="blog" className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6"
                    >
                        <span className="text-sm font-medium text-primary">Latest Insights</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4"
                    >
                        Blog & Articles
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Sharing my thoughts and experiences on web development, design, and technology.
                    </motion.p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-2xl overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {post.excerpt}
                                </p>

                                <a
                                    href={post.href}
                                    className="inline-flex items-center text-primary font-medium group/link"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors duration-300"
                    >
                        View All Articles
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection; 