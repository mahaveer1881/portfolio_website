import { PATH_ROUTES } from '@/constants/path';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import robotImg from '@/assets/robot_img.webp';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum delectus consequatur quidem accusamus obcaecati magni nemo laborum quos, saepe architecto?',
    url: '#',
    image: '',
  },
  {
    id: 2,
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum delectus consequatur quidem accusamus obcaecati magni nemo laborum quos, saepe architecto?',
    url: '#',
  },
  {
    id: 3,
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum delectus consequatur quidem accusamus obcaecati magni nemo laborum quos, saepe architecto?',
    url: '#',
  },
];

function HomeProjects() {
  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className='lg:w-[50%] md:w-[70%] w-[90%] mx-auto mt-40'>
      <Link
        to={PATH_ROUTES.PROJECTS}
        className='flex justify-center items-center gap-4'
      >
        <h1 className='sm:text-3xl text-2xl font-semibold text-white text-center'>
          Projects
        </h1>
        <ExternalLink />
      </Link>

      <div className='flex flex-col justify-center items-center gap-6 mt-20 mb-40'>
        {projects.map((item, index) => (
          <div
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
            key={index}
            className='w-full h-auto p-10 mx-auto hover:bg-black/30 rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-4'
          >
            <div className='col-span-1 bg-black/40 rounded-full h-[200px] w-[200px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] 2xl:h-[200px] 2xl:w-[200px] flex justify-center items-center'>
              <img src={robotImg} alt='image/project' className='w-auto lg:w-[80px] xl:w-auto' />
            </div>
            <div className='col-span-2 flex flex-col justify-between items-start '>
              <div className='space-y-2'>
                <div
                  className={cn(
                    'text-xl font-semibold',
                    isHover === index ? 'text-accent-hover' : ''
                  )}
                >
                  {item.title}
                </div>
                <div>{item.desc}</div>
              </div>

              <div className='mt-8 lg:mt-0'>
                <a
                  className='text-white font-semibold flex justify-start items-center gap-1'
                  href='#'
                  target='blank'
                >
                  <span>github.com</span>
                  <span>
                    <ExternalLink className='w-4 h-4' />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProjects;
