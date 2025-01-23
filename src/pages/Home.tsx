import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Profile from '@/components/portfolio/home/Profile';
import HomeExperience from '@/components/portfolio/home/HomeExperience';
import HomeEducation from '@/components/portfolio/home/HomeEducation';
import HomeSkills from '@/components/portfolio/home/HomeSkills';
import HomeProjects from '@/components/portfolio/home/HomeProjects';

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      '.homepage',
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
    gsap.fromTo(
      '.img',
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
    <section className='h-full overflow-hidden'>
      <div>
        <Profile />
        <HomeExperience />
        <HomeEducation />
        <HomeSkills />
        <HomeProjects />
      </div>

      {/* <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-1'>
          <div className='homepage opacity-0 text-center xl:text-left order-2 xl:order-none'>
            <span className='homepage'>{homePage.title}</span>
            <h1 className='homepage h1 mb-6'>
              Hello I'm <br />{' '}
              <span className='text-accent text-shadow'>{homePage.name}</span>
            </h1>
            <p className='homepage max-w-[500px] mb-9 text-white/80'>
              {homePage.desc}{' '}
            </p>
            <div className='homepage flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
            </div>
          </div>
          <div className='img order-1 xl:order-none mb-8 xl:mb-0 pt-8 xl:pt-0'>
            <HomePagePhoto />
          </div>
        </div>
      </div> */}
      {/* <Stats /> */}
      {/* <div className='xl:hidden'>
        <MobileAbout />
      </div> */}
    </section>
  );
}
