import { BsArrowDownRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Web Development',
    href: '',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illum eos impedit veniam consequatur in rem voluptate hic! Minima, sed!',
  },
  {
    num: '02',
    title: 'Web Development',
    href: '',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illum eos impedit veniam consequatur in rem voluptate hic! Minima, sed!',
  },
  {
    num: '03',
    title: 'Web Development',
    href: '',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illum eos impedit veniam consequatur in rem voluptate hic! Minima, sed!',
  },
  {
    num: '04',
    title: 'Web Development',
    href: '',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illum eos impedit veniam consequatur in rem voluptate hic! Minima, sed!',
  },
];
function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    to={service.href}
                    className='w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                <h2 className='text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                <p className='text-white/60'>{service.desc}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
