'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        slug: 'modern-web-development',
        title: 'Modern Web Development with React and Three.js',
        excerpt: 'Explore the latest trends in web development and learn how to create immersive 3D experiences.',
        image: '/images/blog/web-dev.jpg',
        category: 'Development',
        date: 'March 15, 2024',
        readTime: '5 min read',
    },
    {
        id: 2,
        slug: 'ux-design-principles',
        title: 'Essential UX Design Principles for Web Developers',
        excerpt: 'Learn the fundamental principles of UX design that every web developer should know.',
        image: '/images/blog/ux-design.jpg',
        category: 'Design',
        date: 'March 10, 2024',
        readTime: '4 min read',
    },
    {
        id: 3,
        slug: 'threejs-animation-techniques',
        title: 'Advanced Three.js Animation Techniques',
        excerpt: 'Deep dive into creating stunning 3D animations with Three.js and React Three Fiber.',
        image: '/images/blog/3d-animation.jpg',
        category: '3D Graphics',
        date: 'March 5, 2024',
        readTime: '6 min read',
    },
    // Add more blog posts here
];

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredPosts = selectedCategory
        ? blogPosts.filter(post => post.category === selectedCategory)
        : blogPosts;

    return (
        <main className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Insights and tutorials about web development, design, and technology.
                    </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedCategory
                                ? 'bg-primary text-white'
                                : 'bg-background/50 text-gray-400 hover:text-white'
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-primary text-white'
                                    : 'bg-background/50 text-gray-400 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-colors"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-primary text-sm">{post.category}</span>
                                        <span className="text-gray-400 text-sm">{post.date}</span>
                                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-400">{post.excerpt}</p>
                                    <div className="mt-4 flex items-center text-primary">
                                        Read More
                                        <svg
                                            className="ml-2 w-4 h-4"
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
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
} 