import { Experience, Project, Education, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  email: "tanmoy.ieor@gmail.com",
  phone: "(512) 801-6511",
  linkedin: "https://www.linkedin.com/in/tanmoyie",
  location: "Austin, Texas",
  resume: "https://drive.google.com/file/d/1GH93OeRo_eIs_bmQe5Hk6z2hEL5V9WQb/view?usp=sharing"
};

export const ABOUT_TEXT = `I am passionate about solving real-world problems through data-driven decision-making. With over 5 years of experience in AI and operations research, I specialize in logistics and FinTech optimization.

I am currently a postdoctoral scientist in Operations Research, focusing on vehicle routing, exact algorithms like Column Generation and Benders Decomposition, and heuristic design. I hold a Ph.D. in Industrial Engineering from Dalhousie University, Canada.`;

export const EXPERIENCES: Experience[] = [
  {
    id: "postdoc-texas",
    role: "Operations Research Postdoc",
    company: "Texas State University",
    location: "USA",
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
    role: "Data Scientist",
    company: "Dalhousie University",
    location: "Canada",
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
    location: "USA",
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
    id: "da-upwork",
    role: "Data Analyst",
    company: "Upwork Inc.",
    location: "Bangladesh",
    period: "Jan 2018 – Aug 2019",
    description: [
      "Conducted exploratory data analysis, pipeline configuration, reducing cost by 32% in financial market.",
      "Applied causal inference, hypothesis testing, time series analysis, A/B experiments, data structure and algorithms.",
      "Analyzed Yahoo Finance stock data to identify trends and patterns, and optimized investment portfolio, saving 15hr/week.",
      "Produced technical reports and dashboards for data visualization, decisions-making, and communicating results."
    ],
    tools: "AWS, Agile, YAML, DAG, Databricks, Snowflake, PowerBI, R, Excel"
  },
  {
    id: "prof-mist",
    role: "Assistant Professor/Lecturer",
    company: "Military Inst of Sci & Tech",
    location: "Bangladesh",
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

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning",
    skills: ["Regression", "Clustering", "Deep Learning", "Ensemble Learning", "XGBoost", "GCP", "CI/CD", "LLM", "Supervised/Unsupervised Learning"]
  },
  {
    title: "Data Science",
    skills: ["Data Structures & Algorithms", "Data Mining", "OOP", "Parallel Computing", "Data Governance", "Strategic Planning", "Python", "R", "SQL"]
  },
  {
    title: "OR Algorithms",
    skills: ["Branch & Bound", "Branch & Cut", "Simplex", "Heuristics (Greedy)", "Metaheuristics (GA)", "Column Generation"]
  },
  {
    title: "Supply Chain",
    skills: ["Facility Location", "Network Design", "Routing Problems (VRP, TSP)", "Simulation"]
  },
  {
    title: "OR Models",
    skills: ["Integer Programming", "MIP", "MIQP", "MINLP", "Dynamic Programming", "Stochastic Programming"]
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
    image: "https://images.unsplash.com/photo-1505663919891-b6a88b835957?q=80&w=1200&auto=format&fit=crop",
    metrics: ["92% prediction accuracy"],
    links: [{ label: "Publication", url: "https://journals.sagepub.com/doi/10.1177/14750902211039659" }]
  },
  {
    id: "mip-resource-alloc",
    title: "A mixed integer programming approach to improve oil spill response resource allocation in the Canadian arctic",
    problem: "Allocate scarce oil spill response resources efficiently across the vast, remote Canadian Arctic.",
    solution: "Proposed a Mixed Integer Linear Programming (MILP) model to optimize equipment location and allocation strategies.",
    tags: ["MIP", "Gurobi", "Optimization", "Python", "Logistics"],
    image: "https://images.unsplash.com/photo-1548600140-5936780c1071?q=80&w=1200&auto=format&fit=crop",
    metrics: ["Optimized resource allocation", "Improved response time"],
    links: [{ label: "Publication", url: "https://www.sciencedirect.com/science/article/pii/S2772586323000424?via%3Dihub" }]
  },
  {
    id: "arctic-facility",
    title: "Multiobjective facility location model for optimizing Arctic oil spill response",
    problem: "Balance conflicting objectives of cost and coverage when locating response facilities.",
    solution: "Developed Multiobjective Facility Location model maximizing spill coverage while minimizing cost and response time.",
    tags: ["Multiobjective Optimization", "Branch & Cut", "Gurobi", "Python"],
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
    metrics: ["90% spill coverage", "Cost minimized"],
    links: [{ label: "Publication", url: "https://www.tandfonline.com/eprint/CWQTBMYKYY8TDZ2KGNYW/full?target=10.1080/03155986.2025.2539634" }]
  }
];