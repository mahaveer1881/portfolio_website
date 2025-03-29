import { Download, Loader2 } from 'lucide-react';
import profile1 from '@/assets/profile_img.jpeg';
import resumeFile from '@/assets/my_resume_copy.pdf';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleResume = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'mahaveer_resume';
      link.click();
      setIsLoading(false);
    }, 1000);
  };

  useGSAP(() => {
    gsap.fromTo(
      '.name',
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 2,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div>
      <div className='h-[95vh] w-screen flex flex-col items-center justify-center overflow-hidden'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-40 overflow-hidden w-[75%]'>
          <div className='col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start md:right-[10%]'>
            <div className='block md:hidden col-span-1 mx-auto my-10'>
              <div className='bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300'>
                <span className='relative max-w-full h-full overflow-hidden'>
                  {/* <span className='block w-full h-full'>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27500%27/%3e'
                    className='block max-w-full w-full h-full object-cover'
                  />
                </span> */}
                  <img
                    alt='Mahaveer'
                    className='rounded-full w-full h-full object-cover'
                    src={profile1}
                  />
                </span>
              </div>
            </div>
            <p
              className='uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500'
              style={{ opacity: 1, transform: 'none' }}
            >
              Mahaveer Singh Gurjar
            </p>
            <h1 className='text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5'>
              Full Stack <br /> Developer
            </h1>
            <p>
              <a
                className='text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500'
                href='https://www.opendatafabric.com/'
                target='blank'
              >
                AIML Opendatafabric
              </a>{' '}
            </p>
            <p
              style={{ opacity: 1, transform: 'none' }}
              className='title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]'
            >
              I’m a Full Stack Developer, graduated from IIT Tirupati. I started
              with Frontend Development and now build end-to-end solutions.
              Always exploring new technologies and eager for new challenges.
            </p>
            <div
              style={{ opacity: 1, transform: 'none' }}
              className='buttons flex flex-row justify-center items-center space-x-4 mt-10'
            >
              <button
                onClick={handleResume}
                className='title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border flex justify-center items-center gap-3'
              >
                {isLoading ? (
                  <span>
                    <Loader2 className='animate-spin w-4 h-4' />
                  </span>
                ) : (
                  <span>
                    <Download className='w-4 h-4 ' />
                  </span>
                )}
                Download Resume
              </button>
              <button className='title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border'>
                Contact Me
              </button>
            </div>
          </div>
          <div className='hidden md:flex col-span-1 mx-auto justify-center items-center'>
            <div className='rounded-full h-auto w-auto lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300'>
              <span className='relative max-w-full h-full  overflow-hidden'>
                {/* <span className='block w-full h-full'>
                <img
                  alt=''
                  aria-hidden='true'
                  src={profile1}
                  className='block max-w-full w-full h-full object-cover'
                />
              </span> */}
                <img
                  alt='Mahaveer'
                  className='rounded-full w-full h-full object-cover'
                  src={profile1}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='mx-auto grid grid-cols-1 md:grid-cols-3 p-10 md:px-16 h-[90vh] relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden'>
    //   <div
    //     style={{ opacity: 1, transform: 'none' }}
    //     className='col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start'
    //   >
    //     <p
    //       className='uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500'
    //       style={{ opacity: 1, transform: 'none' }}
    //     >
    //       Mahaveer Singh Gurjar
    //     </p>
    //     <p
    //       style={{ opacity: 1, transform: 'none' }}
    //       className='text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5'
    //     >
    //       Full Stack <br /> Developer{' '}
    //     </p>
    //     <p>
    //       <a
    //         className='text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500'
    //         href='https://www.opendatafabric.com/'
    //         target='blank'
    //       >
    //         AIML Opendatafabric
    //       </a>{' '}
    //     </p>
    //     {/* <div className='homepage my-2'>
    //       <Socials
    //         containerStyles='flex gap-3'
    //         iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
    //       />
    //     </div> */}
    //     <p
    //       style={{ opacity: 1, transform: 'none' }}
    //       className='title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]'
    //     >
    //       I’m a Full Stack Developer, graduated from IIT Tirupati. I started
    //       with Frontend Development and now build end-to-end solutions. Always
    //       exploring new technologies and eager for new challenges.
    //     </p>

    //     <div
    //       style={{ opacity: 1, transform: 'none' }}
    //       className='buttons flex flex-row justify-center items-center space-x-4 mt-10'
    //     >
    //       <button
    //         onClick={handleResume}
    //         className='title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border flex justify-center items-center gap-3'
    //       >
    //         {isLoading ? (
    //           <span>
    //             <Loader2 className='animate-spin w-4 h-4' />
    //           </span>
    //         ) : (
    //           <span>
    //             <Download className='w-4 h-4 ' />
    //           </span>
    //         )}
    //         Download Resume
    //       </button>
    //       <button className='title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border'>
    //         Contact Me
    //       </button>
    //     </div>
    //   </div>
    //   <div
    //     style={{ opacity: 1, transform: 'none' }}
    //     className='hidden md:flex col-span-1 mx-auto justify-center items-center '
    //   >
    //     <div className='rounded-full h-[600px] w-[500px] lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300'>
    //       <span
    //         style={{
    //           boxSizing: 'border-box',
    //           display: 'inline-block',
    //           overflow: 'hidden',
    //           width: '100%',
    //           height: '100%',
    //           position: 'relative',
    //         }}
    //       >
    //         <span
    //           style={{
    //             boxSizing: 'border-box',
    //             display: 'block',
    //             width: '100%',
    //             height: '100%',
    //             position: 'relative',
    //           }}
    //         >
    //           <img
    //             src={profile1}
    //             alt='Profile'
    //             style={{
    //               position: 'absolute',
    //               top: '0',
    //               left: '0',
    //               right: '0',
    //               bottom: '0',
    //               boxSizing: 'border-box',
    //               padding: '0',
    //               border: 'none',
    //               margin: 'auto',
    //               display: 'block',
    //               width: '100%',
    //               height: '100%',
    //               objectFit: 'cover', // Ensures the image covers the circle while maintaining aspect ratio
    //               borderRadius: '20px',
    //             }}
    //           />
    //         </span>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Profile;
