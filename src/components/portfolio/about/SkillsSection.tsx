function SkillsSection() {
  return (
    <div className=''>
      <div className='mx-auto gap-4 p-10 grid grid-cols-1 mt-20'>
        <div
          className='flex justify-center items-center flex-col mb-5'
          style={{ opacity: 1, transform: 'none' }}
        >
          <section className='grid gap-8 md:gap-12'>
            <div className='text-center space-y-2'>
              <h2 className='text-3xl font-bold mt-3 text-black'>
                Skills and Expertise
              </h2>
              <p className='text-muted-foreground max-w-[800px] mx-auto'>
                Explore some skills I'm proficient in to deliver high-quality
                solutions.
              </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10'>
              <div className='flex flex-col items-center gap-2'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'></polygon>
                  <line x1='12' x2='12' y1='22' y2='15.5'></line>
                  <polyline points='22 8.5 12 15.5 2 8.5'></polyline>
                  <polyline points='2 15.5 12 8.5 22 15.5'></polyline>
                  <line x1='12' x2='12' y1='2' y2='8.5'></line>
                </svg>
                <div className='font-medium'>Frontend Development</div>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2'></path>
                </svg>
                <div className='font-medium'>Backend Development</div>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2'></path>
                  <path d='m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06'></path>
                  <path d='m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8'></path>
                </svg>
                <div className='font-medium'>REST API</div>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <svg
                  className='w-12 h-12'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='5' y='2' width='14' height='20' rx='2' ry='2'></rect>
                  <line x1='12' x2='12' y1='18' y2='18'></line>
                </svg>
                <div className='font-medium'>Mobile Development</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='mx-auto gap-4 p-10 grid grid-cols-1 md:grid-cols-1 mt-20 mb-24 px-40'>
        {/* Language & Framework Section */}
        <div
          className='flex justify-center items-center flex-col mb-5'
          style={{ opacity: 1, transform: 'none' }}
        >
          <h2 className='text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase'>
            Language &amp; Framework
          </h2>
          <p className='text-gray-500 text-center tracking-widest md:px-10'>
            <span className='text-black font-bold'>HTML</span> |{' '}
            <span className='text-black font-bold'>CSS</span> |{' '}
            <span className='text-black font-bold'>Javascript</span> |{' '}
            <span className='text-black font-bold'>Typescript</span> |{' '}
            <span className='text-black font-bold'>React</span> |{' '}
            <span className='text-black font-bold'>NextJS</span> |{' '}
            <span className='text-black font-bold'>TailwindCSS</span> |{' '}
            <span className='text-black font-bold'>Bootstrap</span> |{' '}
            <span className='text-black font-medium'>NodeJS</span> |{' '}
            <span className='text-black font-medium'>ExpressJS</span> |{' '}
            <span className='text-black font-bold'>MySQL</span> |{' '}
            <span className='text-black font-bold'>PostgreSQL</span> |{' '}
            <span className='text-black font-medium'>MongoDB</span> |{' '}
            <span className='text-black font-medium'>Firebase</span> |{' '}
            <span className='text-black font-medium'>Python</span> |{' '}
            <span className='text-black font-medium'>AWS Cloud</span>
          </p>
        </div>

        {/* Tools Section */}
        {/* <div
          className='flex justify-start items-center flex-col mb-5'
          style={{ opacity: 1, transform: 'none' }}
        >
          <h2 className='text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase'>
            Tools
          </h2>
          <p className='text-gray-500 text-center tracking-wider md:px-'>
            <span className='text-black font-bold'>Visual Studio Code</span> |{' '}
            <span className='text-black font-bold'>Git</span> |{' '}
            <span className='text-black font-bold'>Github</span> |{' '}
            <span className='text-black font-medium'>Figma</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default SkillsSection;
