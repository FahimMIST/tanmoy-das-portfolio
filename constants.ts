import { Experience, Project, Education, SkillCategory, Testimonial } from './types';

export const SOCIAL_LINKS = {
  phone: "(512) 801-6511",
  linkedin: "https://www.linkedin.com/in/tanmoyie",
  location: "Nashville, Tennessee"
};

export const ABOUT_TEXT = `I love story-telling with data. I use data to make business decisions in fast-paced and customer-centric environments.

I am a data professional with work experience in applying analytics, machine learning, and applied optimization tools to solve real-world problems and to recommend data-driven solutions. During my Ph.D. at Dalhousie University, I conducted research on building and deploying machine learning and optimization models, and delivering data science projects.

My soft skills include analytical decision-making, communication, Delegation, Teamwork, Adaptability, Creative problem-solving, Trustworthiness, and Tech-savviness. At personal level, I do portrait photography and love travelling.`;

export const EXPERIENCES: Experience[] = [
  {
    id: "insight-enterprises",
    role: "Principal Data Scientist",
    company: "Insight",
    location: "Arizona, USA",
    period: "Nov 2024 – Present",
    description: []
  },
  {
    id: "postdoc-texas",
    role: "Operations Research Postdoc",
    company: "Texas State University",
    location: "Texas, USA",
    period: "Sep 2024 – Sep 2025",
    description: [
      "Developing optimization models for the Vehicle Routing Problem with Pickup and Delivery to minimize drone’s energy consumption, enhancing sustainability in supply chains.",
      "Implementing Reinforcement Learning, Column Generation and heuristics to solve large-scale optimization and to optimize transportation in Central Texas.",
      "Experience in TSP, VRP, Mixed Integer Programming, Benders Decomposition."
    ],
    tools: "Gurobi, Python"
  },
  {
    id: "ds-dalhousie",
    role: "Data Scientist: PhD Candidate in Dalhousie University",
    company: "Dalhousie University",
    location: "Halifax, Canada",
    period: "Sep 2019 – Dec 2023",
    description: [
      "Managed data analytics and operations research based Decision Support Tool for spill response.",
      "Collaborated with cross-functional teams and stakeholders to translate complex analytics into actionable strategies and real-world impact.",
      "Built predictive analytics models e.g. Neural Network and Tree-based ML models. 93.7% predictive accuracy and 18x faster than engineering model.",
      "14% improved effectiveness and 3.26 hours shorter response time by AI models for a facility location and asset allocation to maximize demand coverage and minimize cost.",
      "Developed geospatial data analytics and big data solutions and digital twins e.g. Bayesian Inference model to rank technologies.",
      "Worked in full development cycle including design, development, impact assessment, A/B testing and numerical optimization."
    ],
    tools: "Python, Gurobi, Tensorflow, PySpark, Pandas, Numpy, Scikit, PyMC3, SQL, ArcGIS, Geopandas"
  },
  {
    id: "ds-strategic",
    role: "Data Scientist (Operations Research)",
    company: "Strategic Financial Solutions",
    location: "New York, USA",
    period: "Jan 2022 – Sep 2022",
    description: [
      "Managed mathematical programming project to minimize debt settlement time and cost constrained by available balance, creditor and other financial factors in AIMMS and Python.",
      "Partnering with business leaders and technical teams to develop solutions for real-world challenges.",
      "Wrote modular, and concise code in Python, assisted in deploying model to production. Built machine learning models to classify high-risk credit card defaults.",
      "Drove continuous improvement and business values by proposing effective data strategy, integrating data governance and risk management."
    ],
    tools: "AIMMS, Azure ML, CPLEX API, R, PyTorch, MLOps"
  },
  {
    id: "prof-mist",
    role: "Assistant Professor/Lecturer",
    company: "Military Inst of Sci & Tech",
    location: "Dhaka, Bangladesh",
    period: "Jan 2017 – Jun 2019",
    description: [
      "Taught Operations Research, Probability and Statistics, Computer Programming at university level.",
      "Mentored an undergraduate thesis project on Reinforcement Learning for obstacle detection of automated guided vehicle.",
      "Managed 4 multidisciplinary and collaborative analytics projects."
    ],
    tools: "Google OR Tool, Minitab, Matlab"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "phd",
    degree: "PhD in Industrial Engineering (Operations Research)",
    institution: "Dalhousie University",
    period: "2019 – 2024",
    details: "Specialized in optimization algorithms, and modeling of maritime transportation and logistics system."
  },
  {
    id: "masters",
    degree: "Master’s in Industrial Engineering",
    institution: "Florida State University",
    period: "2013 – 2015"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "jose-roa",
    name: "Jose Roa De La Fuente",
    role: "Senior .Net Developer Architect",
    company: "ADP",
    initials: "JR",
    text: "Tanmoy combines analytical expertise with a deep understanding of CRM systems. His work ethic and ability to exceed project expectations stand out... Tanmoy is a proactive, innovative professional whose contributions significantly impacted our company. I have no doubt he will continue to excel."
  },
  {
    id: "floris-goerlandt",
    name: "Floris Goerlandt",
    role: "Canada Research Chair in Risk Management",
    company: "Dalhousie University",
    initials: "FG",
    text: "Tanmoy has demonstrated exceptional intellectual abilities, a strong work ethic, and a keen passion for socially relevant research. He modelled accidental oil spills and spill response effectiveness utilizing data science and optimization tools. Tanmoy is well-organized, respectful, and a pleasure to work with."
  },
  {
    id: "fahim-montasir",
    name: "Fahim Montasir",
    role: "Product Analyst",
    company: "Tech",
    initials: "FM",
    text: "Tanmoy sir is one of the best teachers in the modern era. He can encourage students to go for the extreme goal and get them out of their comfort zone. My professional career has been significantly improved by his teachings."
  },
  {
    id: "runbang-tang",
    name: "Runbang Tang",
    role: "Applied Scientist",
    company: "Amazon | Ex-TikTok",
    initials: "RT",
    text: "We collaborated on determining right metrics for an imbalance classification problem. He presented a prototype of mathematical optimization model to the DS team. I found him clearly communicating ideas & data to both technical and non-technical audiences."
  },
  {
    id: "nadia-tanzeem",
    name: "Nadia Tanzeem",
    role: "Lecturer",
    company: "Texas State University",
    initials: "NT",
    text: "I've always been mesmerized with his ability to handle situations and to work well with his colleagues & team-mates. In addition to his academic qualifications, Tanmoy has personal qualities that make him well-suited to leadership. He naturally falls into the role of 'point person'."
  },
  {
    id: "denise-callahan",
    name: "Denise Callahan",
    role: "Educator",
    company: "Dalhousie University",
    initials: "DC",
    text: "His verbal & written communication skills are exemplary. Tanmoy has strong communication skills and passion for problem-solving. His professional, respectful attitude, and positive energy was consistent throughout the course."
  },
  {
    id: "reyhaneh-sadeghi",
    name: "Reyhaneh Sadeghi",
    role: "Postdoctoral Fellow",
    company: "Maritime Risk and Safety",
    initials: "RS",
    text: "He has strong communication skills and passion for problem-solving. We have learned and applied statistical techniques and data analytics in an academic project together."
  },
  {
    id: "mostafa-gilanifar",
    name: "Mostafa (Moe) Gilanifar",
    role: "Data Science Manager",
    company: "AI & Machine Learning Advocate",
    initials: "MG",
    text: "He is a very talented person with deep understanding in Machine Learning. He has a great personality, and communication skills which makes it easy to work with him."
  },
  {
    id: "azam-safiul",
    name: "Azam Safiul",
    role: "Recruitment Consultant",
    company: "TJS Consultants",
    initials: "AS",
    text: "Tanmoy is a very talented professional. He conducted several training sessions on 'Fundamentals of Industry 4.0 & Data Science' which were an eye-opener for many of our aspirants."
  },
  {
    id: "akm-khabirul",
    name: "AKM Khabirul Islam",
    role: "Head of IPE Dept",
    company: "MIST",
    initials: "AK",
    text: "Tanmoy Das is a gifted negotiator with a combination of patience and research skills. His students applauded him for his teaching style in core courses of Industrial Engineering."
  },
  {
    id: "bablu-roy",
    name: "Bablu Roy",
    role: "Head of Procurement",
    company: "SHV Energy BD",
    initials: "BR",
    text: "Personally I observed Tanmoy having a very positive attitude and 'can do' mentality. The guy is very cooperative and helpful to anyone from any community."
  },
  {
    id: "abhishek-shrivastava",
    name: "Abhishek Shrivastava",
    role: "DS & ML Leader",
    company: "Capital One",
    initials: "AS",
    text: "Tanmoy is a hardworking individual. One of his strongest qualities is his ability to communicate and work with people. I observed that he was very popular among his peers."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Operations Research",
    skills: ["Stochastic Programming", "LP/MIP/MINLP", "Gurobi", "Graph Theory", "Scheduling", "TSP", "Complexity Analysis"]
  },
  {
    title: "Machine Learning",
    skills: ["Regression", "Clustering", "Random Forest", "SVM", "Bayesian Network", "Gen AI", "MLOps", "Forecasting", "Ensemble Learning"]
  },
  {
    title: "Data Science",
    skills: ["Statistical Modeling", "Data Mining", "Visualization", "Bayesian Statistics", "Data Warehousing", "Data Cleaning"]
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "R", "SQL", "C++", "Scala", "Spark", "Git", "Tableau", "PowerBI"]
  },
  {
    title: "Cloud & Databases",
    skills: ["Google Cloud", "Azure", "AWS", "Big Query", "NoSQL", "MongoDB"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Critical Thinking", "Adaptability", "Teamwork", "Business Acumen"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bayesian-response",
    title: "Bayesian inference modeling to rank response technologies in arctic marine oil spills",
    problem: "Rank response technologies in arctic marine oil spills, where historical data is scarce and conditions are extreme.",
    solution: "Developed a Bayesian inference model integrating expert knowledge and limited data to aid decision-making under uncertainty.",
    tags: ["Bayesian Inference", "Decision Support", "Risk Analysis", "Python", "PyMC3"],
    image: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=1200&auto=format&fit=crop",
    metrics: [],
    links: [{ label: "Publication", url: "https://www.sciencedirect.com/science/article/abs/pii/S0025326X22008852?via%3Dihub" }]
  },
  {
    id: "oil-spill-ml",
    title: "An optimized metamodel for predicting damage and oil outflow in tanker collision accidents",
    problem: "Predict damage and oil outflow from tanker collisions to improve safety standards.",
    solution: "Developed DNN, GBRT, and Polynomial Regression models trained on Monte Carlo simulated collision data.",
    tags: ["Deep Learning", "PyTorch", "Scikit-learn", "Regression", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    metrics: ["92% prediction accuracy"],
    links: [{ label: "Publication", url: "https://journals.sagepub.com/doi/10.1177/14750902211039659" }]
  },
  {
    id: "mip-resource-alloc",
    title: "A mixed integer programming approach to improve oil spill response resource allocation in the Canadian arctic",
    problem: "Allocate scarce oil spill response resources efficiently across the vast, remote Canadian Arctic.",
    solution: "Proposed a Mixed Integer Linear Programming (MILP) model to optimize equipment location and allocation strategies.",
    tags: ["MIP", "Gurobi", "Optimization", "Python", "Logistics"],
    image: "https://raw.githubusercontent.com/tanmoyie/Decision-Support-Tool/main/Canadian%20Arctic%20GIS%20JP3.gif",
    metrics: ["Optimized resource allocation", "Improved response time"],
    links: [{ label: "Publication", url: "https://www.sciencedirect.com/science/article/pii/S2772586323000424?via%3Dihub" }]
  },
  {
    id: "arctic-facility",
    title: "Multiobjective facility location model for optimizing Arctic oil spill response",
    problem: "Balance conflicting objectives of cost and coverage when locating response facilities.",
    solution: "Developed Multiobjective Facility Location model maximizing spill coverage while minimizing cost and response time.",
    tags: ["Multiobjective Optimization", "Branch & Cut", "Gurobi", "Python"],
    image: "https://raw.githubusercontent.com/tanmoyie/Decision-Support-Tool/main/Graphical%20abstract%20Multiobjective%20Facility%20Location%20Model.png",
    metrics: ["90% spill coverage", "Cost minimized"],
    links: [{ label: "Publication", url: "https://www.tandfonline.com/eprint/CWQTBMYKYY8TDZ2KGNYW/full?target=10.1080/03155986.2025.2539634" }]
  }
];