'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        slug: 'modern-web-development',
        title: 'Modern Web Development with React and Three.js',
        excerpt: 'Explore the latest trends in web development and learn how to create immersive 3D experiences.',
        content: `
      # Introduction

      Modern web development has evolved significantly with the advent of powerful libraries and frameworks. In this article, we'll explore how to combine React and Three.js to create immersive web experiences.

      ## Getting Started with React and Three.js

      First, let's understand the basics of setting up a React project with Three.js integration. We'll be using React Three Fiber, a React renderer for Three.js.

      \`\`\`javascript
      import { Canvas } from '@react-three/fiber'
      import { OrbitControls } from '@react-three/drei'

      function Scene() {
        return (
          <Canvas>
            <OrbitControls />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Canvas>
        )
      }
      \`\`\`

      ## Advanced Techniques

      Once you have the basics down, you can explore more advanced techniques like:
      - Custom shaders
      - Post-processing effects
      - Physics simulations
      - Performance optimization

      ## Best Practices

      When working with 3D in the web, keep these best practices in mind:
      1. Always optimize your 3D models
      2. Use proper lighting techniques
      3. Implement progressive loading
      4. Consider mobile performance
    `,
        image: '/images/blog/web-dev.jpg',
        category: 'Development',
        date: 'March 15, 2024',
        readTime: '5 min read',
        author: {
            name: 'John Doe',
            image: '/images/profile/profile.jpg',
            role: 'Senior Frontend Developer',
        },
    },
    // Add more blog posts here
];

export default function BlogPost() {
    const params = useParams();
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-primary hover:text-primary/80">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        href="/blog"
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
                        Back to Blog
                    </Link>

                    {/* Post Header */}
                    <div className="mb-12">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-primary">{post.category}</span>
                            <span className="text-gray-400">{post.date}</span>
                            <span className="text-gray-400">{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
                        <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>

                        {/* Author */}
                        <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium">{post.author.name}</h3>
                                <p className="text-gray-400">{post.author.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Post Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>
        </main>
    );
} 