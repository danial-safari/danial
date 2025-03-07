'use client';

import { motion } from 'framer-motion';
import { journeyContent } from '@/data/about';
import { JourneyText } from './JourneyText';

const Journey = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-6"
        >
            <h3 className="text-xl font-semibold text-gradient">{journeyContent.title}</h3>
            <JourneyText paragraphs={journeyContent.paragraphs} />
        </motion.div>
    );
};

export default Journey; 