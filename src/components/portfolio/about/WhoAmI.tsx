import about_img from '@/assets/about_img.avif';

function WhoAmI() {
  return (
    <div className='relative mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 mb-10 px-20'>
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
                src={about_img}
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
                src={about_img}
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
                src={about_img}
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
          Hey there, I’m Mahaveer Singh Gurjar, a{' '}
          <span className='text-black font-medium'>tech enthusiast</span> and{' '}
          <span className='text-black font-medium'>
            aspiring Web Developer.
          </span>{' '}
          Originating from Pasuruan, East Java, Indonesia, I’m currently
          embarking on a fascinating journey at{' '}
          <span className='text-black font-medium'>
            Universitas Negeri Malang,
          </span>{' '}
          where I’m pursuing my degree in{' '}
          <span className='text-black font-medium'>
            Informatics Engineering.
          </span>{' '}
          My passion for technology and coding knows no bounds. Beyond the world
          of coding, I find myself deeply immersed in the realms of design, Game
          Development, and the fascinating universe of AI. I believe that in
          today’s fast-paced digital landscape, being a{' '}
          <span className='text-black font-medium'>lifelong learner</span> is
          not just a choice, but a necessity. Let’s connect and explore this
          ever-evolving world of tech together!
        </p>
      </div>
    </div>
  );
}

export default WhoAmI;
