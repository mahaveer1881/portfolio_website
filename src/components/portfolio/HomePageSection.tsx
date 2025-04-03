import { Link } from 'react-router-dom';

function HomePageSection({
  img,
  title,
  desc,
  href,
}: {
  img: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className='h-auto mb-20 '>
      <div className=' relative h-auto md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden'>
        <div className='z-0 md:mb-0 md:absolute top-1/4  md:right-[10%] md:-translate-y-16 '>
          <div className='rounded-full h-[600px] w-[550px] lg:px-12 grayscale-0 md:grayscale hover:grayscale-0 transition-all ease duration-300'>
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
                  src={img}
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
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className='z-10 w-full md:absolute md:w-auto md:left-[10%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5'>
          <h1
            style={{ opacity: 1, transform: 'none' }}
            className='lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-4xl md:text-8xl font-bold'
          >
            {title}
          </h1>
          <div className='flex justify-center items-center flex-col my-5'>
            <div
              style={{ opacity: 1, transform: 'none' }}
              className='bg-gray-700 w-20 h-1 rounded-full mb-2'
            ></div>
            <div
              style={{ opacity: 1, transform: 'translate(40px)' }}
              className='bg-gray-700 w-20 h-1 rounded-full'
            ></div>
          </div>
          <p
            className='title text-xl mt-4 tracking-wider text-gray600 leading-[1.7rem] mb-5'
            style={{ opacity: 1, transform: 'none' }}
          >
            {desc}
          </p>
          <div style={{ opacity: 1, transform: 'none' }}>
            <button className='title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border'>
              <Link to={href}>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSection;
