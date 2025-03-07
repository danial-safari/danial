'use client';
import { SectionProps } from './section.types';



export const Section = ({ id, className = '', children, noPattern = false }: SectionProps) => {
    return (
        <section id={id} className={`relative py-20 sm:py-32 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
            {!noPattern && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
            )}

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

