import { Check, Copy, Copyright } from 'lucide-react';
import Socials from '../portfolio/Socials';
import { Link } from 'react-router-dom';
import { NAVBAR_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';
import { useState } from 'react';

function Footer() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const text = 'mahaveersinghgurjar18@gmail.com';

    setIsCopied(true);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Text copied to clipboard!');
        setTimeout(() => {
          setIsCopied(false);
        }, 5000);
      })
      .catch((error) => {
        toast.error('Failed to copy text: ' + error);
        setIsCopied(false);
      });
  };
  return (
    <div className='bg-black/40'>
      <div className='flex flex-col sm:flex-row justify-between sm:items-start items-center mx-auto lg:w-[70%] w-[90%] py-10'>
        <div>
          <h1 className='sm:text-2xl text-xl hover:text-accent bg-gradient-to-r from-[#fff] via-[#a9e5ff] to-[#dae7ff] text-transparent bg-clip-text'>
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
                      'capitalize font-normal hover:text-accent translate-all'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className='flex flex-col xs:flex-row justify-start xs:items-center items-start gap-0 xs:gap-2 mt-4 '>
            <p className='mypara'>Feel free to reach: </p>
            <p
              onClick={handleCopy}
              className='italic text-sm sm:text-base flex items-center gap-2 text-white/50'
            >
              mahaveersinghgurjar18@gmail.com
              {isCopied ? (
                <span className='rounded-full border border-green-600 p-1 h-5 w-5 flex justify-center items-center'>
                  <Check className='w-5 h-5 text-green-600' />
                </span>
              ) : (
                <button>
                  <Copy className='w-4 h-4' />
                </button>
              )}
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
      <p className='flex justify-center items-center gap-1 pb-4 text-xs text-white/30'>
        <span>
          <Copyright className='w-4 h-4' />
        </span>{' '}
        2023 Mahaveer. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
