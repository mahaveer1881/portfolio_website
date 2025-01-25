import MobileNav from '../portfolio/header/MobileNav';
import Nav from '../portfolio/header/Nav';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Moon, Sun } from 'lucide-react';

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
    <div className='sticky'>
      <header className='py-4 text-white bg-black'>
        <div className='md:mx-10 mx-4 flex justify-between items-center'>
          <Link to='/'>
            <h1
              id='logo'
              className='opacity-1 translate-x md:text-xl text-base font-semibold text-[#01C3A4]'
            >
              Mahaveer<span className='text-accent'>.</span>
            </h1>
          </Link>

          {/* theme change button */}
          <div className='hidden lg:block'>
            {true ? (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Sun className='font-semibold w-4 h-4' />
              </button>
            ) : (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Moon className='font-semibold w-4 h-4' />
              </button>
            )}
          </div>
        </div>
        <div className='flex lg:justify-center justify-end items-center'>
          {/* desktop nav */}
          <div className='hidden lg:flex items-center gap-8 -mt-10'>
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
