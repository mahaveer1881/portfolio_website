import { Copy, Copyright } from 'lucide-react';
import Socials from '../portfolio/Socials';
import { Link } from 'react-router-dom';
import { NAVBAR_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';

function Footer() {
  return (
    <div className='bg-black/40'>
      <div className='flex justify-between items-start mx-auto w-[70%] py-10'>
        <div>
          <h1 className='text-2xl hover:text-accent'>Mahaveer Singh Gurjar</h1>
          <div className='flex justify-start items-start gap-2'>
            <nav className='flex gap-3'>
              {NAVBAR_LINKS.map((link, index) => {
                return (
                  <Link
                    id='links'
                    key={index}
                    to={link.path}
                    className={cn(
                      'capitalize font-normal hover:text-accent trans late-all'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <p>
              Feel free to reach:{' '}
              <span className='italic'>mahaveersinghgurjar18@gmail.com</span>
            </p>
            <Copy className='w-4 h-4' />
          </div>
        </div>
        <div>
          <Socials
            containerStyles='flex gap-3'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
      </div>
      <p className='flex justify-center items-center gap-1 pb-4'>
        <span>
          <Copyright className='w-4 h-4' />
        </span>{' '}
        2025 Mahaveer. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
