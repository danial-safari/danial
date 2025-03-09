import { motion, AnimatePresence } from 'framer-motion';
import { JSX, useState, useRef, useEffect } from 'react';

export type SortOption = 'priority' | 'progress' | 'deadline' | 'startDate' | 'name';
export type SortDirection = 'asc' | 'desc';

interface QuickSortMenuProps {
    onSort: (option: SortOption, direction: SortDirection) => void;
    currentSort: {
        option: SortOption;
        direction: SortDirection;
    };
}

const sortOptions: { value: SortOption; label: string; icon: JSX.Element }[] = [
    {
        value: 'name',
        label: 'Name',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
        ),
    },
    {
        value: 'priority',
        label: 'Priority',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
    },
    {
        value: 'progress',
        label: 'Progress',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        value: 'deadline',
        label: 'Deadline',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: 'startDate',
        label: 'Start Date',
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export const QuickSortMenu = ({ onSort, currentSort }: QuickSortMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;

            switch (event.key) {
                case 'Escape':
                    setIsOpen(false);
                    buttonRef.current?.focus();
                    break;
                case 'Tab':
                    if (!event.shiftKey && document.activeElement === buttonRef.current) {
                        event.preventDefault();
                        const firstOption = menuRef.current?.querySelector('button');
                        firstOption?.focus();
                    }
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            {/* Sort Button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label={`Sort by ${currentSort.option}, ${currentSort.direction}ending order`}
                className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
                    bg-background/50 backdrop-blur-sm border border-foreground/10
                    hover:bg-foreground/5 text-muted-foreground hover:text-foreground
                    ${isOpen ? 'bg-foreground/5 text-foreground ring-2 ring-primary/50' : ''}
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                `}
            >
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                <span className="hidden sm:inline">Sort</span>
                {currentSort.option !== 'name' && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {sortOptions.find(opt => opt.value === currentSort.option)?.label}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Desktop: Horizontal Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="fixed md:absolute left-0 right-0 md:right-auto mt-2 hidden md:flex bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg shadow-lg z-[60] max-w-fit"
                        >
                            <div className="flex p-1 gap-1">
                                {sortOptions.map((option, index) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            const newDirection =
                                                currentSort.option === option.value && currentSort.direction === 'asc'
                                                    ? 'desc'
                                                    : 'asc';
                                            onSort(option.value, newDirection);
                                            setIsOpen(false);
                                        }}
                                        className={`
                                            flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                                            ${currentSort.option === option.value
                                                ? 'bg-primary text-primary-foreground'
                                                : 'hover:bg-foreground/5'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-primary/50
                                        `}
                                        aria-label={`Sort by ${option.label}, ${currentSort.option === option.value && currentSort.direction === 'asc' ? 'descending' : 'ascending'} order`}
                                        tabIndex={isOpen ? 0 : -1}
                                    >
                                        {option.icon}
                                        <span>{option.label}</span>
                                        {currentSort.option === option.value && (
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${currentSort.direction === 'desc' ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mobile: Accordion Layout */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="fixed md:hidden left-4 right-4 bottom-4 mt-2 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg shadow-lg z-[60] overflow-hidden"
                        >
                            <div className="p-1 space-y-1">
                                {sortOptions.map((option, index) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            const newDirection =
                                                currentSort.option === option.value && currentSort.direction === 'asc'
                                                    ? 'desc'
                                                    : 'asc';
                                            onSort(option.value, newDirection);
                                            setIsOpen(false);
                                        }}
                                        className={`
                                            w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200
                                            ${currentSort.option === option.value
                                                ? 'bg-primary text-primary-foreground'
                                                : 'hover:bg-foreground/5'
                                            }
                                            focus:outline-none focus:ring-2 focus:ring-primary/50
                                        `}
                                        aria-label={`Sort by ${option.label}, ${currentSort.option === option.value && currentSort.direction === 'asc' ? 'descending' : 'ascending'} order`}
                                        tabIndex={isOpen ? 0 : -1}
                                    >
                                        <div className="flex items-center gap-2">
                                            {option.icon}
                                            <span>{option.label}</span>
                                        </div>
                                        {currentSort.option === option.value && (
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${currentSort.direction === 'desc' ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/5 backdrop-blur-sm z-50"
                            onClick={() => setIsOpen(false)}
                            aria-hidden="true"
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}; 