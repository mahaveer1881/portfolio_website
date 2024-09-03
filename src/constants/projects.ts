import project_1 from '@/assets/project_1.png';
import portflio from '@/assets/portfolio.png';

export const projectsTabs = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

export const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Personal Porftolio Website',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'React.js' }, { name: 'Typescript' }, { name: 'Tailwind' }],
    image: portflio,
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'WhatsApp Flow',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      { name: 'React.js' },
      { name: 'Typescript' },
      { name: 'WhatsApp Business API' },
    ],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'App - Internal Tool',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      { name: 'React.js' },
      { name: 'Typescript' },
      { name: 'Tanstack' },
      { name: 'Zustand' },
    ],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Template Management Tool',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      { name: 'React.js' },
      { name: 'Typescript' },
      { name: 'Shadcn UI' },
      { name: 'Tailwind' },
    ],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'Financial Data Management Tool',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [
      { name: 'React.js' },
      { name: 'Typescript' },
      { name: 'Shadcn UI' },
    ],
    image: project_1,
    live: '',
    github: '',
  },
];
