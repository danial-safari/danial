import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types';
import { getStatusColor, getPriorityColor } from '../utils/styles';

interface ProjectListProps {
    projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
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
        <div className="space-y-4">
            {projects.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.slug}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group relative bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 hover:border-primary/50 transition-all duration-300"
                    >
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                        <div className="relative flex items-start gap-4 p-4">
                            {/* Project Logo */}
                            <div className="w-16 h-16 flex-shrink-0">
                                {project.logo ? (
                                    <Image
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        width={64}
                                        height={64}
                                        className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                        <span className="text-2xl font-semibold text-primary">
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                    {project.priority && (
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${getPriorityColor(project.priority)}`}>
                                            {project.priority}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                    {project.description}
                                </p>

                                {/* Project Details */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {/* Progress */}
                                    <div>
                                        <div className="flex items-center justify-between text-sm mb-1">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span className="font-medium">{project.progress}%</span>
                                        </div>
                                        <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${project.progress}%` }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="text-sm">
                                        <p className="text-muted-foreground mb-1">Timeline</p>
                                        <p className="font-medium">
                                            {new Date(project.startDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} - {new Date(project.estimatedEndDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                                        </p>
                                    </div>

                                    {/* Team */}
                                    <div className="text-sm">
                                        <p className="text-muted-foreground mb-1">Team</p>
                                        <div className="flex -space-x-2">
                                            {project.team?.slice(0, 3).map((member) => (
                                                <div
                                                    key={member.name}
                                                    className="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                                                    title={`${member.name} - ${member.role}`}
                                                >
                                                    <span className="text-xs font-medium">{member.name[0]}</span>
                                                </div>
                                            ))}
                                            {(project.team?.length || 0) > 3 && (
                                                <div className="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                                                    <span className="text-xs font-medium">+{project.team!.length - 3}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    <div className="flex items-center justify-end">
                                        <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                            View Details
                                            <svg
                                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}; 