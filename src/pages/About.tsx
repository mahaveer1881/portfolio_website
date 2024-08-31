import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import AboutImg from '@/components/portfolio/about/AboutImg';
import EducationSection from '@/components/portfolio/about/EducationSection';
import SkillsSection from '@/components/portfolio/about/SkillsSection';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants/path';
import { cn } from '@/lib/utils';
import { about } from '@/constants/about';
import Socials from '@/components/portfolio/Socials';

function About() {
  const navigate = useNavigate();
  return (
    <div className='container mx-auto h-full'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center xl:text-start pt-12 xl:pt-10'>
        About Me
      </h1>
      <div className='flex flex-col xl:flex-row items-center justify-between -mt-8 xl:-mt-10 xl:pb-1 xl:gap-28'>
        <div className='order-2 xl:order-none '>
          <div className='flex flex-col xl:items-start gap-[30px] pb-10'>
            <ul className='flex flex-col gap-y-2 mx-auto xl:mx-0'>
              {about.info.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center justify-start xl:justify-start gap-4'
                >
                  <span className='text-white/60'>{item.fieldName}</span>
                  <span
                    className={cn(
                      'text-base sm:text-xl flex flex-wrap items-start justify-start'
                    )}
                  >
                    {item.fieldValue}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className='mt-4 text-white text-center xl:text-start px-4 lg:px-20 xl:px-0'>
            {about.homepageDesc}
          </p>
          <div>
            <h1 className='text-2xl underline italic pt-10 text-center'>
              My Journey
            </h1>
            <p className='mt-4 text-white text-center xl:text-start px-4 lg:px-20 xl:px-0'>
              {about.desc}
            </p>
          </div>
          <Button
            variant='outline'
            size='lg'
            className='uppercase flex items-center gap-2 mt-10 mx-auto xl:mx-0'
          >
            <span>Download CV</span>
            <FiDownload className='text-xl' />
          </Button>
        </div>
        <div className='order-1 xl:order-none'>
          <AboutImg />
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
export default About;
