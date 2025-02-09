import HomePageBg from '@/assets/home_page_bg.png';
import Socials from '../Socials';
import { Download, Loader2 } from 'lucide-react';
import profile1 from '@/assets/profile_img.jpeg';
import resumeFile from '@/assets/my_resume_copy.pdf';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleResume = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'mahaveer_resume';
      link.click();
      setIsLoading(false);
    }, 1000);
  };

  useGSAP(() => {
    gsap.fromTo(
      '.name',
      {
        opacity: 0,
        y: 40,
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
    <div>
      <div className=' overlfow-hidden'>
        <img
          src={HomePageBg}
          className='w-full md:h-72 h-52 object-cover object-top '
        />
      </div>

      <div className='rounded-full md:w-[160px] w-[120px] mx-auto md:-mt-24 -mt-16 z-50'>
        <img
          src={profile1}
          className='md:w-[160px] md:h-[160px] w-[120px] h-[120px] object-cover rounded-full bg-gred-600 '
        />
      </div>
      <div className='name w-[80%] mx-auto flex flex-col items-center justify-center mt-6'>
        <p className='sm:text-3xl text-2xl font-semibold text-center'>
          Mahaveer Singh Gurjar
        </p>
        <p className='mt-2 text-center'>
          Full Stack Developer at{' '}
          <a
            className='hover:text-accent-hover'
            href='https://www.opendatafabric.com/'
            target='blank'
          >
            AIML Opendatafabric
          </a>{' '}
        </p>
        <div className='homepage my-2'>
          <Socials
            containerStyles='flex gap-3'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
        <p className='md:w-[70%] w-[98%] text-center'>
          I’m a Full Stack Developer, graduated from IIT Tirupati. I started
          with Frontend Development and now build end-to-end solutions. Always
          exploring new technologies and eager for new challenges.
        </p>
        <div>
          <button
            onClick={handleResume}
            className='flex justify-center items-center gap-2 py-2 px-4 text-base text-white/80 bg-gray-800 border-2 border-white/10 rounded-lg mt-10'
          >
            {isLoading ? (
              <span>
                <Loader2 className='animate-spin w-4 h-4' />
              </span>
            ) : (
              <span>
                <Download className='w-4 h-4 ' />
              </span>
            )}
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
