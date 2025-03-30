import { homeEducation } from '@/constants/experience';
import college1 from '@/assets/personal/college_1.jpg';
import college3 from '@/assets/personal/college_2.jpg';
import college2 from '@/assets/personal/college_4.jpeg';

function EducationSection() {
  return (
    <div className='w-full px-20 mx-auto flex justify-center items-center flex-col'>
      <div className='mx-auto gap-4 p-10 grid grid-cols-1 mt-20'>
        <div
          className='flex justify-center items-center flex-col mb-5'
          style={{ opacity: 1, transform: 'none' }}
        >
          <section className='grid gap-8 md:gap-12'>
            <div className='text-center space-y-2'>
              <h2 className='text-3xl font-bold mt-3 text-black'>Education</h2>
              <p className='text-gray600 font-normal max-w-[800px] mx-auto tracking-wider'>
                Get to know more about my educational background.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className='relative mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 mb-10 px-20'>
        <div className='flex justify-center items-start flex-col mb-5'>
          <div className='images relative w-full aspect-square'>
            <div className='absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
              <div
                className='w-full h-full'
                style={{ opacity: 1, transform: 'none' }}
              >
                <img
                  alt='Alvalens'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  sizes='100vw'
                  src={college1}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'cover',
                    color: 'transparent',
                  }}
                />
              </div>
            </div>
            <div className='absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
              <div
                className='w-full h-full'
                style={{ opacity: 1, transform: 'none' }}
              >
                <img
                  alt='Alvalens'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  sizes='100vw'
                  src={college2}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'cover',
                    color: 'transparent',
                  }}
                />
              </div>
            </div>
            <div className='absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
              <div
                className='w-full h-full'
                style={{ opacity: 1, transform: 'none' }}
              >
                <img
                  alt='Alvalens'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  sizes='100vw'
                  src={college3}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'cover',
                    color: 'transparent',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className='flex justify-center items-start flex-col mb-5 md:px-10'
          style={{ opacity: 1, transform: 'none' }}
        >
          <h2 className='text-2xl font-bold tracking-wider mb-3'>
            {homeEducation.stream}
          </h2>
          <div className='tracking-wider'>
            <p className='text-gray600 font-normal'>{homeEducation.college}</p>
            <p className='text-gray600 font-normal'>{homeEducation.duration}</p>
            <div className='my-3'>
              <p className='text-gray600 font-normal my-4'>Key Highlights:</p>
              <ul className='md:ml-8 ml-3 list-disc'>
                {homeEducation.courses.map((course, courseIndex) => (
                  <li
                    className='text-gray500 font-normal leading-relaxed py-1'
                    key={courseIndex}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
