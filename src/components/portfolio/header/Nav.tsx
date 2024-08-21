import { NAVBAR_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <nav className='flex gap-8'>
      {NAVBAR_LINKS.map((link, index) => {
        return (
          <Link
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
