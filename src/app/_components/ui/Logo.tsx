import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface LogoProps {
    className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`relative ${className}`}
        >
            <div className="flex items-center gap-2">
                {/* Logo Icon */}
                <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl" />
                    <div className="absolute inset-[1px] bg-background rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            DS
                        </span>
                    </div>
                </div>

                {/* Logo Text */}
                <div className="text-lg font-semibold">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Danial Safari
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Logo; 