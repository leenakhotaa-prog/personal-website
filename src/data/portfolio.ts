import {
  Briefcase,
  BrainCircuit,
  FileSpreadsheet,
  BarChart3,
  Database,
  Code2,
  MessagesSquare,
  Puzzle,
  Users,
  BookOpen,
  Plane,
  Music,
  Film,
  Camera,
  Sparkles,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  level: 'Foundational' | 'Developing' | 'Confident';
};

export const skills: Skill[] = [
  {
    name: 'Business Analysis',
    icon: Briefcase,
    blurb: 'Requirements gathering, process mapping, and stakeholder alignment.',
    level: 'Developing',
  },
  {
    name: 'Artificial Intelligence',
    icon: BrainCircuit,
    blurb: 'Exploring how AI transforms healthcare and pharma decision-making.',
    level: 'Developing',
  },
  {
    name: 'Excel',
    icon: FileSpreadsheet,
    blurb: 'Pivot tables, formulas, and structured analysis for reporting.',
    level: 'Confident',
  },
  {
    name: 'Power BI',
    icon: BarChart3,
    blurb: 'Building interactive dashboards that turn data into insight.',
    level: 'Developing',
  },
  {
    name: 'SQL',
    icon: Database,
    blurb: 'Querying relational databases to answer business questions.',
    level: 'Developing',
  },
  {
    name: 'Python',
    icon: Code2,
    blurb: 'Foundations in data analysis and scripting for automation.',
    level: 'Foundational',
  },
  {
    name: 'Communication',
    icon: MessagesSquare,
    blurb: 'Translating technical findings into clear, actionable stories.',
    level: 'Confident',
  },
  {
    name: 'Problem-Solving',
    icon: Puzzle,
    blurb: 'Breaking ambiguous problems into measurable, solvable parts.',
    level: 'Confident',
  },
  {
    name: 'Teamwork',
    icon: Users,
    blurb: 'Collaborating across roles to deliver shared outcomes.',
    level: 'Confident',
  },
];

export type Hobby = {
  name: string;
  icon: LucideIcon;
  blurb: string;
};

export const hobbies: Hobby[] = [
  { name: 'Reading Books', icon: BookOpen, blurb: 'Biographies, business, and the occasional novel.' },
  { name: 'Traveling', icon: Plane, blurb: 'New places, new perspectives, new data points.' },
  { name: 'Music', icon: Music, blurb: 'A soundtrack for focus, reflection, and energy.' },
  { name: 'Movies', icon: Film, blurb: 'Stories that move and ideas that stick.' },
  { name: 'Photography', icon: Camera, blurb: 'Finding composition in everyday moments.' },
  { name: 'Learning AI', icon: Sparkles, blurb: 'Following where machine intelligence is heading.' },
  { name: 'Exploring Tech', icon: Cpu, blurb: 'Hands-on with new tools and emerging tech.' },
];

export type ProjectPlaceholder = {
  id: string;
  tag: string;
  title: string;
  description: string;
  status: 'Planned' | 'In Progress' | 'Coming Soon';
};

export const projects: ProjectPlaceholder[] = [
  {
    id: 'p1',
    tag: 'Data Visualization',
    title: 'Healthcare Dashboard',
    description:
      'A Power BI dashboard exploring patient and operational metrics — designed to surface insights that support better care decisions.',
    status: 'Planned',
  },
  {
    id: 'p2',
    tag: 'Business Analysis',
    title: 'Process Optimization Study',
    description:
      'A case study mapping an end-to-end business workflow, identifying bottlenecks, and proposing data-backed improvements.',
    status: 'Planned',
  },
  {
    id: 'p3',
    tag: 'AI & Research',
    title: 'AI in Pharmaceuticals',
    description:
      'A research project examining how AI accelerates drug discovery and decision-making across the pharmaceutical value chain.',
    status: 'Coming Soon',
  },
  {
    id: 'p4',
    tag: 'Analytics',
    title: 'SQL Insights Project',
    description:
      'A portfolio of SQL queries and reports answering real business questions on a sample relational dataset.',
    status: 'In Progress',
  },
];

export type JobOpportunity = {
  title: string;
  type: string;
  focus: string;
  description: string;
  skills: string[];
};

export const jobOpportunities: JobOpportunity[] = [
  {
    title: 'Business Analyst Intern',
    type: 'Internship',
    focus: 'Business analysis',
    description: 'Support requirement gathering, process mapping, research, and stakeholder communication.',
    skills: ['Requirements', 'Process mapping', 'Excel'],
  },
  {
    title: 'Junior Data Analyst',
    type: 'Entry level',
    focus: 'Analytics',
    description: 'Turn data into clear reports and practical insights that help teams make decisions.',
    skills: ['Excel', 'SQL', 'Power BI'],
  },
  {
    title: 'Business Intelligence Intern',
    type: 'Internship',
    focus: 'Reporting & dashboards',
    description: 'Help develop dashboards, validate data, and communicate performance trends.',
    skills: ['Power BI', 'Data visualization', 'Communication'],
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Interests' },
  { id: 'projects', label: 'Projects' },
  { id: 'opportunities', label: 'Opportunities' },
  { id: 'contact', label: 'Contact' },
];

// Placeholder contact details — easy to update in one place.
export const contact = {
  email: 'leena.khot@example.com',
  phone: '+1 (000) 000-0000',
  linkedin: 'https://www.linkedin.com/in/leena-khot',
  github: 'https://github.com/leena-khot',
};
