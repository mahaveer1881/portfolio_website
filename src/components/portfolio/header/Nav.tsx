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
              'capitalize font-medium hover:text-accent trans late-all',
              link.path === pathName && 'text-accent border-b-2 border-accent'
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
