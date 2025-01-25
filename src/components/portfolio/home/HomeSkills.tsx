import { PATH_ROUTES } from '@/constants/path';
import { ExternalLink } from 'lucide-react';
import { FaMusic, FaPython, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiJavascriptFill } from 'react-icons/ri';
import { IoCodeSlash } from 'react-icons/io5';
import { CiCamera } from 'react-icons/ci';
import { Progress } from '@/components/ui/progress';
import { SiDjango } from 'react-icons/si';

const skills = [
  {
    title: 'React.js',
    icon: <FaReact />,
    value: 80,
  },
  {
    title: 'JavaScript',
    icon: <RiJavascriptFill />,
    value: 80,
  },
  {
    title: 'Django',
    icon: <SiDjango />,
    value: 60,
  },
  {
    title: 'Python',
    icon: <FaPython />,
    value: 80,
  },
];
const hobbies = [
  {
    title: 'Coding Side Projects',
    icon: <IoCodeSlash />,
    value: 80,
  },
  {
    title: 'Game Development',
    icon: <IoCodeSlash />,
    value: 80,
  },
  {
    title: 'Music & Movies',
    icon: <FaMusic />,
    value: 60,
  },
  {
    title: 'Photography',
    icon: <CiCamera />,
    value: 80,
  },
];

function HomeSkills() {
  return (
    <div className='lg:w-[50%] md:w-[70%] w-[90%] mx-auto mt-40'>
      <Link
        to={PATH_ROUTES.ABOUT}
        className='flex justify-center items-center gap-4'
      >
        <h1 className='sm:text-3xl text-2xl font-semibold text-white text-center border-b-2 sm:border-b-0 border-accent/20'>
          Skills & Hobbies
        </h1>
        <ExternalLink />
      </Link>

      <div className='flex flex-col lg:flex-row justify-between lg:items-start items-center gap-10 w-full mt-10'>
        <div className='lg:w-1/2 w-[90%]'>
          <p className='text-xl font-medium'>Technical Skills</p>
          <div className='space-y-2 mt-2'>
            {skills.map((skill, index) => (
              <div key={index}>
                <div className='flex justify-start items-center gap-3'>
                  <p className='text-white/70'>{skill.icon}</p>
                  <p className='text-white/70'>{skill.title}</p>
                </div>
                <Progress
                  value={skill.value}
                  className='h-3 w-[100%] border-2 border-blue-500 bg-primary'
                  indicatorClassName='bg-blue-500'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 w-[90%]'>
          <p className='text-xl font-medium'>Hobbies</p>
          <div className='space-y-2 mt-2'>
            {hobbies.map((hobby, index) => (
              <div key={index}>
                <div className='flex justify-start items-center gap-3'>
                  <p className='text-white/70'>{hobby.icon}</p>
                  <p className='text-white/70'>{hobby.title}</p>
                </div>
                <Progress
                  value={hobby.value}
                  className='h-3 w-[100%] border-2 border-yellow-500 bg-primary '
                  indicatorClassName='bg-yellow-500'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default HomeSkills;
