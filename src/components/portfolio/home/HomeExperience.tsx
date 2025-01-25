import { PATH_ROUTES } from '@/constants/path';
import { BriefcaseBusiness, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeExperience() {
  return (
    <div className='lg:w-[50%] md:w-[70%] w-[90%] mx-auto mt-28'>
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
        <div className='flex items-start relative gap-6 '>
          <div className='flex flex-col items-center '>
            <p className='bg-accent/40 rounded-full w-8 h-8 text-center flex justify-center items-center'>
              <BriefcaseBusiness className='w-5 h-5' />
            </p>
            <div className='absolute left-3 top-10 lg:h-[75%] h-[85%] border-[0.5px] border-accent/20 rounded-full '></div>
          </div>
          <div className=''>
            <h1 className='sm:text-xl text-base text-white font-semibold'>
              Frontend Developer
            </h1>
            <p className='text-white/70 text-base'>
              AIML Opendatafabric, Coimbatore
            </p>
            <p className='text-white/70 text-base'>Sep. 2023 - Present</p>
            <div className='my-3'>
              <p className='text-white/70 my-4'>Responsibilites Include:</p>
              <ul className='text-white/60 md:ml-8 ml-3 list-disc'>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, veniam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, veniam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, veniam.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeExperience;
