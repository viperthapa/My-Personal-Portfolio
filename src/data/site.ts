export const siteConfig = {
  name: "Ram",
  role: "Full Stack Software Engineer",
  email: "thaparam78666@gmail.com",
  phone: "(+977) 9861954985",
  location: "Kathmandu, Nepal",
  resumeUrl: "/ram_kumar_thapa.pdf",
  github: "https://github.com/viperthapa",
  linkedin: "https://www.linkedin.com/in/ram-thapa-ba2a16157/?skipRedirect=true",
  tiktok: "https://www.tiktok.com/@crack_the_stack?is_from_webapp=1&sender_device=pc",
  youtube: "https://www.youtube.com/@crack_the_stack201",
  intro:
    "Full Stack Software Engineer with 6 years of experience building scalable SaaS platforms and web applications. Python/Django/FastAPI backend specialist with React.js expertise, worked on US healthcare technology,Fintech Applications with reliable delivery, and user-centered products.",
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "5", label: "Professional Roles" },
  { value: "2", label: "Documented AI Projects" },
  { value: "10", label: "Team Members Led" },
];

export const expertise = [
  { title: "Python Backend", text: "Scalable backend systems with Django, Django REST Framework, FastAPI and Flask." },
  { title: "React Development", text: "User-focused web applications with React.js and Redux." },
  { title: "Healthcare Technology and Fintech", text: "SaaS product development for healthcare platforms and Fintech Applications serving the US market." },
  { title: "AI & Machine Learning", text: "RAG, semantic search, LLM applications and LangChain and Langgraphintegrations." },
  { title: "Team Leadership", text: "Mentoring, code reviews, client communication and delivery leadership." },
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    group: "Web Development",
    items: ["React.js", "Redux", "Express.js", "Django", "FastAPI", "Flask"],
  },
  {
    group: "Backend & Database",
    items: ["Django REST Framework", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "Tools & Platforms",
    items: ["AWS S3", "AWS IAM", "Git", "CI/CD", "Docker", "Sentry", "Auth0"],
  },
  {
    group: "Other Expertise",
    items: ["Pytest", "Jest", "Mocha", "Chai", "Agile/Scrum", "Test-Driven Development", "LLMs", "RAG", "Semantic Search", "LangChain"],
  },
];

export const experience = [
  {
    period: "Jul 2026 — Present",
    role: "Senior Software engineer",
    company: "Avaya Machine",
    location: "",
    points: [
      "Working on fintech applications and serving it to US market.",
      "Built secure ACH payment pipelines and BaaS/aggregator integrations",
      "Implemented dynamic payment routing with automatic fallback mechanisms across multiple gateways to maximize transaction success and uptime.",
      "Engineered idempotent APIs with distributed transactional locks to enforce ledger integrity and eliminate duplicate debits/credits during peak concurrency."
    ],
  },
  {
    period: "Sep 2025 — Jul 2026",
    role: "Freelance Full Stack Engineer",
    company: "Freelance",
    location: "",
    points: [
      "Engineered and deployed a custom full-stack travel platform using Python, FastAPI and React for specific client business requirements.",
    ],
  },
  {
    period: "Jan 2022 — Aug 2025",
    role: "Software Engineer II",
    company: "Leapfrog Technology Inc.",
    location: "",
    points: [
      "Developed and maintained a Python/Django and React.js SaaS healthcare platform serving the US market.",
      "Led mentoring initiatives, conducted code reviews and promoted high-quality coding standards.",
      "Monitored application performance with Sentry and managed AWS S3, secrets management and IAM configurations.",
      "Collaborated with engineers, project managers, stakeholders and customer success teams to deliver user-centric products.",
      "Built an Internship Examination Management System with Express.js and React.js, including comprehensive testing.",
      "Integrated Auth0 authentication and wrote tests with React Testing Library, Mocha and Chai.",

    ],
  },
  {
    period: "Feb 2021 — Dec 2021",
    role: "Software Engineer",
    company: "Uptechsys Pvt. Ltd.",
    location: "",
    points: [
      "Developed responsive web applications for government projects, real estate solutions and school management systems.",
      "Led a 10-member development team for a real estate solution, delivering on time and within budget.",
    ],
  },
  {
    period: "Nov 2019 — Dec 2020",
    role: "Intern → Junior Developer",
    company: "Calcgen Solutions",
    location: "",
    points: [
      "Developed Django applications including mechanical engineering tools, WWF Nepal Portal and POS systems.",
      "Provided technical support and contributed to backend development initiatives.",
    ],
  },
];

export const projects = [
  {
    title: "Online Discussion Forum",
    category: "Full Stack Web Application",
    description:
      "A community forum where users can ask questions, share answers, like or dislike posts and add comments, enhanced with machine learning for automatic question prediction.",
    stack: ["Python", "Django", "Jinja Templates", "Machine Learning"],
    metric: "Question prediction and community discussion",
  },
  {
    title: "RAG-Powered AI Chat Interface",
    category: "AI & Machine Learning",
    description:
      "A document question-answering interface that processes, embeds and retrieves multi-format documents through a vector database.",
    stack: ["FastAPI", "React.js", "LangChain", "LangGraph", "pgvector", "RAG"],
    metric: "Multi-format document retrieval",
  },
  {
    title: "NLP Retail Chatbot",
    category: "AI & Machine Learning",
    description:
      "An NLP-driven chatbot connected to a SQL database to answer real-time questions about retail products, discounts and inventory.",
    stack: ["NLP", "SQL", "Python", "LangChain", "Chatbot"],
    metric: "Real-time retail information",
  },
  {
    title: "Travel Platform",
    category: "Full Stack Web Application",
    description:
      "A custom full-stack travel platform engineered and deployed to meet specific client business requirements.",
    stack: ["Python", "FastAPI", "React"],
    metric: "Client-specific travel platform",
  },
  {
    title: "Internship Examination Management System",
    category: "Web Application",
    description:
      "An examination management system built during software engineering work with secure authentication and comprehensive testing.",
    stack: ["Express.js", "React.js", "Auth0", "Mocha", "Chai"],
    metric: "Tested examination workflow",
  },
];

export const achievements = [
  { value: "6+", label: "Years in Software Engineering" },
  { value: "10", label: "Development Team Members Led" },
  { value: "US", label: "Healthcare and Fintech SaaS Market Served" },
  { value: "BSc", label: "Computer Science & IT" },
  { value: "Intern → Junior", label: "Career Progression at Calcgen" },
];

export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [];
