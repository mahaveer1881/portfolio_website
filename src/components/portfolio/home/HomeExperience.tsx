import { PATH_ROUTES } from '@/constants/path';
import { useGSAP } from '@gsap/react';
import { BriefcaseBusiness, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { homeExperience } from '@/constants/experience';

function HomeExperience() {
  useGSAP(() => {
    gsap.fromTo(
      '.experience',
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 2,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className='experience lg:w-[65%] md:w-[70%] w-[90%] mx-auto mt-28'>
      <div>
        <Link
          to={PATH_ROUTES.EXPERIENCE}
          className='flex sm:justify-start justify-center items-center gap-4'
        >
          <h1 className='sm:text-3xl text-2xl font-semibold border-b-2 sm:border-b-0 border-accent/20'>
            Experience
          </h1>
          <ExternalLink />
        </Link>
      </div>

      <div className='mt-8 md:ml-8 ml-0'>
        {homeExperience.map((item, index) => (
          <div key={index} className='flex items-start relative gap-6 '>
            <div className='flex flex-col items-center '>
              <p className='bg-accent/40 rounded-full w-8 h-8 text-center flex justify-center items-center'>
                <BriefcaseBusiness className='w-5 h-5' />
              </p>
              <div className='absolute left-3 top-10 lg:h-[85%] h-[93%] border-[0.5px] border-accent/20 rounded-full '></div>
            </div>
            <div className=''>
              <h1 className='sm:text-xl text-base text-white font-semibold'>
                {item.position}
              </h1>
              <p className='paraheading'>{item.company}</p>
              <p className='paraheading'>{item.duration}</p>
              <div className='my-3'>
                <p className='paraheading my-4'>Responsibilites Include:</p>
                <ul className='md:ml-8 ml-3 list-disc'>
                  {item.res.map((tasks, taskIndex) => (
                    <li className='mypara leading-relaxed py-1' key={taskIndex}>
                      {tasks}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeExperience;
