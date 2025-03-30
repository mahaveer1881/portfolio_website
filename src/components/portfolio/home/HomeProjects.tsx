import { Link } from 'react-router-dom';
import projectSectiomImg from '@/assets/project_section.jpg';

function HomeProjects() {
  // const [isHover, setIsHover] = useState<number | null>(null);

  return (
    <div
      className='section fp-section fp-table fp-is-overflow active fp-completely'
      data-anchor='projects'
    >
      <div className='fp-overflow' tabIndex={-1}>
        <div className='relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden'>
          {/* Image Section */}
          <div className='z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16'>
            <div className='rounded-full h-[600px] w-[550px] lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300'>
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
                    src={projectSectiomImg}
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
          </div>

          {/* Text Content Section */}
          <div className='z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start text-start px-10 py-5'>
            <h1 className='bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-black text-5xl md:text-8xl font-bold'>
              My Projects
            </h1>

            {/* Line Dividers */}
            <div className='flex justify-center items-center flex-col my-5'>
              <div className='bg-gray-700 w-20 h-1 rounded-full mb-2'></div>
              <div
                className='bg-gray-700 w-20 h-1 rounded-full'
                style={{ transform: 'translateX(40px)' }}
              ></div>
            </div>

            {/* Description Text */}
            <p className='title text-xl mt-4 tracking-wider text-gray-600 leading-[1.7rem] mb-5'>
              This is some of my projects that I have done{' '}
              <span className='bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent'>
                {' '}
                and currently working on.
              </span>
            </p>

            {/* Button */}
            <div>
              <Link
                to='/projects'
                className='title mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;
