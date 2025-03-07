export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Modern Web Applications with Next.js 14",
    excerpt:
      "Explore the latest features and best practices for building performant web applications using Next.js 14 and React Server Components.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Development",
    image: "/images/blog/3d-animation.jpg",
    href: "/blog/building-modern-web-applications",
  },
  {
    title: "The Future of Frontend Development",
    excerpt:
      "Discover emerging trends and technologies shaping the future of frontend development, from AI integration to new frameworks.",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Technology",
    image: "/images/blog/ux-design.jpg",
    href: "/blog/future-of-frontend",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt:
      "Deep dive into advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Programming",
    image: "/images/blog/web-dev.jpg",
    href: "/blog/mastering-typescript",
  },
];
