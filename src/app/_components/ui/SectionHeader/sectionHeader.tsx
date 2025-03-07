'use client';

import { motion } from 'framer-motion';
import { SectionHeaderProps } from './sectionHedaer.types';

export const SectionHeader = ({
    badge,
    title,
    description,
    className = '',
    align = 'center'
}: SectionHeaderProps) => {
    return (
        <div className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6"
                >
                    <span className="text-sm font-medium text-primary">{badge}</span>
                </motion.div>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mb-4"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`text-lg text-muted-foreground ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};

