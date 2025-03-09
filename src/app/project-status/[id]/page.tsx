'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ProjectStatus } from '@/app/_components/ProjectStatus/ProjectStatusCard';

// Sample data - replace with real data from your backend
const project = {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Building a modern e-commerce solution with Next.js and Stripe integration',
    status: 'In Progress' as ProjectStatus,
    startDate: 'Mar 15, 2024',
    estimatedEndDate: 'Apr 30, 2024',
    progress: 65,
    team: [
        { name: 'John Doe', role: 'Project Lead' },
        { name: 'Jane Smith', role: 'Frontend Developer' },
        { name: 'Mike Johnson', role: 'Backend Developer' }
    ],
    milestones: [
        { title: 'Project Setup', completed: true, date: 'Mar 15, 2024' },
        { title: 'UI Design', completed: true, date: 'Mar 25, 2024' },
        { title: 'Backend Development', completed: false, date: 'Apr 10, 2024' },
        { title: 'Testing & QA', completed: false, date: 'Apr 20, 2024' },
        { title: 'Deployment', completed: false, date: 'Apr 30, 2024' }
    ],
    recentUpdates: [
        { date: 'Mar 28, 2024', message: 'Completed user authentication system' },
        { date: 'Mar 25, 2024', message: 'Finalized UI design and component library' },
        { date: 'Mar 20, 2024', message: 'Set up project infrastructure and CI/CD pipeline' }
    ]
};

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

export default function ProjectStatusPage() {
    const params = useParams();
    const statusColor = getStatusColor(project.status);

    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/project-status"
                    className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Projects
                </Link>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-8 mb-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                            <p className="text-muted-foreground">{project.description}</p>
                        </div>
                        <span className={`px-4 py-2 text-sm rounded-full ${statusColor}`}>
                            {project.status}
                        </span>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Overall Progress</span>
                            <span className="text-sm font-medium">{project.progress}%</span>
                        </div>
                        <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Timeline</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-muted-foreground mb-1">Start Date</p>
                                    <p className="font-medium">{project.startDate}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground mb-1">Estimated Completion</p>
                                    <p className="font-medium">{project.estimatedEndDate}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Team</h3>
                            <div className="space-y-3">
                                {project.team.map((member) => (
                                    <div key={member.name} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            {member.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-sm text-muted-foreground">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Milestones and Updates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Milestones */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Milestones</h2>
                        <div className="space-y-6">
                            {project.milestones.map((milestone, index) => (
                                <div key={milestone.title} className="flex items-start gap-4">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${milestone.completed
                                            ? 'bg-green-500/20 text-green-500'
                                            : 'bg-foreground/10 text-muted-foreground'
                                        }`}>
                                        {milestone.completed ? '✓' : (index + 1)}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{milestone.title}</h3>
                                        <p className="text-sm text-muted-foreground">{milestone.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Updates */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-background/50 backdrop-blur-sm rounded-xl border border-foreground/10 p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
                        <div className="space-y-6">
                            {project.recentUpdates.map((update) => (
                                <div key={update.date} className="border-l-2 border-foreground/10 pl-4">
                                    <p className="text-sm text-muted-foreground mb-1">{update.date}</p>
                                    <p className="font-medium">{update.message}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
} 