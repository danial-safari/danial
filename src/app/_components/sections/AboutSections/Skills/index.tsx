'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/about';
import { SkillCategory } from './SkillCategory';

const Skills = () => { 
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass relative overflow-hidden rounded-2xl  p-8 border border-foreground/10"
        >
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="relative mb-12 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
                >
                    Technical Expertise
                </motion.h3>
                <div className="mt-2 text-muted-foreground">
                    Crafting digital experiences with modern technologies
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillSet, index) => (
                    <SkillCategory
                        key={skillSet.category}
                        category={skillSet.category}
                        items={skillSet.items}
                        delay={0.2 + index * 0.1}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Skills; 