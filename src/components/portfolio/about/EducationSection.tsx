import { education } from '@/constants/about';

function EducationSection() {
  return (
    <div className='my-16'>
      <div className=' gap-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center xl:text-start'>
          {education.title}
        </h1>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 xl:gap-20 '>
          <div className='w-full'>
            <p className='w-full px-4 text-center xl:text-start '>
              {education.homePageDesc}
            </p>
            <br />
            <p className='hidden w-full px-4 text-center xl:text-start'>
              {education.desc}
            </p>
          </div>

          <ul className='w-full md:w-3/4 lg:w-3/4'>
            <li
              style={{
                background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
              }}
              className='bg-card h-[184px] py-6 px-2 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
            >
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
