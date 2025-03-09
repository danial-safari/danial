import { motion } from 'framer-motion';

interface ProjectCalendarFilterProps {
    selectedMonth: number;
    selectedYear: number;
    onMonthChange: (month: number) => void;
    onYearChange: (year: number) => void;
}

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export const ProjectCalendarFilter = ({
    selectedMonth,
    selectedYear,
    onMonthChange,
    onYearChange,
}: ProjectCalendarFilterProps) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
        >
            {/* Month Filter */}
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Month:</label>
                <select
                    value={selectedMonth}
                    onChange={(e) => onMonthChange(Number(e.target.value))}
                    className="px-3 py-1.5 rounded-lg bg-background border border-foreground/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <option value={-1}>All Months</option>
                    {months.map((month, index) => (
                        <option key={month} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Year:</label>
                <select
                    value={selectedYear}
                    onChange={(e) => onYearChange(Number(e.target.value))}
                    className="px-3 py-1.5 rounded-lg bg-background border border-foreground/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <option value={-1}>All Years</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            {/* Active Filters */}
            {(selectedMonth !== -1 || selectedYear !== -1) && (
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    <div className="flex items-center gap-2">
                        {selectedMonth !== -1 && (
                            <button
                                onClick={() => onMonthChange(-1)}
                                className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                            >
                                {months[selectedMonth]}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                        {selectedYear !== -1 && (
                            <button
                                onClick={() => onYearChange(-1)}
                                className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                            >
                                {selectedYear}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
}; 