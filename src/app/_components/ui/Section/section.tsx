'use client';
import { SectionProps } from './section.types';



export const Section = ({ id, className = '', children, noPattern = false }: SectionProps) => {
    return (
        <section id={id} className={`relative py-20 sm:py-32 overflow-hidden ${className}`}>
            {!noPattern && (
                <div className="section-pattern" />
            )}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

