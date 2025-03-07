import { motion } from 'framer-motion';
import { Button } from '@/app/_components/ui/Button';
import { IconArrowRight , IconPointerClick } from '@/app/_components/icons';

const CTAButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
    >
      <Button href="#contact" variant="primary" size="lg">
        Get in Touch
        <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>
      <Button href="#projects" variant="outline" size="lg">
        View Projects
        <IconPointerClick className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>
    </motion.div>
  );
};

export default CTAButtons; 