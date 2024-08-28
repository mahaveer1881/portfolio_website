import Icon from '../Icon';
import { skills } from '@/constants/about';

function SkillsSection() {
  return (
    <div className='py-20'>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-3xl xl:text-5xl font-bold'>{skills.title}</h3>
          <p>{skills.desc}</p>
        </div>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
          {skills.skillList.map((skill, index) => {
            return (
              <li key={index} className='w-full h-[150px] mb-20'>
                <div
                  style={{
                    background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
                  }}
                  className='w-full h-[150px] rounded-xl flex justify-center items-center group'
                >
                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                    <Icon icon={skill.icon_2} size={72} />
                  </div>
                </div>
                <p className='capitalize text-center text-xl xl:text-3xl my-4'>
                  {skill.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillsSection;
