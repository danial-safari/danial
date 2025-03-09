import { motion } from 'framer-motion';
import { JSX } from 'react';

export type ViewStyle = 'grid' | 'list' | 'table' | 'timeline' | 'calendar';

interface ProjectViewSwitcherProps {
    currentView: ViewStyle;
    onViewChange: (view: ViewStyle) => void;
}

const viewOptions: { value: ViewStyle; icon: JSX.Element; label: string }[] = [
    {
        value: 'grid',
        label: 'Grid',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
    },
    {
        value: 'list',
        label: 'List',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        ),
    },
    {
        value: 'table',
        label: 'Table',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        value: 'timeline',
        label: 'Timeline',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        value: 'calendar',
        label: 'Calendar',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2-2v4m14-4v4M3 10h18" />
            </svg>
        ),
    },
];

export const ProjectViewSwitcher = ({ currentView, onViewChange }: ProjectViewSwitcherProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-2"
        >
            <div className="flex items-center gap-1">
                {viewOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onViewChange(option.value)}
                        className={`
                            flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
                            ${currentView === option.value
                                ? 'bg-primary text-primary-foreground'
                                : 'hover:bg-foreground/5 text-muted-foreground hover:text-foreground'
                            }
                        `}
                        title={`View as ${option.label}`}
                    >
                        {option.icon}
                        <span className="hidden sm:inline">{option.label}</span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
}; 