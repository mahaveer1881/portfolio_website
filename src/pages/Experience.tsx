import experienceImg from '@/assets/experience_img.png';
const about = {
  title: 'About me',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  info: [
    { fieldName: 'Name', fieldValue: 'Mahaveer Singh Gurjar' },
    { fieldName: 'Phone', fieldValue: '(+91) 935 223 6019' },
    { fieldName: 'Experience', fieldValue: '1+ years' },
    { fieldName: 'Nationality', fieldValue: 'Indian' },
    { fieldName: 'Email', fieldValue: 'mahaveersinghgurjar18@gmail.com' },
    { fieldName: 'Language', fieldValue: 'Hindi, English' },
  ],
};

import { EXPERIENCE } from '@/constants/experience';
import ImgDisplay from '@/components/portfolio/ImgDisplay';
import { Button } from '@/components/ui/button';
import Socials from '@/components/portfolio/Socials';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants/path';
import { FiDownload } from 'react-icons/fi';

function Experience() {
  const navigate = useNavigate();
  return (
    <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 xl:mb-4 text-center xl:text-start pt-12 xl:pt-10'>
          {EXPERIENCE.title}
        </h1>
        <div className='flex flex-col xl:flex-row items-center justify-between -mt-8 xl:-mt-14 xl:pb-1'>
          <div className='order-2 xl:order-none '>
            <p className='mt-4 text-white text-center xl:text-start px-4 lg:px-20 xl:px-0'>
              {about.desc}
            </p>
            <div className='flex flex-col md:flex-row justify-center xl:justify-start items-center gap-4 mt-8'>
              <Button
                variant='outline'
                onClick={() => navigate(PATH_ROUTES.CONTACT)}
                size='lg'
                className='px-20 uppercase flex items-center gap-2'
              >
                Hire Me
              </Button>
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
          <div className='order-1 xl:order-none'>
            <ImgDisplay imgUrl={experienceImg} />
          </div>
        </div>

        <div className='mx-auto py-20 hidden xl:block'>
          {EXPERIENCE.items.map((company, index) => (
            <div
              key={index}
              className='flex justify-center items-center gap-10'
            >
              <div className='w-1/4 text-xl text-accent'>
                {company.duration}
              </div>
              <div className='relative'>
                <div className='relative right-8 border border-2 w-0 h-[calc(130px)]' />
                <div className='relative right-10 h-6 w-6 bg-white/70 rounded-full' />
                <div className='relative right-8 border border-2 w-0 h-[calc(130px)]' />
              </div>
              <div
                style={{
                  background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
                }}
                className=' w-3/4 p-6 rounded-xl'
              >
                <h1>
                  <span className='text-white/70'>Position:</span>{' '}
                  <span className='text-xl'>{company.position}</span>
                </h1>
                <p>
                  <span className='text-white/70'>Company:</span>{' '}
                  {company.company}
                </p>
                <div className='flex items-start gap-3 py-10'>
                  <span className='w-[100px] h-[6px] rounded-full bg-accent mt-4'></span>
                  <p className='text-white/60 text-base md:text-xl'>
                    {company.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mx-auto py-20 xl:hidden'>
          {EXPERIENCE.items.map((company, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center'
            >
              <div className='relative'>
                <div className='relative right-8 border border-2 w-0 h-[calc(30px)]' />
                <div className='relative right-10 h-4 w-4 bg-white/70 rounded-full' />
                <div className='relative right-8 border border-2 w-0 h-[calc(30px)]' />
              </div>
              <div
                style={{
                  background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
                }}
                className=' w-full mx-6 p-6 rounded-xl bg-[#151A24]'
              >
                <div className='w-full text-xl text-accent'>
                  {company.duration}
                </div>
                <h1>
                  <span className='text-xl'>{company.position}</span>
                </h1>
                <p>
                  <span className='w-[60px] h-[6px] rounded-full bg-accent'></span>
                  {company.company}
                </p>
                <div className='flex items-start gap-3 py-10'>
                  <p className='text-white/60 text-base md:text-xl'>
                    {company.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type='button'
          onClick={() => navigate(PATH_ROUTES.ABOUT)}
          className='flex justify-center items-center border-b-2 italic text-center mb-10 mt-12 cursor-pointer mx-auto'
        >
          Learn More About me...
        </button>
        <div className='flex justify-center pt-6 pb-10'>
          <Socials
            containerStyles='flex gap-6'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
