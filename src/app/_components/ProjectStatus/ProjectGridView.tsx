import { motion } from 'framer-motion';
import { ProjectStatus, ProjectStatusCard } from './ProjectStatusCard';

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

interface ProjectGridViewProps {
    projects: Project[];
}

export const ProjectGridView = ({ projects }: ProjectGridViewProps) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <ProjectStatusCard
                        project={{
                            ...project,
                            startDate: new Date(project.startDate).toLocaleDateString(),
                            estimatedEndDate: new Date(project.estimatedEndDate).toLocaleDateString()
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}; 