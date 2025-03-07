export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        title: "Modern E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory, AI-powered recommendations, and seamless payment integration.",
        image: "/images/projects/ecommerce.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
        link: "#",
        github: "https://github.com/yourusername/ecommerce",
        featured: true
    },
    {
        title: "AI Content Generator",
        description: "An AI-powered platform that generates high-quality content using advanced language models and machine learning algorithms.",
        image: "/images/projects/configurator.jpg",
        tags: ["React", "Python", "TensorFlow", "OpenAI", "MongoDB"],
        link: "#",
        github: "https://github.com/yourusername/ai-generator",
        featured: true
    },
    {
        title: "Real-time Analytics Dashboard",
        description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and predictive analytics.",
        image: "/images/projects/dashboard.jpg",
        tags: ["Vue.js", "D3.js", "Node.js", "WebSocket", "Redis"],
        link: "#",
        github: "https://github.com/yourusername/analytics",
        featured: true
    }
]; 