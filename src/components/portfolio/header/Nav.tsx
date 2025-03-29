import { NAVBAR_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const pathName = location.pathname;

  useGSAP(() => {
    gsap.fromTo(
      '#links',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        delay: 0.5,
        x: 0,
      }
    );
  }, []);
  return (
    <nav className='flex gap-8'>
      {NAVBAR_LINKS.map((link, index) => {
        return (
          <Link
            id='links'
            key={index}
            to={link.path}
            className={cn(
              'font-normal hover:text-gray-500 trans late-all tracking-[.1rem] uppercase',
              link.path === pathName
                ? 'text-gray-700 border-b-2 border-gray-700'
                : 'text-gray-500'
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
