import { education } from '@/constants/about';

function EducationSection() {
  return (
    <div className='my-16'>
      <div className=' gap-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center xl:text-start'>
          {education.title}
        </h1>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 xl:gap-40 '>
          <p className='w-full lg:w-1/2 px-4 text-center xl:text-start '>
            {education.desc}
          </p>
          <ul className='w-full md:w-3/4 lg:w-1/2'>
            <li className='bg-[#001D34] h-[184px] py-6 px-2 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
              <span className='text-accent'>{education.info.duration}</span>
              <h3 className='text-xl min-h-[60px] text-center lg:text-left'>
                {education.info.degree}
              </h3>
              <div className='flex items-center gap-3'>
                <span className='w-[60px] h-[6px] rounded-full bg-accent'></span>
                <p className='text-white/60 text-base md:text-xl'>
                  {education.info.institute_name}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
