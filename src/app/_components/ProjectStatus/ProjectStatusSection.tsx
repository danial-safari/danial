import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectStatus, SortOption, SortDirection } from './types';
import { ProjectCalendarFilter } from './components/ProjectCalendarFilter';
import { ProjectViewSwitcher } from './components/ProjectViewSwitcher';
import { QuickSortMenu } from './components/QuickSortMenu';
import { ProjectCalendarView } from './components/ProjectCalendarView';
import { ProjectTimelineView } from './components/ProjectTimelineView';
import { ProjectList } from './components/ProjectList';
import { ProjectCard } from './components/ProjectCard';
import { useProjects } from './hooks/useProjects';
import { getStatusColor } from './utils/styles';

// Example projects data (replace with your actual data source)
const initialProjects = [
    {
        id: '1',
        title: 'Website Redesign',
        description: 'Complete overhaul of the company website',
        status: 'In Progress' as ProjectStatus,
        startDate: '2024-03-01',
        estimatedEndDate: '2024-04-15',
        progress: 60,
        priority: 'High' as const,
        team: [
            { name: 'John Doe', role: 'Lead Designer' },
            { name: 'Jane Smith', role: 'Developer' },
        ],
        slug: 'website-redesign',
        logo: '/projects/website-redesign.svg',
    },
    {
        id: '2',
        title: 'Mobile App Development',
        description: 'New mobile app for customer engagement',
        status: 'Pending' as ProjectStatus,
        startDate: '2024-03-15',
        estimatedEndDate: '2024-05-30',
        progress: 0,
        priority: 'Medium' as const,
        team: [
            { name: 'Mike Johnson', role: 'Project Manager' },
            { name: 'Sarah Wilson', role: 'Developer' },
        ],
        slug: 'mobile-app',
        logo: '/projects/mobile-app.svg',
    },
    {
        id: '3',
        title: 'Brand Identity Update',
        description: 'Refresh of company brand guidelines',
        status: 'Finished' as ProjectStatus,
        startDate: '2024-02-01',
        estimatedEndDate: '2024-03-01',
        progress: 100,
        priority: 'Low' as const,
        team: [
            { name: 'Emily Brown', role: 'Brand Designer' },
        ],
        slug: 'brand-identity',
        logo: '/projects/brand-identity.svg',
    },
];

export const ProjectStatusSection = () => {
    const [viewStyle, setViewStyle] = useState<'grid' | 'list' | 'table' | 'timeline' | 'calendar'>('grid');
    const {
        selectedMonth,
        setSelectedMonth,
        selectedYear,
        setSelectedYear,
        selectedStatus,
        setSelectedStatus,
        searchQuery,
        setSearchQuery,
        currentSort,
        setCurrentSort,
        sortedProjects,
        filteredProjects,
    } = useProjects({ initialProjects });

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Status Overview</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Track the progress of our ongoing projects and see what's coming up next.
                    </p>
                </motion.div>

                {/* Filters Section */}
                <div className="space-y-6 mb-12">
                    <ProjectCalendarFilter
                        selectedMonth={selectedMonth}
                        selectedYear={selectedYear}
                        onMonthChange={setSelectedMonth}
                        onYearChange={setSelectedYear}
                    />

                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        {/* Search and Sort Controls */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1"
                        >
                            {/* Search Input */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <svg
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>

                            {/* Status Filter */}
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value as ProjectStatus | 'All')}
                                className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="All">All Statuses</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Pending">Pending</option>
                                <option value="Finished">Finished</option>
                            </select>
                        </motion.div>

                        {/* View Switcher */}
                        <ProjectViewSwitcher
                            currentView={viewStyle}
                            onViewChange={setViewStyle}
                        />
                    </div>
                </div>

                {/* Status Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {(['In Progress', 'Pending', 'Finished'] as ProjectStatus[]).map((status) => {
                        const count = filteredProjects.filter(p => p.status === status).length;
                        const statusColor = getStatusColor(status);

                        return (
                            <motion.div
                                key={status}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-xl border ${statusColor}`}
                            >
                                <h3 className="text-lg font-semibold mb-2">{status}</h3>
                                <p className="text-3xl font-bold">{count}</p>
                                <p className="text-sm text-muted-foreground">Projects</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View Controls */}
                <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                    <QuickSortMenu
                        currentSort={currentSort}
                        onSort={(option: SortOption, direction: SortDirection) => setCurrentSort({ option, direction })}
                    />
                </div>

                {/* Project Views */}
                <motion.div
                    key={viewStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {viewStyle === 'calendar' && (
                        <ProjectCalendarView projects={sortedProjects} />
                    )}
                    {viewStyle === 'timeline' && (
                        <ProjectTimelineView projects={sortedProjects} />
                    )}
                    {viewStyle === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                    {viewStyle === 'list' && (
                        <ProjectList projects={sortedProjects} />
                    )}
                    {viewStyle === 'table' && (
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
                                    {sortedProjects.map((project, index) => (
                                        <motion.tr
                                            key={project.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                            className="border-b border-foreground/5 hover:bg-foreground/5"
                                        >
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 flex-shrink-0">
                                                        {project.logo ? (
                                                            <img
                                                                src={project.logo}
                                                                alt={`${project.title} logo`}
                                                                className="w-10 h-10 rounded-lg object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                                <span className="text-lg font-semibold text-primary">
                                                                    {project.title.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium">{project.title}</h3>
                                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                                    </div>
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
                    )}
                </motion.div>
            </div>
        </section>
    );
}; 