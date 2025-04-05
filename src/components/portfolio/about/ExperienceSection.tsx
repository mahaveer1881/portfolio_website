import { homeExperience } from '@/constants/experience';
import { BriefcaseBusiness } from 'lucide-react';

function ExperienceSection() {
  return (
    <div className='w-full px-0 md:px-20 mx-auto flex justify-center items-center flex-col'>
      <div className='mt-16 flex flex-col justify-start items-center w-full pl-4 md:pl-32'>
        <div className='flex justify-center items-center flex-col my-5 self-start'>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full mb-3 self-start'
            style={{ opacity: 1, transform: 'none' }}
          ></div>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full'
            style={{ opacity: 1, transform: 'translateX(-50px)' }}
          ></div>
          <h1
            className='text-3xl font-bold mt-3'
            style={{ opacity: 1, transform: 'none' }}
          >
            Profesional Experience
          </h1>
        </div>
      </div>
      <div className='mt-8 md:ml-8 ml-0 w-[90%] md:w-[80%] tracking-wider'>
        {homeExperience.map((item, index) => (
          <div key={index} className='flex items-start relative gap-6 '>
            <div className='flex flex-col items-center '>
              <p className='bg-secondary rounded-full w-8 h-8 text-center flex justify-center items-center'>
                <BriefcaseBusiness className='w-5 h-5 text-white' />
              </p>
              <div className='absolute left-3 top-10 lg:h-[85%] h-[93%] border-[0.5px] border-secondary/20 rounded-full '></div>
            </div>
            <div className=''>
              <h1 className='sm:text-xl text-base text-secondary font-semibold'>
                {item.position}
              </h1>
              <p className='text-gray600 font-semibold'>{item.company}</p>
              <p className='text-gray600 font-semibold'>{item.duration}</p>
              <div className='my-3'>
                <p className='text-gray600 font-normal my-4'>
                  Responsibilites Include:
                </p>
                <ul className='md:ml-8 ml-3 list-disc'>
                  {item.res.map((tasks, taskIndex) => (
                    <li
                      className='text-gray500 leading-relaxed py-1 font-normal'
                      key={taskIndex}
                    >
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

export default ExperienceSection;
