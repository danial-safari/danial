import { motion } from 'framer-motion';
import Link from 'next/link';

export type ProjectStatus = 'In Progress' | 'Pending' | 'Finished';

export interface ProjectStatusCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        status: ProjectStatus;
        startDate: string;
        estimatedEndDate: string;
        progress: number;
        priority?: 'Low' | 'Medium' | 'High';
        team?: { name: string; role: string }[];
    };
}

const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
        case 'In Progress':
            return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
        case 'Pending':
            return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
        case 'Finished':
            return 'bg-green-500/10 text-green-500 border-green-500/20';
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

export const ProjectStatusCard = ({ project }: ProjectStatusCardProps) => {
    const statusColor = getStatusColor(project.status);
    const priorityColor = project.priority ? getPriorityColor(project.priority) : '';

    // Calculate days remaining
    const today = new Date();
    const endDate = new Date(project.estimatedEndDate);
    const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    // Calculate if project is overdue
    const isOverdue = project.status !== 'Finished' && daysRemaining < 0;

    return (
        <Link href={`/project-status/${project.id}`}>
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                    bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden 
                    border border-foreground/10 hover:border-primary/50 
                    transition-all duration-300 cursor-pointer
                    ${isOverdue ? 'ring-2 ring-red-500/50' : ''}
                `}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            {project.priority && (
                                <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${priorityColor} mb-2`}>
                                    {project.priority} Priority
                                </span>
                            )}
                        </div>
                        <span className={`px-3 py-1 text-sm rounded-full ${statusColor}`}>
                            {project.status}
                        </span>
                    </div>

                    <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>

                    {/* Progress Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Progress</span>
                            <span className="text-sm font-medium">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`h-full rounded-full ${project.progress === 100
                                    ? 'bg-green-500'
                                    : isOverdue
                                        ? 'bg-red-500'
                                        : 'bg-primary'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Timeline and Team */}
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground mb-1">Start Date</p>
                                <p className="font-medium">{project.startDate}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Est. Completion</p>
                                <p className={`font-medium ${isOverdue ? 'text-red-500' : ''}`}>
                                    {project.estimatedEndDate}
                                </p>
                            </div>
                        </div>

                        {/* Time Remaining */}
                        {project.status !== 'Finished' && (
                            <div className="mt-2">
                                <p className={`text-sm ${isOverdue ? 'text-red-500' : 'text-muted-foreground'}`}>
                                    {isOverdue
                                        ? `Overdue by ${Math.abs(daysRemaining)} days`
                                        : `${daysRemaining} days remaining`
                                    }
                                </p>
                            </div>
                        )}

                        {/* Team Preview */}
                        {project.team && project.team.length > 0 && (
                            <div className="flex -space-x-2 mt-2">
                                {project.team.slice(0, 3).map((member, index) => (
                                    <div
                                        key={member.name}
                                        className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                                        title={`${member.name} - ${member.role}`}
                                    >
                                        <span className="text-xs font-medium">{member.name[0]}</span>
                                    </div>
                                ))}
                                {project.team.length > 3 && (
                                    <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                                        <span className="text-xs font-medium">+{project.team.length - 3}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}; 