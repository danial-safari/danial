import FloatingIconCard from './FloatingIcon';
import { BackgroundProps } from './hero.types';

const Background = ({ icons }: BackgroundProps) => {
    return (
        <>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
            {icons.map((item, i) => (
                <FloatingIconCard key={i} icon={item.icon} className={item.position} />
            ))}
        </>
    );
};

export default Background; 