import { PATH_ROUTES } from '@/constants/path';
import MobileNav from '../portfolio/header/MobileNav';
import Nav from '../portfolio/header/Nav';
import { Button } from '../ui/button';
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
    <div>
      <header className='py-8 xl:py-10 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <h1
              id='logo'
              className='opacity-1 translate-x text-4xl font-semibold text-[#01C3A4]'
              // style={{
              //   color: 'linear-gradient(center, #00FFD5, #6A0D91)',
              // }}
            >
              Mahaveer<span className='text-accent'>.</span>
            </h1>
          </Link>
          {/* desktop nav */}
          <div className='hidden xl:flex items-center gap-8'>
            <Nav />
            <Link id='hire' to={PATH_ROUTES.CONTACT}>
              <Button className='border-2 opacity-1 translate-x '>
                Hire me
              </Button>
            </Link>
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
