import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';

type SkillCategoryProps = {
    category: string;
    items: string[];
    delay: number;
}

export const SkillCategory = ({ category, items, delay }: SkillCategoryProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-foreground/5 p-6 transition-all duration-300 hover:bg-foreground/10 bg-gradient-to-br from-background via-background/95 to-background/90"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative space-y-4 ">
                <h4 className="inline-flex items-center text-lg font-semibold text-foreground">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {category}
                </h4>
                <ul className="space-y-3">
                    {items.map((skill) => (
                        <SkillItem key={skill} skill={skill} />
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}; 