import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link, useNavigate } from 'react-router-dom';
import projectImg from '@/assets/project_1.png';
import { projects } from '@/constants/projects';
import { PATH_ROUTES } from '@/constants/path';
import Socials from '@/components/portfolio/Socials';

function Projects() {
  const navigate = useNavigate();
  return (
    <div className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 xl:mb-20 text-center xl:text-start pt-8 xl:pt-12 xl:pt-0'>
          My Projects
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          dolore maxime voluptatum accusamus repellendus optio porro a atque,
          culpa natus totam praesentium omnis officia hic illum exercitationem,
          voluptas, molestiae quos.
        </p>
        {/* <ProjectsHeaders /> */}
        {projects.map((project) => (
          <div
            style={{
              background: `radial-gradient(farthest-corner, #10131a, 20%, #0d2f3d 100%, #0d2f3d 60% `,
            }}
            className='flex flex-col xl:flex-row xl:gap-[30px] bg-card m-8 p-10 rounded-xl'
          >
            <div className='w-full xl:w-[50%] xl:h-[420px] flex flex-col xl:justify-between order-2 xl:order-none -mt-8 xl:mt-0'>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                <div className='text-5xl pt-2 md:pt-0 md:text-6xl leading-none font-extrabold text-transparent text-outline'>
                  {project.num}
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                  {project.category}
                </h2>
                <p className='text-white/60'>{project.desc}</p>
                <ul className='flex gap-4'>
                  {project.stack.map((st, index) => {
                    return (
                      <li key={index} className='text-xl text-accent'>
                        {st.name}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    );
                  })}
                </ul>
                <div className='border border-white/20'></div>
              </div>
            </div>
            <div className='w-full xl:w-[50%] rounded-xl'>
              <img src={projectImg} className='rounded-3xl' />
              <div className='relative top-6 flex justify-end items-center gap-4 xl:pt-6'>
                <Link to={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-xl xl:text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link to={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-xl xl:text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gitub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='bg-red-400 h-40'>
          <CustomPagination />
        </div> */}
        <button
          type='button'
          onClick={() => navigate(PATH_ROUTES.Contact)}
          className='flex justify-center items-center border-b-2 italic text-center mb-10 mt-12 cursor-pointer mx-auto'
        >
          Let's work together...
        </button>
        <div className='flex justify-center pt-6 pb-10'>
          <Socials
            containerStyles='flex gap-6'
            iconStyles='w-12 h-12 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
