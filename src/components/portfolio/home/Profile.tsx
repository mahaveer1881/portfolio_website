import HomePageBg from '@/assets/home_page_bg.png';
import Socials from '../Socials';
import { Download } from 'lucide-react';
import profile from '@/assets/profile.jpeg';

function Profile() {
  return (
    <div>
      <div className='overlfow-hidden'>
        <img
          src={HomePageBg}
          className='w-full h-72 object-cover object-top '
        />
      </div>

      <div className='rounded-full w-[160px] mx-auto -mt-24 z-50'>
        <img
          src={profile}
          className='w-[160px] h-[160px] object-cover rounded-full bg-gred-600 '
        />
      </div>
      <div className='w-[80%] mx-auto flex flex-col items-center justify-center mt-6'>
        <p className='text-3xl font-semibold'>Mahaveer Singh Gurjar</p>
        <p className='mt-2'>
          Full Stack Developer at <span>AIML Opendatafabric</span>{' '}
        </p>
        <div className='homepage my-2'>
          <Socials
            containerStyles='flex gap-3'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
        <p className='w-[70%] text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          praesentium enim inventore aspernatur excepturi, autem totam nemo sunt
          corrupti qui?
        </p>
        <div>
          <button className='flex justify-center items-center gap-2 py-2 px-4 text-base text-white/80 bg-gray-800 border-2 border-white/10 rounded-lg mt-10'>
            <span>
              <Download className='w-4 h-4 ' />
            </span>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
