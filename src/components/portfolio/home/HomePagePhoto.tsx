import profilePhoto from '@/assets/profile_photo.png';

const HomePagePhoto = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
        <img src={profilePhoto} alt='' />
      </div>
    </div>
  );
};

export default HomePagePhoto;
