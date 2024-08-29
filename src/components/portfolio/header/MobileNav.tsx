import { CiMenuFries } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAVBAR_LINKS } from '@/constants/data';
import { useState } from 'react';
import { PATH_ROUTES } from '@/constants/path';
import { Button } from '@/components/ui/button';
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
          className='text-[32px] text-accent'
        />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <X className='text-3xl text-accent' onClick={() => setIsOpen(false)} />
        <div className='mt-12 mb-10 text-center text-2xl'>
          <Link to={PATH_ROUTES.HOME}>
            <h1 className='text-4xl font-semibold'>
              Mahaveer <span className='text-accent'>.</span>
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
                  'text-xl capitalize hover:text-accent transition-all duration-300',
                  link.path === pathName &&
                    'text-accent border-b-2 border-accent'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link onClick={() => setIsOpen(false)} to={PATH_ROUTES.CONTACT}>
            <Button className='border-2'>Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
