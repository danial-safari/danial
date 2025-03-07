import { motion } from 'framer-motion';

const techStack : string[] = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

const TechStack = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
        >
            {techStack.map((tech, i) => (
                <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/[0.05] border border-foreground/10 text-xs sm:text-sm font-medium text-foreground/80 backdrop-blur-sm"
                >
                    {tech}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TechStack; 