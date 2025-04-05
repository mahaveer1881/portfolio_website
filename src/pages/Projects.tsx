import ProjectsSection from '@/components/portfolio/projects/ProjectsSection';
import AboutContact from '../components/portfolio/AboutContact';
import projectSectiomImg from '@/assets/project_section.jpg';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  companyProjects,
  personalProjects,
  ProjectDataType,
} from '@/constants/projects';
import HeroPageSection from '@/components/portfolio/HeroPageSection';

function Projects() {
  const [projectSection, setProjectSection] = useState<string>('personal');
  const [projectData, setProjectData] =
    useState<ProjectDataType[]>(personalProjects);

  useEffect(() => {
    if (projectSection === 'personal') {
      setProjectData(personalProjects);
    } else {
      setProjectData(companyProjects);
    }
  }, [projectSection]);

  const scrollDown = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <HeroPageSection
        img={projectSectiomImg}
        title='Projects'
        desc='List of my projects that I have done and currently working on.'
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
          <h1 className='text-3xl font-bold mt-3'>My Creative Endeavors</h1>
        </div>
      </div>

      <div className='mx-2 md:mx-40 flex justify-center items-center gap-2'>
        <button
          onClick={() => setProjectSection('personal')}
          className={cn(
            'mr-3 rounded-2xl px-2 md:px-8 py-2 shadow-md transition duration-300 ease-in-out border-transparent border-2 box-border font-semibold',
            projectSection === 'personal'
              ? 'bg-gray-700 text-gray-100'
              : 'border-gray-700'
          )}
        >
          Passion-Driven Projects
        </button>
        <button
          onClick={() => setProjectSection('workplace')}
          className={cn(
            'mr-3 rounded-2xl px:2 md:px-8 py-2 shadow-md transition duration-300 ease-in-out border-transparent border-2 box-border font-semibold',
            projectSection === 'workplace'
              ? 'bg-gray-700 text-gray-100'
              : 'border-gray-700'
          )}
        >
          Workplace Projects
        </button>
      </div>

      <ProjectsSection projects={projectData} />
      <AboutContact />
    </div>
  );
}

export default Projects;
