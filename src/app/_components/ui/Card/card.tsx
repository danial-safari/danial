import { motion } from 'framer-motion';
import { CardProps } from './card.types';

const Card = ({ icon, title, description, className = '' }: CardProps) => {
    return (
        <motion.div
            className={`
                relative 
                group 
                rounded-2xl 
                bg-black/40 
                backdrop-blur-sm 
                border 
                border-white/[0.08]
                p-6
                overflow-hidden
                transition-all
                duration-300
                hover:bg-black/50
                hover:border-white/[0.12]
                ${className}
            `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {/* Hover border effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `
                        linear-gradient(to right, transparent, rgba(255,255,255,0.1)) border-box
                    `,
                    borderRadius: 'inherit',
                    padding: '1px',
                }}
            />

            {/* Icon */}
            {icon && (
                <div className="inline-flex p-3 rounded-lg bg-white/[0.05] mb-4">
                    {icon}
                </div>
            )}

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-2">
                {title}
            </h3>
            <p className="text-white/60 text-base font-mono">
                {description}
            </p>

            {/* Hover gradient overlay */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            600px circle at var(--mouse-x, 0) var(--mouse-y, 0),
                            rgba(255,255,255,0.06),
                            transparent 40%
                        )
                    `,
                }}
            />
        </motion.div>
    );
};

export default Card; 