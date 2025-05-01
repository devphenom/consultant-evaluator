export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "expert";
  yearsOfExperience: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Consultant {
  id: string;
  name: string;
  title: string;
  avatar: string;
  location: string;
  hourlyRate: number;
  totalProjects: number;
  experiences: Experience[];
  education: string[];
  availability: string;
  bio: string;
  // AI-evaluated fields (optional)
  fitScore?: number;
  evaluation?: string;
  pros?: string[];
  cons?: string[];
  questions?: string[];
}

export const consultants: Consultant[] = [
  {
    id: "1",
    name: "Alex Morgan",
    title: "Senior Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "San Francisco, CA",
    hourlyRate: 120,

    totalProjects: 45,
    experiences: [
      {
        company: "Tech Innovations Inc.",
        role: "Senior Software Engineer",
        duration: "2019 - Present",
        description: "Led development of multiple client projects using React, TypeScript, and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
      },
      {
        company: "Digital Solutions Ltd.",
        role: "Software Developer",
        duration: "2017 - 2019",
        description: "Developed and maintained web applications for enterprise clients. Worked with React, Redux, and REST APIs.",
      },
    ],
    education: ["M.S. Computer Science, Stanford University", "B.S. Computer Engineering, UC Berkeley"],
    availability: "Available from June 2025",
    bio: "Experienced software engineer with a passion for building scalable web applications. Specializing in frontend development with React and TypeScript. Strong advocate for clean code and test-driven development.",
  },
  {
    id: "2",
    name: "Samantha Lee",
    title: "UX/UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "New York, NY",
    hourlyRate: 95,
    totalProjects: 38,
    experiences: [
      {
        company: "Creative Design Agency",
        role: "Senior UX Designer",
        duration: "2020 - Present",
        description: "Lead UX designer for major e-commerce and fintech clients. Conduct user research, create wireframes, prototypes, and oversee implementation.",
      },
      {
        company: "Tech Startups Co.",
        role: "UI/UX Designer",
        duration: "2018 - 2020",
        description: "Designed user interfaces for mobile and web applications. Collaborated with product managers and development teams to deliver intuitive user experiences.",
      },
    ],
    education: ["B.F.A. Graphic Design, Rhode Island School of Design", "UX Design Certification, Nielsen Norman Group"],
    availability: "Available immediately",
    bio: "Passionate UX/UI designer with extensive experience in creating user-centered digital experiences. Strong believer in design thinking and iterative processes.",
  },
  {
    id: "3",
    name: "David Chen",
    title: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    location: "Seattle, WA",
    hourlyRate: 135,
    totalProjects: 22,
    experiences: [
      {
        company: "Data Insights Corp",
        role: "Lead Data Scientist",
        duration: "2021 - Present",
        description: "Lead a team of data scientists in developing predictive models for Fortune 500 clients. Implemented machine learning solutions that increased efficiency by 30%.",
      },
      {
        company: "TechGiant Inc.",
        role: "Data Analyst",
        duration: "2018 - 2021",
        description: "Analyzed large datasets to provide actionable insights. Built automated reporting systems and developed prediction models for customer behavior.",
      },
    ],
    education: ["Ph.D. Statistics, University of Washington", "B.S. Mathematics, UCLA"],
    availability: "Available from July 2025",
    bio: "Data scientist with expertise in machine learning and statistical modeling. Passionate about transforming data into meaningful insights and driving business decisions.",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    title: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    location: "Chicago, IL",
    hourlyRate: 105,
    totalProjects: 56,
    experiences: [
      {
        company: "Project Solutions Ltd.",
        role: "Senior Project Manager",
        duration: "2019 - Present",
        description: "Managed multiple software development projects with budgets exceeding $1M. Implemented agile practices that improved delivery times by 25%.",
      },
      {
        company: "Global Tech Enterprises",
        role: "Project Coordinator",
        duration: "2017 - 2019",
        description: "Coordinated software development projects from inception to delivery. Facilitated communication between stakeholders and development teams.",
      },
    ],
    education: ["MBA, University of Chicago", "B.S. Business Administration, Northwestern University", "PMP Certification"],
    availability: "Available immediately",
    bio: "Certified Project Manager with extensive experience in software development projects. Expert in agile methodologies and skilled at leading cross-functional teams to deliver exceptional results.",
  },
  {
    id: "5",
    name: "Michael Johnson",
    title: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "Austin, TX",
    hourlyRate: 110,
    totalProjects: 32,
    experiences: [
      {
        company: "Cloud Solutions Inc.",
        role: "Senior DevOps Engineer",
        duration: "2020 - Present",
        description: "Designed and implemented cloud infrastructure for enterprise clients. Automated deployment pipelines reducing deployment time by 70%.",
      },
      {
        company: "Tech Innovations Ltd.",
        role: "Systems Administrator",
        duration: "2018 - 2020",
        description: "Maintained and optimized cloud infrastructure on AWS. Implemented monitoring solutions and disaster recovery protocols.",
      },
    ],
    education: ["B.S. Computer Science, University of Texas", "AWS Certified Solutions Architect", "Kubernetes Certified Administrator"],
    availability: "Available from May 2025",
    bio: "DevOps engineer specializing in cloud infrastructure and automation. Passionate about creating efficient, scalable, and secure deployment pipelines.",
  },
  {
    id: "6",
    name: "Priya Patel",
    title: "Cloud Solutions Architect",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Denver, CO",
    hourlyRate: 140,
    totalProjects: 29,
    experiences: [
      {
        company: "CloudXperts LLC",
        role: "Lead Cloud Architect",
        duration: "2021 - Present",
        description: "Designed multi-cloud solutions for enterprise clients. Led migration projects and implemented best practices for security and scalability.",
      },
      {
        company: "NextGen Cloud",
        role: "Cloud Engineer",
        duration: "2017 - 2021",
        description: "Built and maintained cloud infrastructure, automated deployments, and improved system reliability.",
      },
    ],
    education: ["M.S. Information Systems, University of Colorado", "B.S. Computer Science, University of Michigan"],
    availability: "Available from August 2025",
    bio: "Cloud architect with deep expertise in multi-cloud environments and automation. Passionate about helping organizations modernize their infrastructure.",
  },
  {
    id: "7",
    name: "Jonas Schmidt",
    title: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    location: "Berlin, Germany",
    hourlyRate: 100,
    totalProjects: 41,
    experiences: [
      {
        company: "WebWorks GmbH",
        role: "Senior Full Stack Developer",
        duration: "2020 - Present",
        description: "Developed scalable web applications for e-commerce and SaaS clients. Led frontend and backend teams.",
      },
      {
        company: "AppDev Solutions",
        role: "Frontend Developer",
        duration: "2016 - 2020",
        description: "Built interactive UIs and optimized performance for large-scale web apps.",
      },
    ],
    education: ["Diploma in Computer Science, TU Berlin"],
    availability: "Available immediately",
    bio: "Full stack developer with a strong background in modern JavaScript frameworks and cloud-native development.",
  },
  {
    id: "8",
    name: "Fatima Al-Farsi",
    title: "Cybersecurity Consultant",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    location: "Dubai, UAE",
    hourlyRate: 150,
    totalProjects: 27,
    experiences: [
      {
        company: "SecureTech ME",
        role: "Lead Security Consultant",
        duration: "2019 - Present",
        description: "Conducted security audits and penetration tests for government and financial sector clients. Developed incident response strategies.",
      },
      {
        company: "CyberSafe Solutions",
        role: "Security Analyst",
        duration: "2015 - 2019",
        description: "Monitored network traffic, identified threats, and implemented security controls.",
      },
    ],
    education: ["M.S. Cybersecurity, Khalifa University", "Certified Ethical Hacker (CEH)"],
    availability: "Available from September 2025",
    bio: "Cybersecurity expert with a proven track record in protecting organizations from evolving threats and ensuring compliance.",
  },
  {
    id: "9",
    name: "Lucas Moretti",
    title: "Mobile App Developer",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    location: "Sao Paulo, Brazil",
    hourlyRate: 90,
    totalProjects: 35,
    experiences: [
      {
        company: "AppMasters BR",
        role: "Lead Mobile Developer",
        duration: "2021 - Present",
        description: "Developed cross-platform mobile apps for startups and enterprises. Mentored junior developers and led code reviews.",
      },
      {
        company: "MobileX Studio",
        role: "Mobile Developer",
        duration: "2017 - 2021",
        description: "Built and maintained Android and iOS applications for various clients.",
      },
    ],
    education: ["B.S. Software Engineering, University of Sao Paulo"],
    availability: "Available immediately",
    bio: "Mobile developer specializing in Flutter and cross-platform solutions. Focused on delivering high-quality, user-friendly apps.",
  },
  {
    id: "10",
    name: "Sophie Dubois",
    title: "AI/ML Engineer",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    location: "Paris, France",
    hourlyRate: 145,
    totalProjects: 19,
    experiences: [
      {
        company: "AI Solutions FR",
        role: "AI/ML Engineer",
        duration: "2020 - Present",
        description: "Designed and deployed machine learning models for healthcare and finance sectors. Improved model accuracy and scalability.",
      },
      {
        company: "DataLab Paris",
        role: "Machine Learning Engineer",
        duration: "2017 - 2020",
        description: "Developed NLP and computer vision solutions for research and commercial projects.",
      },
    ],
    education: ["M.S. Artificial Intelligence, Sorbonne University", "B.S. Mathematics, University of Paris"],
    availability: "Available from October 2025",
    bio: "AI/ML engineer with a passion for building intelligent systems and solving real-world problems with data.",
  },
];
