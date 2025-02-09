import { PATH_ROUTES } from '@/constants/path';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import robotImg from '@/assets/robot_img.webp';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { homeProjects } from '@/constants/experience';

function HomeProjects() {
  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className='lg:w-[65%] md:w-[70%] w-[90%] mx-auto mt-40'>
      <Link
        to={PATH_ROUTES.PROJECTS}
        className='flex justify-center items-center gap-4 hover:text-yellow-600'
      >
        <h1 className='sm:text-3xl text-2xl font-semibold text-white text-center hover:text-yellow-600 '>
          Projects
        </h1>
        <ExternalLink />
      </Link>

      <div className='flex flex-col justify-center items-center gap-6 mt-20 mb-40'>
        {homeProjects.map((item, index) => (
          <div
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
            key={index}
            className='w-full h-auto p-10 mx-auto rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gradient-to-r from-[#191826] via-[#1c1c1f] to-[#070f1f] sm:hover:bg-gradient-to-r sm:hover:from-[#191826] sm:hover:via-[#1c1c1f] sm:hover:to-[#070f1f]" lg:bg-none '
          >
            <div className='col-span-1 bg-black/40 rounded-full h-[200px] w-[200px] lg:h-[120px] lg:w-[120px] xl:h-[180px] xl:w-[180px] 2xl:h-[220px] 2xl:w-[220px] flex justify-center items-center'>
              <img
                src={robotImg}
                alt='image/project'
                className='w-auto lg:w-[80px] xl:w-auto'
              />
            </div>
            <div className='col-span-2 flex flex-col justify-between items-start '>
              <div className='space-y-2'>
                <h1
                  className={cn(
                    'text-xl font-semibold',
                    isHover === index ? 'text-accent-hover' : ''
                  )}
                >
                  {item.title}
                </h1>
                <p className='mypara leading-relaxed '>{item.desc}</p>
              </div>

              <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-0 md:gap-4 italic my-4 text-accent-hover'>
                <p className='paraheading'>Technologies:</p>
                <div className='flex flex-wrap justify-start items-center gap-1'>
                  {item.skills.map((skill, skillIndex) => (
                    <p className='mypara text-blue-600' key={skillIndex}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className='mt-8 lg:mt-0 flex justify-between items-center w-full'>
                <a
                  className='text-white font-semibold flex justify-start items-center gap-1 hover:text-yellow-600'
                  href={item.url}
                  target='blank'
                >
                  <span>github.com</span>
                  <span>
                    <ExternalLink className='w-4 h-4' />
                  </span>
                </a>
                {item.demo_url && (
                  <a
                    className='text-white font-semibold flex justify-start items-center gap-1 hover:text-yellow-600'
                    href='#'
                    target='blank'
                  >
                    <span>demo</span>
                    <span>
                      <ExternalLink className='w-4 h-4' />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProjects;
