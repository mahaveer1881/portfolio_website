import { CiMenuFries } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];
function MobileNav() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-24 mb-10 text-center text-2xl'>
          <Link to='/'>
            <h1 className='text-4xl font-semibold'>
              Mahaveer <span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={cn(
                  'text-xl capitalize hover:text-accent transition-all',
                  link.path === pathName &&
                    'text-accent border-b-2 border-accent'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
