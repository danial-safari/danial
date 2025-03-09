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

interface ProjectTimelineViewProps {
    projects: Project[];
}

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

export const ProjectTimelineView = ({ projects }: ProjectTimelineViewProps) => {
    const [timeScale, setTimeScale] = useState<'weeks'|'months'>('weeks');
    const [showCompleted, setShowCompleted] = useState(true);

    // Get date range for all projects
    const dates = projects.flatMap(project => [new Date(project.startDate), new Date(project.estimatedEndDate)]);
    const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));

    // Generate time periods
    const timePeriods: Date[] = [];
    let currentDate = new Date(minDate);
    while (currentDate <= maxDate) {
        timePeriods.push(new Date(currentDate));
        if (timeScale === 'weeks') {
            currentDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
        } else {
            currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
        }
    }

    // Calculate timeline position and width for each project
    const getProjectStyle = (project: Project) => {
        const start = new Date(project.startDate);
        const end = new Date(project.estimatedEndDate);
        const totalDuration = maxDate.getTime() - minDate.getTime();
        const startOffset = start.getTime() - minDate.getTime();
        const duration = end.getTime() - start.getTime();

        const left = (startOffset / totalDuration) * 100;
        const width = (duration / totalDuration) * 100;

        return {
            left: `${left}%`,
            width: `${width}%`,
        };
    };

    const filteredProjects = showCompleted
        ? projects
        : projects.filter(p => p.status !== 'Finished');

    return (
        <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-6 overflow-x-auto">
            {/* Timeline Header */}
            <div className="flex items-center justify-between mb-6 sticky left-0">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold">Timeline View</h3>
                    <button
                        onClick={() => setShowCompleted(!showCompleted)}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${!showCompleted ? 'bg-primary text-primary-foreground' : 'hover:bg-foreground/5'
                            }`}
                    >
                        Hide Completed
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTimeScale('weeks')}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${timeScale === 'weeks'
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-foreground/5'
                            }`}
                    >
                        Weeks
                    </button>
                    <button
                        onClick={() => setTimeScale('months')}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${timeScale === 'months'
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-foreground/5'
                            }`}
                    >
                        Months
                    </button>
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[250px_150px_150px_150px_1fr] gap-4 mb-4 sticky left-0 bg-background/50 backdrop-blur-sm z-10 pb-4 border-b border-foreground/10">
                <div className="font-medium">Project</div>
                <div className="font-medium">Status</div>
                <div className="font-medium">Priority</div>
                <div className="font-medium">Progress</div>
                <div className="font-medium pl-4">Timeline</div>
            </div>

            {/* Projects Table */}
            <div className="space-y-4 min-w-[1200px]">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-[250px_150px_150px_150px_1fr] gap-4 group items-center"
                    >
                        {/* Project Info */}
                        <div className="truncate font-medium">{project.title}</div>

                        {/* Status */}
                        <div>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                {project.status}
                            </span>
                        </div>

                        {/* Priority */}
                        <div>
                            {project.priority && (
                                <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(project.priority)}`}>
                                    {project.priority}
                                </span>
                            )}
                        </div>

                        {/* Progress */}
                        <div className="flex items-center gap-2">
                            <div className="w-full bg-foreground/10 rounded-full h-2">
                                <div
                                    className="bg-primary rounded-full h-2 transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                            <span className="text-xs text-muted-foreground">{project.progress}%</span>
                        </div>

                        {/* Timeline Bar */}
                        <div className="relative h-8 bg-foreground/5 rounded-lg">
                            {/* Time Period Markers */}
                            {timePeriods.map((date, index) => (
                                <div
                                    key={date.toISOString()}
                                    className="absolute h-full border-l border-foreground/10"
                                    style={{ left: `${(index / (timePeriods.length - 1)) * 100}%` }}
                                >
                                    <div className="absolute -top-6 left-1 text-xs text-muted-foreground whitespace-nowrap">
                                        {timeScale === 'weeks'
                                            ? `W${Math.ceil((date.getDate() + date.getDay()) / 7)} ${date.toLocaleString('default', { month: 'short' })}`
                                            : date.toLocaleString('default', { month: 'short', year: '2-digit' })
                                        }
                                    </div>
                                </div>
                            ))}

                            {/* Project Bar */}
                            <motion.div
                                className={`
                                    absolute top-1/2 -translate-y-1/2 h-4 rounded-full
                                    border group-hover:border-primary/50 transition-colors cursor-pointer
                                    ${getStatusColor(project.status)}
                                `}
                                style={getProjectStyle(project)}
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.5 }}
                                title={`${project.title}\nStart: ${new Date(project.startDate).toLocaleDateString()}\nEnd: ${new Date(project.estimatedEndDate).toLocaleDateString()}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}; 