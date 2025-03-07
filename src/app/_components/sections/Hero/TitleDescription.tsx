import { motion } from 'framer-motion';

const TitleDescription = () => {
    return (
        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                        Danial Safari
                    </span>
                </h1>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
                Turning Modern Designs into High-Performance, Responsive Web Experience
            </motion.p>
        </div>
    );
};

export default TitleDescription; 