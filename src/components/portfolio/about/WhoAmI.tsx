import photo1 from '@/assets/personal/photo_1.jpg';
import photo2 from '@/assets/personal/photo_3.jpg';
import photo3 from '@/assets/personal/photo_4.jpg';

function WhoAmI() {
  return (
    <div
      id='whoami'
      className='relative mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 mb-10 px-20'
    >
      <div className='flex justify-center items-start flex-col mb-5'>
        <div className='images relative w-full aspect-square'>
          <div className='absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
            <div
              className='w-full h-full'
              style={{ opacity: 1, transform: 'none' }}
            >
              <img
                alt='Mahaveer'
                loading='lazy'
                decoding='async'
                data-nimg='fill'
                sizes='100vw'
                src={photo1}
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
                src={photo2}
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
                src={photo3}
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
          Mahaveer Singh Gurjar
        </h2>
        <p className='text-gray-600 text-justify title text-lg'>
          Hello, I’m{' '}
          <span className='text-black font-medium'>Mahaveer Singh Gurjar</span>,
          a dedicated and versatile Software Developer specializing in both{' '}
          <span className='text-black font-medium'>frontend</span> and{' '}
          <span className='text-black font-medium'>backend development</span>. I
          hail from Dausa, Rajasthan,{' '}
          <span className='text-black font-medium'>India</span>, and I am a 2023
          graduate of{' '}
          <span className='text-black font-medium'>IIT Tirupati</span>, where I
          earned my B.Tech degree in Chemical Engineering.
          <br />
          <br />
          With a strong foundation in software development, I am passionate
          about creating efficient, scalable, and user-centric solutions. My
          expertise spans across various{' '}
          <span className='text-black font-medium'>technologies</span>, and I am
          constantly exploring new trends in{' '}
          <span className='text-black font-medium'>software development</span>,{' '}
          <span className='text-black font-medium'>design</span>,{' '}
          <span className='text-black font-medium'>game development</span>, and{' '}
          <span className='text-black font-medium'>AI</span>. I believe in the
          power of{' '}
          <span className='text-black font-medium'>continuous learning</span>{' '}
          and strive to stay at the forefront of the ever-evolving{' '}
          <span className='text-black font-medium'>tech landscape</span>. <br />
          <br />
          As I continue to grow and expand my skills, I am always eager to
          collaborate with like-minded professionals and contribute to{' '}
          <span className='text-black font-medium'>impactful projects</span>.
          Let’s connect and explore innovative solutions in the world of{' '}
          <span className='text-black font-medium'>technology</span>.
        </p>
      </div>
    </div>
  );
}

export default WhoAmI;
