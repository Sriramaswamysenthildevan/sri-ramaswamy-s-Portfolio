export const skills = {
  languages: {
    title: "Languages",
    icon: "code",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "SQL", icon: "🗃️" },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
    ],
  },
  backend: {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Flask", icon: "🌶️" },
      { name: "Node.js", icon: "🟩" },
    ],
  },
  devops: {
    title: "DevOps",
    icon: "container",
    items: [
      { name: "Linux", icon: "🐧" },
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Jenkins", icon: "🔧" },
      { name: "Terraform", icon: "🏗️" },
      { name: "AWS", icon: "☁️" },
      { name: "GitHub Actions", icon: "⚡" },
      { name: "Nginx", icon: "🌊" },
    ],
  },
  databases: {
    title: "Databases",
    icon: "database",
    items: [
      { name: "MySQL", icon: "🐬" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  tools: {
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎯" },
      { name: "Git", icon: "📦" },
      { name: "Docker Desktop", icon: "🐳" },
    ],
  },
};

export const experiences = [
  {
    title: "Final Year CSE Student",
    company: "University",
    period: "2022 - 2026",
    description:
      "Pursuing Computer Science Engineering with focus on DevOps, Cloud Computing, and Full-Stack Development.",
    type: "education" as const,
  },
  {
    title: "Open Source Contributor",
    company: "GitHub",
    period: "2024 - Present",
    description:
      "Contributing to open-source projects, documenting learning journeys (Linux, Docker, Git), and building public portfolios of technical knowledge.",
    type: "experience" as const,
  },
  {
    title: "Student Leader",
    company: "Student Council",
    period: "2023 - 2024",
    description:
      "Led technical events, organized workshops on web development and cloud computing, mentored junior students.",
    type: "leadership" as const,
  },
];

export const projects = [
  {
    title: "AI Reverse Classroom",
    description:
      "An AI-powered reverse classroom platform that transforms traditional learning with intelligent content generation and student engagement tools.",
    techStack: ["React", "Node.js", "Python", "AI/ML"],
    github: "https://github.com/sriramaswamy/ai-reverse-classroom",
    live: "",
    image: "",
    featured: true,
  },
  {
    title: "HealthSense",
    description:
      "Disease prediction system using Machine Learning with OCR-based medical report analysis and Flask backend.",
    techStack: ["Python", "ML", "OCR", "Flask"],
    github: "https://github.com/sriramaswamy/healthsense",
    live: "",
    image: "",
    featured: true,
  },
  {
    title: "Git & GitHub Learning",
    description:
      "100 days of comprehensive Git and GitHub documentation — commands, workflows, branching strategies, and best practices.",
    techStack: ["Git", "GitHub", "Markdown", "Documentation"],
    github: "https://github.com/sriramaswamy/git-github-learning",
    live: "",
    image: "",
    featured: false,
  },
  {
    title: "Linux Learning",
    description:
      "Structured learning repository covering Linux commands, shell scripting, file management, and system administration.",
    techStack: ["Linux", "Bash", "Shell", "Documentation"],
    github: "https://github.com/sriramaswamy/linux-learning",
    live: "",
    image: "",
    featured: false,
  },
  {
    title: "Docker Learning",
    description:
      "Hands-on Docker learning: containers, images, compose, networking, volumes, and real-world deployment scenarios.",
    techStack: ["Docker", "Docker Compose", "Containers"],
    github: "https://github.com/sriramaswamy/docker-learning",
    live: "",
    image: "",
    featured: false,
  },
];

export const certifications = [
  { name: "Linux Essentials", issuer: "Linux Professional Institute", icon: "🐧" },
  { name: "Docker Fundamentals", issuer: "Docker Inc.", icon: "🐳" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: "☁️" },
  { name: "GitHub Foundations", issuer: "GitHub", icon: "🐙" },
  { name: "Google IT Support", issuer: "Google / Coursera", icon: "🔍" },
  { name: "Cisco Networking", issuer: "Cisco", icon: "🌐" },
];
