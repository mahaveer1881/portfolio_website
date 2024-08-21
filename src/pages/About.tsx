import { getExperienceTime } from '@/utils';

function About() {
  return (
    <div className='container mx-auto h-full'>
      <h1 className='text-4xl'>About me</h1>
      <div className='grid grid-cols-2'>
        <div className='cols-span-1'>
          <h3>Software Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nobis
            omnis pariatur possimus libero ullam mollitia quod! Id quam
            perspiciatis eveniet iste. Molestiae illo eos quae earum, voluptatum
            quisquam praesentium est odio et cupiditate iure nisi eveniet eaque
            laborum natus.
          </p>
        </div>
        <div>
          <img src='' alt='profile/pic' />
        </div>
      </div>
      <div className='pt-10'>
        <h1>My Education</h1>
        <div>hello</div>
      </div>
      <div className='flex justify-center items-center gap-10'>
        Total Experience:
        <span className='text-xl xl:text-2xl font-extrabold'>
          {getExperienceTime()}
        </span>
      </div>
    </div>
  );
}
export default About;
