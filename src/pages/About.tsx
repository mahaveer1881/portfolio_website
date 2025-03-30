import EducationSection from '@/components/portfolio/about/EducationSection';
import SkillsSection from '@/components/portfolio/about/SkillsSection';
import about_img from '@/assets/about_img.avif';
import WhoAmI from '@/components/portfolio/about/WhoAmI';
import ExperienceSection from '@/components/portfolio/about/ExperienceSection';
import Tagline from './Tagline';
import AboutContact from '../components/portfolio/AboutContact';

function About() {
  const scrollDown = () => {
    const element = document.getElementById('whoami');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className='relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden'>
        <div className='z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16'>
          <div
            className='bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0'
            style={{ transform: 'scale(1.6)' }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: 'absolute',
                inset: 0,
              }}
            >
              <img
                alt='Mahaveer Singh'
                sizes='100vw'
                src={about_img}
                style={{
                  position: 'absolute',
                  inset: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </span>
          </div>
        </div>
        <div className='z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0'>
          <h1 className='md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold'>
            About Me
          </h1>
          <div className='flex justify-center items-center flex-col my-5'>
            <div
              className='bg-gray-700 w-20 h-1 rounded-full mb-2'
              style={{ opacity: 1, transform: 'none' }}
            ></div>
            <div
              className='bg-gray-700 w-20 h-1 rounded-full'
              style={{ opacity: 1, transform: 'translateX(40px)' }}
            ></div>
          </div>
          <p className='title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5'>
            A brief introduction about me and{' '}
            <span className='bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent'>
              {' '}
              my interest.
            </span>
          </p>
          <div className='mb-3' style={{ opacity: 1 }}>
            <button
              onClick={scrollDown}
              className='title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border'
            >
              Scroll Down
            </button>
          </div>
        </div>
      </div>

      <div className='mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32'>
        <div className='flex justify-center items-center flex-col my-5 self-start'>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full mb-3 self-start'
            style={{ opacity: 1, transform: 'none' }}
          ></div>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full'
            style={{ opacity: 1, transform: 'translateX(-50px)' }}
          ></div>
          <h1 className='text-3xl font-bold mt-3'>Who Am I?</h1>
        </div>
      </div>

      <WhoAmI />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <Tagline />
      <AboutContact />
    </div>
  );
}
export default About;
