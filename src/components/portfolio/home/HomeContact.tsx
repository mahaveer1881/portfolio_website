import Socials from '@/components/portfolio/Socials';

const HomeContact = () => {
  return (
    <div
      className='section fp-section fp-table fp-is-overflow active fp-completely'
      data-anchor='contact'
      id='contactSection'
    >
      <div className='fp-overflow'>
        <div className='relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center overflow-hidden'>
          {/* <div className='z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16'>
            <div className='rounded-full h-[650px] w-[600px] lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300'>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <img
                    src={contact}
                    alt='Profile'
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Ensures the image covers the circle while maintaining aspect ratio
                      borderRadius: '20px',
                    }}
                  />
                </span>
              </span>
            </div>
          </div> */}
          <div className='z-10 w-full absolute md:w-auto top-[60%] md:top-1/3 flex flex-col justify-center items-center md:items-center text-center px-10 overflow-hidden'>
            <h1 className='bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-black text-5xl md:text-8xl font-bold mb-3'>
              Get In Touch
            </h1>
            <div className='flex justify-center items-center flex-col my-5'>
              <div className='bg-gray-700 w-20 h-1 rounded-full mb-2' />
              <div
                className='bg-gray-700 w-20 h-1 rounded-full'
                style={{ transform: 'translateX(40px)' }}
              />
            </div>
            <p className='title text-xl mt-4 tracking-wider text-gray600 leading-[1.7rem] md:mb-5'>
              Feel free to contact me if you have any{' '}
              <span className='bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent'>
                questions or just want to say hi.
              </span>
            </p>
            <p className='title text-xl mt-4 tracking-wider text-gray600 leading-[1.7rem] mb-5'>
              <a href='mailto:mahaveersinghgurjar18@gmail.com?subject=Hello&body=Hello Mahaveer,'>
                mahaveersinghgurjar18@gmail.com
              </a>
            </p>
            <div className='flex justify-center items-center space-x-4'>
              <Socials
                containerStyles='flex gap-3'
                iconStyles='w-14 h-14 border-secondary rounded-full flex justify-center items-center text-secondary text-3xl hover:bg-secondary hover:text-white hover:transition-all duration-500 '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
