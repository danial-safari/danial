'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
        },
        {
            category: "Tools & Methods",
            items: ["Git", "Docker", "CI/CD", "Agile", "Testing"]
        }
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4"
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl text-muted-foreground"
                        >
                            Crafting digital experiences with passion and precision
                        </motion.p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* About Me Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-gradient">My Journey</h3>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    With over 5 years of experience in software development, I specialize in building modern web applications that combine beautiful design with powerful functionality.
                                </p>
                                <p>
                                    My approach to development focuses on creating intuitive user experiences while maintaining clean, efficient code. I'm passionate about staying current with the latest technologies and best practices.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats & Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {/* Experience Card */}
                            <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                <span className="text-4xl font-bold text-gradient mb-2">5+</span>
                                <span className="text-muted-foreground">Years Experience</span>
                            </div>

                            {/* Projects Card */}
                            <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                <span className="text-4xl font-bold text-gradient mb-2">50+</span>
                                <span className="text-muted-foreground">Projects Completed</span>
                            </div>

                            {/* Technologies Card */}
                            <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                <span className="text-4xl font-bold text-gradient mb-2">20+</span>
                                <span className="text-muted-foreground">Technologies</span>
                            </div>

                            {/* Client Satisfaction Card */}
                            <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                <span className="text-4xl font-bold text-gradient mb-2">100%</span>
                                <span className="text-muted-foreground">Client Satisfaction</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-semibold text-gradient mb-8">Technical Expertise</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {skills.map((skillSet, index) => (
                                <motion.div
                                    key={skillSet.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <h4 className="font-medium text-foreground">{skillSet.category}</h4>
                                    <ul className="space-y-2">
                                        {skillSet.items.map((skill) => (
                                            <li
                                                key={skill}
                                                className="flex items-center text-muted-foreground"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-primary mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection; 