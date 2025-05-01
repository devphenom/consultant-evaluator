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
  rating: number;
  totalProjects: number;
  skills: Skill[];
  experiences: Experience[];
  education: string[];
  availability: string;
  bio: string;
}

export const consultants: Consultant[] = [
  {
    id: "1",
    name: "Alex Morgan",
    title: "Senior Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "San Francisco, CA",
    hourlyRate: 120,
    rating: 4.8,
    totalProjects: 45,
    skills: [
      { name: "React", level: "expert", yearsOfExperience: 5 },
      { name: "TypeScript", level: "expert", yearsOfExperience: 4 },
      { name: "Node.js", level: "intermediate", yearsOfExperience: 3 },
      { name: "GraphQL", level: "intermediate", yearsOfExperience: 2 },
      { name: "AWS", level: "intermediate", yearsOfExperience: 3 },
    ],
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
    rating: 4.9,
    totalProjects: 38,
    skills: [
      { name: "Figma", level: "expert", yearsOfExperience: 4 },
      { name: "Adobe XD", level: "expert", yearsOfExperience: 5 },
      { name: "Sketch", level: "intermediate", yearsOfExperience: 3 },
      { name: "User Research", level: "expert", yearsOfExperience: 6 },
      { name: "HTML/CSS", level: "intermediate", yearsOfExperience: 3 },
    ],
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
    rating: 4.7,
    totalProjects: 22,
    skills: [
      { name: "Python", level: "expert", yearsOfExperience: 7 },
      { name: "Machine Learning", level: "expert", yearsOfExperience: 5 },
      { name: "SQL", level: "expert", yearsOfExperience: 6 },
      { name: "TensorFlow", level: "intermediate", yearsOfExperience: 3 },
      { name: "Data Visualization", level: "expert", yearsOfExperience: 4 },
    ],
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
    rating: 4.9,
    totalProjects: 56,
    skills: [
      { name: "Agile Methodology", level: "expert", yearsOfExperience: 8 },
      { name: "Scrum", level: "expert", yearsOfExperience: 6 },
      { name: "JIRA", level: "expert", yearsOfExperience: 7 },
      { name: "Risk Management", level: "expert", yearsOfExperience: 5 },
      { name: "Stakeholder Management", level: "expert", yearsOfExperience: 6 },
    ],
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
    rating: 4.6,
    totalProjects: 32,
    skills: [
      { name: "Docker", level: "expert", yearsOfExperience: 5 },
      { name: "Kubernetes", level: "intermediate", yearsOfExperience: 3 },
      { name: "AWS", level: "expert", yearsOfExperience: 6 },
      { name: "Terraform", level: "intermediate", yearsOfExperience: 3 },
      { name: "CI/CD", level: "expert", yearsOfExperience: 4 },
    ],
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
];
