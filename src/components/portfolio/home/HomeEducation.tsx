import { PATH_ROUTES } from '@/constants/path';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeEducation() {
  return (
    <div className='lg:w-[50%] md:w-[70%] w-[90%] mx-auto mt-10'>
      <div>
        <Link
          to={PATH_ROUTES.EXPERIENCE}
          className='flex sm:justify-start justify-center items-center gap-4 '
        >
          <h1 className='sm:text-3xl text-2xl font-semibold border-b-2 sm:border-b-0 border-accent/20'>
            Education
          </h1>
        </Link>
      </div>

      <div className='mt-8 md:ml-8 ml-0'>
        <div className='flex items-start relative gap-6 '>
          <div className='flex flex-col items-center '>
            <p className='bg-accent/40 rounded-full w-8 h-8 text-center flex justify-center items-center'>
              <GraduationCap className='w-5 h-5' />
            </p>
            <div className='absolute left-3 top-10 lg:h-[75%] h-[85%] border-[0.5px] border-accent/20 rounded-full '></div>
          </div>
          <div className=''>
            <h1 className='sm:text-xl text-base text-white font-semibold'>
              B. Tech. in Chemical Engineering
            </h1>
            <p className='text-white/70 text-base'>
              Indian Institute of Technology, Tirupati
            </p>
            <p className='text-white/70 text-base'>August 2019 - May 2023</p>
            <div className='my-3'>
              <p className='text-white/70 my-4'>Courses Include:</p>
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

export default HomeEducation;
