import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { IconArrowRight } from '../../icons/icons';
export const CallToAction = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="relative group overflow-hidden rounded-full"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Let's Talk
                    <motion.span
                        className="relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <IconArrowRight className="w-4 h-4" />
                    </motion.span>
                </span>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </Button>
        </motion.div>
    )
}