import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Akshay John A",
    title: "Data Science Postgraduate",
    location: "Bengaluru, Karnataka, India",
    bio: "I am a Data Science postgraduate with a strong foundation in Python, SQL, statistics, machine learning, and data visualization. I am passionate about using data and AI to solve real-world problems and building practical, data-driven solutions.",
    email: "akshayjohn661@gmail.com",
    phone: "8867158023",
    linkedin: "https://www.linkedin.com/in/akshay-john-245179265",
    github: "https://github.com/akshay-john",
    avatarUrl: "/images/profile.jpg",
    resumeUrl: "/resume/Akshay_John_Resume.pdf",
    websiteUrl: "https://akshay-john-portfolio-main.vercel.app",
  },
  typingRoles: [
    "Data Scientist",
    "AI/ML Engineer",
    "ML Engineer",
    "Data Analyst",
    "BI Analyst",
    "AI Engineer",
    "Data Engineer",
  ],
  education: [
    {
      degree: "MSc Data Science",
      institution: "Kristu Jayanti Institute of Technology",
      period: "2025 – 2027",
      status: "Currently Pursuing",
      description: "Advanced post-graduate program specializing in machine learning algorithms, deep learning, statistical inference, big data analytics, and cloud AI architecture.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kristu Jayanti Autonomous College",
      period: "2022 – 2025",
      description: "Comprehensive foundational degree in computer science, software development, relational databases, data structures, object-oriented programming, and web technologies.",
    },
  ],
  experience: [
    {
      role: "AI/ML Intern",
      company: "CYNUX ERA",
      duration: "2 Months",
      isLeadership: true,
      highlights: [
        "Served as Team Lead coordinating task allocation, sprint goals, and technical execution.",
        "Engineered AI/ML project architecture and integrated machine learning endpoints.",
        "Collaborated cross-functionally to drive chatbot and conversational AI development.",
        "Implemented natural language processing algorithms and cloud service integrations.",
      ],
    },
  ],
  projects: [
    {
      id: "ai-chatbot-college-helpdesk",
      title: "AI Chatbot for College Helpdesk",
      description:
        "An AI-powered college helpdesk chatbot designed to assist students by providing automated responses to common college-related queries and improving access to campus information.",
      technologies: [
        "Python",
        "Flask",
        "OpenAI API",
        "Dialogflow",
        "Google Cloud Dialogflow",
        "Google Cloud Speech",
        "NLP",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLite",
      ],
      features: [
        "Automated FAQ response system for student queries",
        "Multimodal text and voice interaction interface",
        "Instant access to attendance and timetable query workflows",
        "Comprehensive college information lookup and retrieval",
        "Natural language AI-powered conversational answers",
      ],
      githubUrl: "https://github.com/Cynux-Era-LLP/AI-Chatbot-for-college-helpdesk.git",
      isFeatured: true,
      categoryBadge: "Featured AI Project",
      subcategoryBadge: "Conversational AI",
    },
    {
      id: "olist-ecommerce-sales-analysis",
      title: "Olist E-Commerce Sales & BI Analysis",
      description:
        "An in-depth data and business intelligence analysis of 90,000+ e-commerce orders on Brazil's largest marketplace platform, utilizing PostgreSQL, Python statistical modeling, and interactive Tableau dashboards.",
      technologies: [
        "PostgreSQL",
        "Python",
        "Pandas",
        "SciPy",
        "Tableau",
        "SQL",
        "Exploratory Data Analysis",
        "Kruskal-Wallis Test",
        "Mutual Information Regression",
        "Data Visualization",
      ],
      features: [
        "Modeled partition-level sales growth rates (+22.26% overall YoY growth) and average order values",
        "Executed non-parametric Kruskal-Wallis hypothesis tests (p = 1.41e-236) on category lead times",
        "Evaluated Mutual Information regression to quantify delivery impact on customer review scores",
        "Built interactive executive Tableau dashboards detailing regional fulfillment performance",
        "Formulated cross-functional recommendations for Sales, Marketing, and Logistics optimization",
      ],
      githubUrl: "https://github.com/akshay-john/olist-analysis.git",
      liveUrl: "https://public.tableau.com/app/profile/owen.xu/viz/OlistDashboard_17235986569100/OlistDashboard",
      isFeatured: true,
      categoryBadge: "Featured Analytics Project",
      subcategoryBadge: "Business Intelligence",
    },
  ],
  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", iconName: "Code2" },
        { name: "SQL", iconName: "Database" },
        { name: "Java", iconName: "Coffee" },
        { name: "C/C++", iconName: "Cpu" },
        { name: "JavaScript", iconName: "FileCode" },
      ],
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", iconName: "Table" },
        { name: "NumPy", iconName: "Binary" },
        { name: "Statistics", iconName: "Sigma" },
        { name: "Data Cleaning", iconName: "Sparkles" },
        { name: "Exploratory Data Analysis", iconName: "LineChart" },
        { name: "Data Wrangling", iconName: "Filter" },
      ],
    },
    {
      category: "AI / ML",
      skills: [
        { name: "Machine Learning", iconName: "Brain" },
        { name: "Scikit-learn", iconName: "Bot" },
        { name: "Natural Language Processing", iconName: "MessageSquareText" },
        { name: "Generative AI", iconName: "Wand2" },
        { name: "AI Chatbots", iconName: "Bot" },
        { name: "Predictive Modeling", iconName: "TrendingUp" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", iconName: "Database" },
        { name: "MySQL", iconName: "Database" },
        { name: "SQL Server", iconName: "Server" },
        { name: "SQLite", iconName: "HardDrive" },
      ],
    },
    {
      category: "Visualization",
      skills: [
        { name: "Tableau", iconName: "BarChart3" },
        { name: "Power BI", iconName: "BarChart3" },
        { name: "Matplotlib", iconName: "PieChart" },
        { name: "Seaborn", iconName: "Activity" },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", iconName: "Layout" },
        { name: "CSS", iconName: "Palette" },
        { name: "JavaScript", iconName: "FileCode" },
        { name: "Flask", iconName: "Globe" },
      ],
    },
    {
      category: "Cloud & Tools",
      skills: [
        { name: "Microsoft Azure", iconName: "Cloud" },
        { name: "Git", iconName: "GitBranch" },
        { name: "GitHub", iconName: "GitBranch" },
        { name: "VS Code", iconName: "Terminal" },
        { name: "Jupyter Notebook", iconName: "BookOpen" },
        { name: "Microsoft Power Platform", iconName: "Layers" },
      ],
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Power Platform Fundamentals",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/credentials/",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/credentials/",
    },
    {
      title: "NPTEL — The Joy of Computing Using Python",
      issuer: "NPTEL / IIT",
      verifyUrl: "https://nptel.ac.in/noc/",
    },
    {
      title: "Palo Alto Networks — Cybersecurity Fundamentals",
      issuer: "Palo Alto Networks",
    },
    {
      title: "Infosys — Network Fundamentals & Blockchain Foundation",
      issuer: "Infosys Springboard",
    },
    {
      title: "Blockchain Technologies & Applied Smart Contracts",
      issuer: "Professional Certification",
    },
  ],
};
