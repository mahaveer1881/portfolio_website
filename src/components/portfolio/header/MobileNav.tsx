import { CiMenuFries } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAVBAR_LINKS } from '@/constants/data';
import { useState } from 'react';
import { PATH_ROUTES } from '@/constants/path';
import { X } from 'lucide-react';

function MobileNav() {
  const location = useLocation();
  const pathName = location.pathname;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries
          onClick={() => setIsOpen(true)}
          className='text-[25px] text-secondary font-bold'
        />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <X
          className='text-3xl text-seconary'
          onClick={() => setIsOpen(false)}
        />
        <div className='mt-12 mb-10 text-center text-2xl'>
          <Link to={PATH_ROUTES.HOME}>
            <h1 className='text-2xl font-semibold'>
              Mahaveer <span className='text-secondary'>.</span>
            </h1>
          </Link>
        </div>

        <nav className='flex flex-col justify-between items-center gap-8'>
          {NAVBAR_LINKS.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={cn(
                  'text-xl capitalize hover:text-secondary transition-all duration-300',
                  link.path === pathName &&
                    'text-secondary border-b-2 border-secondary'
                )}
                onClick={() => setIsOpen(false)}
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
