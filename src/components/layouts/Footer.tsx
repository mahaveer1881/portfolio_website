import { Copy, Copyright } from 'lucide-react';
import Socials from '../portfolio/Socials';
import { Link } from 'react-router-dom';
import { NAVBAR_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';

function Footer() {
  return (
    <div className='bg-black/40'>
      <div className='flex flex-col sm:flex-row justify-between sm:items-start items-center mx-auto lg:w-[70%] w-[90%] py-10'>
        <div>
          <h1 className='sm:text-2xl text-xl hover:text-accent'>
            Mahaveer Singh Gurjar
          </h1>
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
          <div className='flex flex-col xs:flex-row justify-start xs:items-center items-start gap-2 '>
            <p>Feel free to reach: </p>
            <p className='italic text-sm sm:text-base flex gap-2'>
              mahaveersinghgurjar18@gmail.com
              <span>
                <Copy className='w-4 h-4' />
              </span>
            </p>
          </div>
        </div>
        <div className='mt-8 md:mt-0'>
          <Socials
            containerStyles='flex gap-3'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
      </div>
      <p className='flex justify-center items-center gap-1 pb-4 text-sm lg:text-base'>
        <span>
          <Copyright className='w-4 h-4' />
        </span>{' '}
        2023 Mahaveer. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
