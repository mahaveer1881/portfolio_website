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
        <div>
          {services.map((service, index) => {
            return (
              <div key={index}>
                <div>
                  <div>{service.num}</div>
                  <Link to={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
