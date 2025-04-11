import project_1 from '@/assets/project_1.png';

export const projectsTabs = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'full_stack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

export interface ProjectDataType {
  id: string;
  category: string;
  title: string;
  short_desc: string;
  desc: string;
  stack: string[];
  image?: string[];
  live?: string;
  github?: string;
  year: string;
}

export const personalProjects = [
  {
    id: 'spotify-clone',
    category: 'full_stack',
    title: 'Spotify Clone',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      'HTML',
      'CSS',
      'Typescript',
      'React.js',
      'TailwindCSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    image: [project_1, project_1, project_1],
    live: '',
    github: '',
    year: '2025',
  },
  {
    id: 'personal-portfolio-website',
    category: 'frontend',
    title: 'Personal Porftolio Website',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['HTML', 'CSS', 'Typescript', 'React.js', 'Tailwind'],
    image: [project_1, project_1, project_1],
    live: '',
    github: '',
    year: '2025',
  },
  {
    id: 'gemini-clone',
    category: 'frontend',
    title: 'Gemini Clone',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['HTML', 'CSS', 'Typescript', 'React.js', 'Tailwind'],
    image: [project_1, project_1, project_1],
    live: '',
    github: '',
    year: '2024',
  },
  {
    id: 'bank-website',
    category: 'frontend',
    title: 'Bank Website',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['HTML', 'CSS', 'Typescript', 'React.js', 'Tailwind'],
    image: [project_1, project_1, project_1],
    live: '',
    github: '',
    year: '2024',
  },
  {
    id: 'calculator',
    category: 'frontend',
    title: 'React Calculator',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['HTML', 'CSS', 'Typescript', 'React.js', 'Tailwind'],
    image: [project_1, project_1, project_1],
    live: '',
    github: '',
    year: '2024',
  },
];

export const companyProjects = [
  {
    id: 'whatsapp-flow',
    category: 'full_stack',
    title: 'WhatsApp Flow',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      'HTML',
      'CSS',
      'React.js',
      'Typescript',
      'WhatsApp Business API',
      'Django',
      'Python',
      'Postgres',
    ],
    image: [project_1],
    live: '',
    github: '',
    year: '2025',
  },
  {
    id: 'app-internal-tool',
    category: 'Frontend',
    title: 'App - Internal Tool',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['React.js', 'Typescript', 'Tanstack', 'Zustand'],
    image: [project_1],
    live: '',
    github: '',
    year: '2025',
  },
  {
    id: 'financial-mgmt',
    category: 'frontend',
    title: 'Financial Data Management Tool',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['React.js', 'Typescript', 'Shadcn UI', 'Tailwind'],
    image: [project_1],
    live: '',
    github: '',
    year: '2025',
  },
  {
    id: 'template-mgmt',
    category: 'frontend',
    title: 'Template Management Tool',
    short_desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: ['React.js', 'Typescript', 'Shadcn UI', 'Tailwind'],
    image: [project_1],
    live: '',
    github: '',
    year: '2025',
  },
];
