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
    <div>
      <header className='py-6 xl:py-4 text-white bg-black'>
        <div className='mx-10 flex justify-between items-center'>
          <Link to='/'>
            <h1
              id='logo'
              className='opacity-1 translate-x text-xl font-semibold text-[#01C3A4]'
            >
              Mahaveer<span className='text-accent'>.</span>
            </h1>
          </Link>

          {/* theme change button */}
          <div>
            {true ? (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Sun className='font-semibold' />
              </button>
            ) : (
              <button className='bg-blue-700 p-2 rounded-full'>
                <Moon className='font-semibold' />
              </button>
            )}
          </div>
        </div>
        <div className='flex justify-center items-center -mt-10'>
          {/* desktop nav */}
          <div className='hidden xl:flex items-center gap-8'>
            <Nav />
          </div>

          {/* movile nav */}
          <div id='mob' className='xl:hidden'>
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
