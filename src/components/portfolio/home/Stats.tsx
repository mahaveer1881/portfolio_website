'use client';

import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { getExperienceYear } from '@/utils';
import CountUp from 'react-countup';

const stats = [
  // { num: getExperienceYear(), text: 'Years of experience' },
  { num: 1, text: 'Years of experience' },
  { num: 5, text: 'Projects completed' },
  { num: 7, text: 'Technologies mastered' },
  { num: 400, text: 'Code Commits' },
];

const Stats = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.stats',
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <section className='mt-12 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='stats flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none'>
          {stats.map((item, index) => {
            return (
              <div
                className='stats flex-1 flex gap-4 items-center justify-center xl:justify-start'
                key={index}
              >
                <CountUp
                  end={Number(item.num)}
                  duration={5}
                  delay={2}
                  className='text-2xl sm:text-3xl xl:text-6xl font-extrabold'
                />
                <p
                  className={cn(
                    'stats leading-snug text-secondary/80',
                    item.text.length < 13 ? 'max-w-[100px]' : 'max-w-[150px]'
                  )}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
