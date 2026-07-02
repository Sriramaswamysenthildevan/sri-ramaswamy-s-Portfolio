export const skills = {
  languages: {
    title: "Languages",
    icon: "code",
    items: [
      { name: "C", icon: "⚙️" },
      { name: "C++", icon: "➕" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "🟨" },
    ],
  },
  core: {
    title: "Core CS",
    icon: "cpu",
    items: [
      { name: "Data Structures", icon: "🌳" },
      { name: "Algorithms", icon: "🔄" },
      { name: "Operating Systems", icon: "🖥️" },
      { name: "OOP", icon: "📦" },
    ],
  },
  backend: {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", icon: "🟩" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Streamlit", icon: "📊" },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
    ],
  },
  databases: {
    title: "Databases",
    icon: "database",
    items: [
      { name: "SQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  cloudDevops: {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
  machineLearning: {
    title: "Machine Learning",
    icon: "brain",
    items: [
      { name: "Scikit-learn", icon: "🧠" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
    ],
  },
  tools: {
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
    ],
  },
};

export const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company: "SRM Institute of Science and Technology, Trichy",
    period: "2022 - 2026",
    description: "CGPA: 8.40 / 10",
    type: "education" as const,
  },
  {
    title: "Research: AR/VR Applications",
    company: "Academic Research",
    period: "Present",
    description: "Explored applications of AR/VR in healthcare diagnostics and engineering simulations. Analyzed impact on modeling, training, and immersive learning systems.",
    type: "experience" as const,
  },
  {
    title: "Secretary – Clubs and Cultural Activities",
    company: "SRM IST",
    period: "Active",
    description: "Coordinated and executed 40+ technical and cultural events. Demonstrated leadership, teamwork, and communication skills.",
    type: "leadership" as const,
  },
];

export const projects = [
  {
    title: "AI Clinical Risk Assessment Platform",
    description: "Designed and implemented an end-to-end machine learning system for real-time clinical risk prediction. Optimized model performance using Logistic Regression, Random Forest, and XGBoost, and integrated an OCR pipeline for medical data extraction.",
    techStack: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "OCR"],
    github: "https://github.com/Sriramaswamysenthildevan",
    live: "",
    image: "",
    featured: true,
  },
  {
    title: "Adaptive AI Learning Platform",
    description: "Developed a personalized learning system with progress tracking and a recommendation engine. Implemented backend APIs for adaptive content delivery and integrated cloud-based services for scalable deployment.",
    techStack: ["Node.js", "Python", "Cloud Services", "API"],
    github: "https://github.com/Sriramaswamysenthildevan",
    live: "",
    image: "",
    featured: true,
  },
  {
    title: "Real-Time Collaborative Notes",
    description: "Built a real-time distributed application supporting multi-user synchronization. Implemented concurrency handling, data consistency across clients, and role-based authentication with version control.",
    techStack: ["JavaScript", "Node.js", "WebSockets", "Databases"],
    github: "https://github.com/Sriramaswamysenthildevan",
    live: "",
    image: "",
    featured: false,
  },
  {
    title: "Serverless Cloud App with CI/CD",
    description: "Developed a scalable backend using AWS Lambda and API Gateway. Designed an event-driven architecture for efficient request handling and automated the CI/CD pipeline using GitHub Actions.",
    techStack: ["AWS Lambda", "API Gateway", "GitHub Actions", "Event-Driven"],
    github: "https://github.com/Sriramaswamysenthildevan",
    live: "",
    image: "",
    featured: false,
  },
];

export const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", icon: "☁️" },
  { name: "MongoDB Fundamentals", issuer: "MongoDB", icon: "🍃" },
  { name: "IBM Data Science Tools", issuer: "IBM", icon: "🔍" },
  { name: "ServiceNow Fundamentals", issuer: "ServiceNow", icon: "⚙️" },
];
