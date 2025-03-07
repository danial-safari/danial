import { motion } from 'framer-motion';
import { FloatingIconProps } from './hero.types';

const FloatingIconCard = ({ icon, className }: FloatingIconProps) => {
  const randomDelay = Math.random() * 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: randomDelay }}
      className={`absolute hidden md:block ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: randomDelay,
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl transition-all duration-300 hover:blur-2xl"
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.3 }
          }}
        />
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: {
              rotate: {
                duration: 0.4,
                ease: "easeInOut",
              }
            }
          }}
          whileTap={{ scale: 0.9 }}
          className="relative p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/10 transition-all duration-300"
          style={{
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hover:pause-animation"
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingIconCard; 