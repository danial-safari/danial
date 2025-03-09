import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectStatus } from '../types';

interface Project {
    id: string;
    title: string;
    description: string;
    status: ProjectStatus;
    startDate: string;
    estimatedEndDate: string;
    progress: number;
    priority?: 'Low' | 'Medium' | 'High';
    team?: { name: string; role: string }[];
}

interface ProjectCalendarViewProps {
    projects: Project[];
}

const getMonthDays = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const getWeekDays = () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
        case 'In Progress':
            return 'bg-blue-500/20 border-blue-500/30 text-blue-500';
        case 'Pending':
            return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-500';
        case 'Finished':
            return 'bg-green-500/20 border-green-500/30 text-green-500';
    }
};

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'bg-red-500/10 text-red-500 border-red-500/20';
        case 'Medium':
            return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
        case 'Low':
            return 'bg-green-500/10 text-green-500 border-green-500/20';
        default:
            return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
};

export const ProjectCalendarView = ({ projects }: ProjectCalendarViewProps) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showDetails, setShowDetails] = useState(false);

    const days = getMonthDays(currentYear, currentMonth);
    const weekDays = getWeekDays();
    const firstDayOfMonth = days[0].getDay();

    // Get projects for the current month
    const monthProjects = projects.filter(project => {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.estimatedEndDate);
        const monthStart = new Date(currentYear, currentMonth, 1);
        const monthEnd = new Date(currentYear, currentMonth + 1, 0);

        return startDate <= monthEnd && endDate >= monthStart;
    });

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
        setSelectedDate(null);
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
        setSelectedDate(null);
    };

    const getProjectsForDate = (date: Date) => {
        return monthProjects.filter(project => {
            const startDate = new Date(project.startDate);
            const endDate = new Date(project.estimatedEndDate);
            return date >= startDate && date <= endDate;
        });
    };

    const getDayClass = (date: Date, dayProjects: Project[]) => {
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = selectedDate?.toDateString() === date.toDateString();
        const hasProjects = dayProjects.length > 0;

        return `
            relative aspect-square p-2 bg-background/50
            ${isToday ? 'ring-2 ring-primary ring-inset' : ''}
            ${isSelected ? 'bg-primary/10' : ''}
            ${hasProjects ? 'cursor-pointer hover:bg-foreground/5' : ''}
            group
        `;
    };

    return (
        <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold">
                            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </h3>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={goToPreviousMonth}
                                className="p-2 rounded-lg hover:bg-foreground/5"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentMonth(today.getMonth());
                                    setCurrentYear(today.getFullYear());
                                    setSelectedDate(null);
                                }}
                                className="px-3 py-1 text-sm rounded-lg hover:bg-foreground/5"
                            >
                                Today
                            </button>
                            <button
                                onClick={goToNextMonth}
                                className="p-2 rounded-lg hover:bg-foreground/5"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-px bg-foreground/10 rounded-lg overflow-hidden">
                        {/* Week Days */}
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className="p-2 text-center text-sm font-medium bg-background/50"
                            >
                                {day}
                            </div>
                        ))}

                        {/* Empty cells before first day */}
                        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                            <div key={`empty-${index}`} className="aspect-square p-2 bg-background/50" />
                        ))}

                        {/* Calendar Days */}
                        {days.map((date) => {
                            const dayProjects = getProjectsForDate(date);
                            const hasProjects = dayProjects.length > 0;

                            return (
                                <div
                                    key={date.toISOString()}
                                    className={getDayClass(date, dayProjects)}
                                    onClick={() => {
                                        if (hasProjects) {
                                            setSelectedDate(date);
                                            setShowDetails(true);
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`
                                            text-sm font-medium
                                            ${date.toDateString() === today.toDateString() ? 'text-primary' : ''}
                                        `}>
                                            {date.getDate()}
                                        </span>
                                        {hasProjects && (
                                            <span className="text-xs text-muted-foreground">
                                                {dayProjects.length}
                                            </span>
                                        )}
                                    </div>

                                    {hasProjects && (
                                        <div className="flex flex-wrap gap-1">
                                            {Array.from(new Set(dayProjects.map(p => p.status))).map((status) => (
                                                <div
                                                    key={status}
                                                    className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Project Preview on Hover */}
                                    {hasProjects && (
                                        <div className="
                                            absolute left-full top-0 ml-2 z-10
                                            w-64 bg-background border border-foreground/10 rounded-lg p-2
                                            opacity-0 group-hover:opacity-100
                                            pointer-events-none
                                            transition-opacity duration-200
                                        ">
                                            <div className="text-sm font-medium mb-2">
                                                {date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                                            </div>
                                            <div className="space-y-2">
                                                {dayProjects.map((project) => (
                                                    <div key={project.id} className="text-xs">
                                                        <div className="flex items-center gap-2">
                                                            <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                                                            <span className="truncate">{project.title}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Selected Day Details */}
                {selectedDate && showDetails && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-80 bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-4"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-medium">
                                {selectedDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                            </h4>
                            <button
                                onClick={() => setShowDetails(false)}
                                className="p-1 rounded-lg hover:bg-foreground/5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {getProjectsForDate(selectedDate).map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-background rounded-lg border border-foreground/10"
                                >
                                    <div className="font-medium mb-2">{project.title}</div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                        {project.priority && (
                                            <span className={`px-2 py-0.5 text-xs rounded-full ${getPriorityColor(project.priority)}`}>
                                                {project.priority}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-full bg-foreground/10 rounded-full h-1.5">
                                            <div
                                                className="bg-primary rounded-full h-1.5 transition-all duration-500"
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                        <span className="text-xs">{project.progress}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}; 