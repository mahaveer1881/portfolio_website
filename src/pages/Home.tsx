import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Profile from '@/components/portfolio/home/Profile';
import HomeProjects from '@/components/portfolio/home/HomeProjects';
import AboutMe from '@/components/portfolio/home/AboutMe';
import HomeContact from '@/components/portfolio/home/HomeContact';

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
        <AboutMe />
        {/* <HomeExperience />
        <HomeEducation />
        <HomeSkills /> */}
        <HomeProjects />
        <HomeContact />
      </div>
    </section>
  );
}
