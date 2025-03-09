import { Project, ProjectStatus } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Website Redesign",
    description:
      "Complete overhaul of the company website with modern design principles and improved user experience",
    status: "In Progress" as ProjectStatus,
    startDate: "2024-03-01",
    estimatedEndDate: "2024-04-15",
    progress: 60,
    priority: "High" as const,
    team: [
      { name: "John Doe", role: "Lead Designer" },
      { name: "Jane Smith", role: "Developer" },
    ],
    slug: "website-redesign",
    logo: "/projects/website-redesign.svg",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application with React Native for seamless user engagement",
    status: "Pending" as ProjectStatus,
    startDate: "2024-03-15",
    estimatedEndDate: "2024-05-30",
    progress: 0,
    priority: "Medium" as const,
    team: [
      { name: "Mike Johnson", role: "Project Manager" },
      { name: "Sarah Wilson", role: "Developer" },
    ],
    slug: "mobile-app",
    logo: "/projects/mobile-app.svg",
  },
  {
    id: "3",
    title: "Brand Identity Update",
    description:
      "Comprehensive brand refresh including logo, color palette, and design system",
    status: "Finished" as ProjectStatus,
    startDate: "2024-02-01",
    estimatedEndDate: "2024-03-01",
    progress: 100,
    priority: "Low" as const,
    team: [{ name: "Emily Brown", role: "Brand Designer" }],
    slug: "brand-identity",
    logo: "/projects/brand-identity.svg",
  },
  {
    id: "4",
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce solution with inventory management and payment processing",
    status: "In Progress" as ProjectStatus,
    startDate: "2024-03-10",
    estimatedEndDate: "2024-06-15",
    progress: 35,
    priority: "High" as const,
    team: [
      { name: "Alex Turner", role: "Tech Lead" },
      { name: "Maria Garcia", role: "Frontend Developer" },
      { name: "David Chen", role: "Backend Developer" },
    ],
    slug: "ecommerce-platform",
    logo: "/projects/ecommerce.svg",
  },
  {
    id: "5",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive visualizations and reporting",
    status: "Pending" as ProjectStatus,
    startDate: "2024-04-01",
    estimatedEndDate: "2024-05-15",
    progress: 0,
    priority: "Medium" as const,
    team: [
      { name: "Sophie Martin", role: "Data Scientist" },
      { name: "James Wilson", role: "UI Developer" },
    ],
    slug: "analytics-dashboard",
    logo: "/projects/analytics.svg",
  },
];
