import { PATH_ROUTES } from '@/constants/path';
import MobileNav from '../portfolio/header/MobileNav';
import Nav from '../portfolio/header/Nav';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className='py-8 xl:py-10 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <h1
              className='text-4xl font-semibold text-[#01C3A4]'
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
            <Link to={PATH_ROUTES.CONTACT}>
              <Button className='border-2'>Hire me</Button>
            </Link>
          </div>
          {/* movile nav */}
          <div className='xl:hidden'>
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
