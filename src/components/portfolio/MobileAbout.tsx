import EducationSection from '@/components/portfolio/about/EducationSection';
import SkillsSection from '@/components/portfolio/about/SkillsSection';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants/path';
import { cn } from '@/lib/utils';
import { about } from '@/constants/about';
import Socials from '@/components/portfolio/Socials';
import { EXPERIENCE } from '@/constants/experience';

function MobileAbout() {
  const navigate = useNavigate();
  return (
    <div className='container mx-auto h-full'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center xl:text-start pt-12 xl:pt-0'>
        About Me
      </h1>
      <div className='flex flex-col xl:flex-row items-center justify-between -mt-8 xl:-mt-10 xl:pb-1 xl:gap-28'>
        <div>
          <div className='flex flex-col items-start gap-[30px] pb-10'>
            <ul className='flex flex-col gap-y-2 mx-auto xl:mx-0 bg-[#151A24] p-4 rounded-xl md:px-20'>
              {about.info.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center justify-start xl:justify-start gap-4'
                >
                  <span className='text-white/60'>{item.fieldName}</span>
                  <span
                    className={cn(
                      'text-md sm:text-xl flex flex-wrap items-start justify-start'
                    )}
                  >
                    {item.fieldValue}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className='mt-4 text-white text-center xl:text-start px-4 lg:px-20 xl:px-0'>
            {about.desc}
          </p>
          <div className='mt-24 mb-16'>
            <div className=' gap-10'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center xl:text-start'>
                Current Company
              </h1>
              <ul className='w-full md:w-3/4 lg:w-1/2 mx-auto'>
                <li
                  style={{
                    background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
                  }}
                  className='bg-card h-[184px] py-6 px-2 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                >
                  <span className='text-accent'>
                    {EXPERIENCE.items[0].duration}
                  </span>
                  <h3 className='text-xl min-h-[60px] text-center lg:text-left'>
                    {EXPERIENCE.items[0].position}
                  </h3>
                  <div className='flex items-center gap-3'>
                    <span className='w-[60px] h-[6px] rounded-full bg-accent'></span>
                    <p className='text-white/60 text-base md:text-xl'>
                      {EXPERIENCE.items[0].company}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
      <SkillsSection />
      <button
        type='button'
        onClick={() => navigate(PATH_ROUTES.PROJECTS)}
        className='flex justify-center items-center border-b-2 italic text-center mb-10 mt-8 cursor-pointer mx-auto'
      >
        Let's walk through my Projects...
      </button>
      <div className='flex justify-center pt-6 pb-10'>
        <Socials
          containerStyles='flex gap-6'
          iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
        />
      </div>
    </div>
  );
}
export default MobileAbout;
