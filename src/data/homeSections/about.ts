export type SkillSet = {
  category: string;
  items: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export const skills: SkillSet[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Methods",
    items: ["Git", "Docker", "CI/CD", "Agile", "Testing"],
  },
];

export const stats: Stat[] = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "20+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

export const journeyContent = {
  title: "My Journey",
  paragraphs: [
    "With over 5 years of experience in software development, I specialize in building modern web applications that combine beautiful design with powerful functionality.",
    "My approach to development focuses on creating intuitive user experiences while maintaining clean, efficient code. I'm passionate about staying current with the latest technologies and best practices.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
};
