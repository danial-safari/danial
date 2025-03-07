'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/homeSections/about';
import { StatCard } from './StatCard';

const Stats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
        >
            {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </motion.div>
    );
};

export default Stats; 