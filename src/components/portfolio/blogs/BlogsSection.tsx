import { personalBlogs } from '@/constants/blogs';
import BlogGrid from './BlogGrid';

function BlogsSection() {
  //   const [view, setView] = useState<string>('grid');
  return (
    <div id='blogs' className='mx-auto w-[80%] mb-48 mt-40'>
      <div>
        {/* {view === 'list' ? (
          <ProjectsList projects={personalProjects} />
        ) : (
          <ProjectGrid projects={personalProjects} />
        )} */}
        <BlogGrid blogs={personalBlogs} />
      </div>
    </div>
  );
}

export default BlogsSection;
