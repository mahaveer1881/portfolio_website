import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function AboutContact() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col mt-5 overflow-hidden h-[80vh]'>
        <div className='flex justify-center items-center flex-col self-center min-h-[50vh] mt-[20vh] border-b-2 min-w-[80vw]'>
          <a href='/#contact'>
            <h1
              className='text-5xl md:text-7xl font-medium mt-3 hover:underline whitespace-nowrap leading-none flex justify-center items-center gap-6'
              style={{ opacity: 1, transform: 'none' }}
            >
              Get In Touch
              <FaRegArrowAltCircleRight />
            </h1>
          </a>
        </div>
        <footer className='flex justify-center items-center flex-col my-5 self-start border-t-2 border-black w-[90%] mx-auto pt-8'>
          <p className='text-gray-800 text-sm font-normal'>
            ©2025 - <span className='text-gray-700 text-lg'>Mahaveer</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AboutContact;
