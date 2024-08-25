import profilePhoto from '@/assets/profile_3.png';

const HomePagePhoto = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='w-[298px] h-[298px] xl:w-[468px] xl:h-[468px] mix-blend-lighten'>
        <img src={profilePhoto} alt='' />
      </div>
    </div>
  );
};

export default HomePagePhoto;
