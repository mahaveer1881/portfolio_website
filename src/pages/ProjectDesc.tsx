import project from '@/assets/project_1.png';
import AboutContact from '../components/portfolio/AboutContact';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function ProjectDesc() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className='fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10'>
          <div
            className='h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer'
            tabIndex={0}
            style={{ transform: 'none' }}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='chevron-down'
              className='svg-inline--fa fa-chevron-down text-white text-2xl'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
              ></path>
            </svg>
          </div>
        </div>
        <div className='mt-40 mx-auto w-[80%]'>
          <button
            onClick={() => navigate('/projects')}
            className='flex justify-start items-center gap-2 text-xl text-gray-500'
          >
            <span>
              <IoIosArrowBack />
            </span>
            <span>Back</span>
          </button>
        </div>
        <div className='min-h-screen flex justify-center items-center -mt-40'>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 px-20'>
            <div className='min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto'>
              <div>
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                  Project
                </h2>
                <h1 className='text-4xl font-medium text-neutral-900'>
                  Spotify Clone
                </h1>
              </div>
              <div>
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                  Technology
                </h2>
                <p className='text-2xl font-normal text-neutral-900'>
                  HTML, CSS, JS, ReactJS, TailwindCSS, Typescript
                </p>
              </div>
              <div>
                <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                  Year
                </h2>
                <p className='text-2xl font-normal text-neutral-900'>2025</p>
              </div>
            </div>
            <div className='flex justify-start items-start flex-col mb-5 pr-20'>
              <h2 className='uppercase font-normal text-lg tracking-[8px] text-neutral-400'>
                Description
              </h2>
              <p
                className='text-xl text-justify tracking-wide font-normal text-gray-500 mb-5'
                style={{ textAlign: 'justify' }}
              >
                A personal portfolio website that I created for a client. The
                website is built using two main tech, native (HTML, CSS, JS) and
                React-based (ReactJS, TailwindCSS, Typescript). The website was
                also created based on the client design and improved and sliced
                by me. The website has a few features such as an about page, a
                project page, a resume page, and a contact page.
              </p>
              <p
                className='text-xl text-justify tracking-wide font-normal text-gray-500 mb-5'
                style={{ textAlign: 'justify' }}
              >
                The website is created using a modern design and a clean
                interface that appeals to a wide audience. The website also has
                a responsive design that makes it easy to use on any device. The
                website also has a few animations that make the website more
                interactive and engaging.
              </p>
            </div>
          </div>
        </div>
        <div className='mx-auto grid grid-cols-1 p-5 md:p-20 w-full mb-40'>
          <div className='w-full h-auto text-center flex flex-col justify-center items-center gap-10'>
            <img src={project} className='w-[70vw] h-[70vh] mx-20' />
            <img src={project} className='w-[70vw] h-[70vh] mx-20' />
            <img src={project} className='w-[70vw] h-[70vh] mx-20' />
          </div>
        </div>
      </div>
      <AboutContact />
    </div>
  );
}

export default ProjectDesc;
