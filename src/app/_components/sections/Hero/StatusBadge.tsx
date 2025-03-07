import { motion } from 'framer-motion';

const StatusBadge = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/[0.05] border border-foreground/10 backdrop-blur-sm"
        >
            <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground/80">Available for new projects</span>
        </motion.div>
    );
};

export default StatusBadge; 