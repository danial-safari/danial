'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const experiences = [
    {
        title: 'Lead Frontend Architect',
        company: 'Tech Solutions Inc.',
        period: '2023 - Present',
        description: 'Leading architecture decisions for enterprise applications, implementing micro-frontend strategies, and establishing development standards.',
        technologies: ['React', 'Micro-frontends', 'TypeScript', 'Next.js', 'AWS'],
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: 'Senior Frontend Developer',
        company: 'Innovation Labs',
        period: '2022 - 2023',
        description: 'Spearheaded development of enterprise React applications with 3D visualizations, improving user engagement by 40%.',
        technologies: ['React', 'Three.js', 'TypeScript', 'WebGL', 'Redux'],
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    },
    {
        title: 'Full Stack Developer',
        company: 'Digital Innovations Ltd',
        period: '2021 - 2022',
        description: 'Built scalable web applications with real-time features, handling 100K+ concurrent users.',
        technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'Redis'],
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: 'Backend Developer',
        company: 'Tech Startup Co.',
        period: '2020 - 2021',
        description: 'Developed microservices architecture, reducing system latency by 60% and improving scalability.',
        technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        )
    },
    {
        title: 'Junior Developer',
        company: 'Creative Agency',
        period: '2019 - 2020',
        description: 'Created responsive websites and custom CMS solutions for various clients in the creative industry.',
        technologies: ['JavaScript', 'PHP', 'WordPress', 'MySQL', 'SCSS'],
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const ExperienceSection = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState({ start: 0, end: 0 });

    // Scroll progress for the timeline
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start end", "end start"]
    });

    // Transform scrollYProgress (0 to 1) to translateX value
    const translateX = useTransform(
        scrollYProgress,
        [0.2, 0.8], // Concentrate the scroll effect in the middle portion
        ["0%", "-66%"],
        {
            clamp: true
        }
    );

    useEffect(() => {
        const calculateScrollRange = () => {
            if (wrapperRef.current && sectionRef.current) {
                const wrapperRect = wrapperRef.current.getBoundingClientRect();
                const sectionRect = sectionRef.current.getBoundingClientRect();

                setScrollRange({
                    start: wrapperRect.top + window.scrollY,
                    end: wrapperRect.top + window.scrollY + (wrapperRect.height - sectionRect.height)
                });
            }
        };

        calculateScrollRange();
        window.addEventListener('resize', calculateScrollRange);
        return () => window.removeEventListener('resize', calculateScrollRange);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !wrapperRef.current) return;

            const scrollY = window.scrollY;
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            if (scrollY >= scrollRange.start && scrollY <= scrollRange.end) {
                // Fix the section while scrolling through the timeline
                sectionRef.current.style.position = 'fixed';
                sectionRef.current.style.top = '0';
                sectionRef.current.style.bottom = 'auto';
            } else if (scrollY > scrollRange.end) {
                // Stick to bottom when scrolled past
                sectionRef.current.style.position = 'absolute';
                sectionRef.current.style.top = `${scrollRange.end - scrollRange.start}px`;
                sectionRef.current.style.bottom = 'auto';
            } else {
                // Stick to top when scrolled before
                sectionRef.current.style.position = 'absolute';
                sectionRef.current.style.top = '0';
                sectionRef.current.style.bottom = 'auto';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollRange]);

    return (
        <div ref={wrapperRef} className="relative" style={{ height: '300vh' }}>
            <section
                ref={sectionRef}
                className="w-full h-screen"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]" />

                {/* Content Container */}
                <div className="relative h-screen flex flex-col justify-center">
                    {/* Section Header */}
                    <div className="text-center mb-16 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6"
                        >
                            <span className="text-sm font-medium text-primary">Career Path</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4"
                        >
                            Work Experience
                        </motion.h2>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative h-[600px] overflow-hidden">
                        {/* Timeline Line */}
                        <div className="absolute top-[100px] left-0 w-full h-0.5">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        </div>

                        {/* Experience Items Container */}
                        <motion.div
                            style={{ x: translateX }}
                            className="absolute top-0 left-0 flex gap-8 pl-[40vw]"
                        >
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative w-[400px] flex-shrink-0"
                                >
                                    {/* Timeline Point */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="absolute top-[92px] left-1/2 transform -translate-x-1/2 w-4 h-4"
                                    >
                                        <div className="w-full h-full bg-primary rounded-full animate-pulse" />
                                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                                    </motion.div>

                                    {/* Period Label */}
                                    <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-sm font-medium text-primary whitespace-nowrap">
                                        {experience.period}
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            y: -5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25
                                        }}
                                        className="group relative mt-[160px] bg-background/40 backdrop-blur-xl rounded-2xl p-8 border border-foreground/[0.08] hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.2)] hover:bg-background/60"
                                    >
                                        {/* Inner Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-2xl transform group-hover:scale-110 transition-transform duration-300" />
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 blur-xl" />
                                        </div>

                                        {/* Card Header with Icon */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                                {experience.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-primary/80 font-medium group-hover:text-primary transition-colors duration-300">
                                                    {experience.company}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground/80 mb-6 group-hover:text-muted-foreground transition-colors duration-300 transform group-hover:translate-x-1">
                                            {experience.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary/70 border border-primary/10 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary hover:scale-110 hover:-translate-y-0.5"
                                                    style={{
                                                        transitionDelay: `${techIndex * 50}ms`
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperienceSection; 