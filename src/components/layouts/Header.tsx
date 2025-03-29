import MobileNav from '../portfolio/header/MobileNav';
import Nav from '../portfolio/header/Nav';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
  useGSAP(() => {
    gsap.from('#logo', {
      opacity: 0,
      delay: 0.5,
      ease: 'power1.inOut',
      x: -50,
    });
    gsap.from('#hire', { opacity: 0, delay: 0.5, x: 50, ease: 'elatic' });
    gsap.from('#mob', { opacity: 0, delay: 0.5, x: 50, ease: 'elatic' });
  }, []);
  return (
    <div className='fixed z-50 w-screen backdrop-blur-md'>
      <header className='pt-8 text-black md:mx-48 flex justify-between items-center '>
        <div className=' mx-4 flex justify-between items-center'>
          <Link to='/'>
            <h1
              id='logo'
              className='opacity-1 translate-x md:text-xl text-base font-normal text-gray-500 tracking-[.3rem] uppercase'
            >
              Mahaveer<span className='text-gray-500'>.</span>
            </h1>
          </Link>

          {/* theme change button */}
          {/* <div className='hidden lg:block'>
            {true ? (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Sun className='font-semibold w-4 h-4' />
              </button>
            ) : (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Moon className='font-semibold w-4 h-4' />
              </button>
            )}
          </div> */}
        </div>
        <div className='flex lg:justify-end items-center'>
          {/* desktop nav */}
          <div className='hidden lg:flex items-center gap-8'>
            <Nav />
          </div>

          {/* movile nav */}
          <div id='mob' className='lg:hidden -mt-6 mr-4'>
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
