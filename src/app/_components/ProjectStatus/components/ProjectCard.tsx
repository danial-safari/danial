import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types';
import { getStatusColor, getPriorityColor } from '../utils/styles';

interface ProjectCardProps {
    project: Project;
    variant?: 'default' | 'compact';
}

export const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
    // Calculate days remaining
    const today = new Date();
    const endDate = new Date(project.estimatedEndDate);
    const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const isOverdue = project.status !== 'Finished' && daysRemaining < 0;

    return (
        <Link href={`/projects/${project.slug}`} className="block">
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                    relative bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden 
                    border border-foreground/10 hover:border-primary/50 
                    transition-all duration-300 cursor-pointer
                    ${isOverdue ? 'ring-2 ring-red-500/50' : ''}
                `}
            >
                {/* Project Logo */}
                <div className="absolute top-4 right-4 w-12 h-12">
                    {project.logo ? (
                        <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            width={48}
                            height={48}
                            className="rounded-lg object-cover"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-xl font-semibold text-primary">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    {/* Header */}
                    <div className="mb-4 pr-16">
                        <h3 className="text-lg font-semibold mb-1 truncate">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {variant === 'default' && (
                        <>
                            {/* Status and Priority */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                {project.priority && (
                                    <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(project.priority)}`}>
                                        {project.priority}
                                    </span>
                                )}
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="h-full bg-primary rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="text-sm text-muted-foreground">
                                <div className="flex justify-between mb-1">
                                    <span>Start Date:</span>
                                    <span>{new Date(project.startDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>End Date:</span>
                                    <span>{new Date(project.estimatedEndDate).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Team */}
                            {project.team && project.team.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-foreground/10">
                                    <div className="flex -space-x-2">
                                        {project.team.slice(0, 3).map((member) => (
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
                                </div>
                            )}
                        </>
                    )}

                    {variant === 'compact' && (
                        <div className="flex items-center justify-between mt-2">
                            <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                {project.status}
                            </span>
                            <div className="text-sm text-muted-foreground">
                                Progress: {project.progress}%
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}; 