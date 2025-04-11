import { ProjectDataType } from '@/constants/projects';
import project1 from '@/assets/project_1.png';

function BlogGrid({ blogs }: { blogs: ProjectDataType[] }) {
  return (
    <div className='grid grid-cols-2 items-center gap-10 mx-10'>
      {blogs.map((project, index) => (
        <a
          href={project.live}
          target='blank'
          key={index}
          className='relative border rounded-xl border-black/50 h-[400px] shadow-lg bg-cover bg-center bg-opacity-5 cursor-pointer'
          style={{ backgroundImage: `url(${project1})` }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black/70 rounded-xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]'>
            <h2 className='text-4xl font-bold text-shadow-md'>
              {project.title}
            </h2>
            <p className='mt-4 text-lg leading-relaxed'>{project.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default BlogGrid;
