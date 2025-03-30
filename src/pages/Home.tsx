import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Profile from '@/components/portfolio/home/Profile';
import HomeContact from '@/components/portfolio/home/HomeContact';
import HomePageSection from '@/components/portfolio/HomePageSection';
import aboutImg from '@/assets/about_img.avif';
import projectSectiomImg from '@/assets/project_section.jpg';
import { PATH_ROUTES } from '@/constants/path';

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
      <div className=''>
        <Profile />
        <HomePageSection
          img={aboutImg}
          title='About Me'
          desc='A brief introduction about me and my interest.'
          href={PATH_ROUTES.ABOUT}
        />
        <HomePageSection
          img={projectSectiomImg}
          title='My Projects'
          desc='This is some of my projects that I have done and currently working on.'
          href={PATH_ROUTES.PROJECTS}
        />
        <HomeContact />
      </div>
    </section>
  );
}
