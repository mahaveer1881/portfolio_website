import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import project_1 from '@/assets/project_1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'project 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: project_1,
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'project 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: project_1,
    live: '',
    github: '',
  },
];

function Projects() {
  const [project] = useState(projects[0]);
  return (
    <div className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category}
              </h2>
              <p className='text-white/60'>{project.desc}</p>
              <ul className='flex gap-4'>
                {project.stack.map((st, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {st.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link to={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link to={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gitub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>done</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
