import { motion } from 'framer-motion';
import { ProjectStatus } from './ProjectStatusCard';

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

interface ProjectTableViewProps {
    projects: Project[];
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

export const ProjectTableView = ({ projects }: ProjectTableViewProps) => {
    if (projects.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
            >
                <p className="text-lg text-muted-foreground">
                    No projects found matching your criteria.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-foreground/10">
                        <th className="py-4 px-6 text-left">Project</th>
                        <th className="py-4 px-6 text-left">Status</th>
                        <th className="py-4 px-6 text-left">Progress</th>
                        <th className="py-4 px-6 text-left">Timeline</th>
                        <th className="py-4 px-6 text-left">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <motion.tr
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="border-b border-foreground/5 hover:bg-foreground/5"
                        >
                            <td className="py-4 px-6">
                                <div>
                                    <h3 className="font-medium">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="py-4 px-6">
                                <div className="w-full max-w-xs">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-500"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="text-sm">
                                    <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                                    <p>End: {new Date(project.estimatedEndDate).toLocaleDateString()}</p>
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex -space-x-2">
                                    {project.team?.slice(0, 3).map((member) => (
                                        <div
                                            key={member.name}
                                            className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                                            title={`${member.name} - ${member.role}`}
                                        >
                                            <span className="text-xs font-medium">{member.name[0]}</span>
                                        </div>
                                    ))}
                                    {(project.team?.length || 0) > 3 && (
                                        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                                            <span className="text-xs font-medium">+{project.team!.length - 3}</span>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}; 