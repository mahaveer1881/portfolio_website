import Socials from '@/components/portfolio/Socials';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo } from '@/constants/contact';
import { cn } from '@/lib/utils';

function Contact() {
  return (
    <div className='container mmx-auto py-6'>
      <div className='flex flex-col xl:flex-row gap-[30px]'>
        <div className='xl:w-[54%] order-2 xl:order-none '>
          <form className='flex flex-col gap-4 p-10  bg-[#001D34] rounded-xl'>
            <h3 className='text-4xl text-accent '>Let's work together</h3>
            <p className='text-white/60'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              vero. Nihil quibusdam reprehenderit, ex inventore fugiat facere
              sit sed debitis.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Input type='firstname' placeholder='First Name' />
              <Input type='lastname' placeholder='Last Name' />
            </div>
            <Input
              type='email'
              placeholder='Email address'
              className='w-full'
            />
            <Textarea
              className='h-[150px] '
              placeholder='Type your message here.'
            />
            <Button size='md' className='max-w-40'>
              Send message
            </Button>
          </form>
        </div>
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {contactInfo.map((item, index) => {
              return (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#001D34] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>
                      <item.icon />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3
                      className={cn(
                        'text-xl',
                        item.desc.length > 18
                          ? 'flex flex-wrap truncate contain text-sm md:text-xl'
                          : ''
                      )}
                    >
                      {item.desc}
                    </h3>
                  </div>
                </li>
              );
            })}
            <div className='hidden xl:block pt-8 ml-14'>
              <Socials
                containerStyles='flex gap-6'
                iconStyles='w-10 h-10 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
              />
            </div>
          </ul>
        </div>
      </div>
      <div className='flex justify-center pt-10 xl:hidden'>
        <Socials
          containerStyles='flex gap-6'
          iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
        />
      </div>
    </div>
  );
}

export default Contact;
