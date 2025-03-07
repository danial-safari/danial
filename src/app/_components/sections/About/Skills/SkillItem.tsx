import { IconCheck } from '@/app/_components/icons';
type SkillItemProps = {
    skill: string;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
    return (
        <li className="group flex items-center text-muted-foreground transition-colors duration-200 hover:text-foreground">
            <IconCheck className="w-4 h-4 mr-3 text-primary/60 transition-colors duration-200 group-hover:text-primary" />
            <span className="text-sm">{skill}</span>
        </li>
    );
}; 