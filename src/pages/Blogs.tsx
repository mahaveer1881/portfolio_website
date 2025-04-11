import HeroPageSection from '@/components/portfolio/HeroPageSection';
import blogImg from '@/assets/img.avif';
import BlogsSection from '@/components/portfolio/blogs/BlogsSection';

function Blogs() {
  const scrollDown = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <HeroPageSection
        img={blogImg}
        title='My Blogs'
        desc='List of my blogs that I have wrote.'
        scrollDown={scrollDown}
      />

      <div className='mt-40 flex flex-col justify-start items-center w-full pl-10 md:pl-32'>
        <div className='flex justify-center items-center flex-col my-5 self-start'>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full mb-3 self-start'
            style={{ opacity: 1, transform: 'none' }}
          ></div>
          <div
            className='bg-gray-700 w-28 h-1 rounded-full'
            style={{ opacity: 1, transform: 'translateX(-50px)' }}
          ></div>
          <h1 className='text-3xl font-bold mt-3'>My Blogs</h1>
        </div>
      </div>

      <BlogsSection />
    </div>
  );
}

export default Blogs;
