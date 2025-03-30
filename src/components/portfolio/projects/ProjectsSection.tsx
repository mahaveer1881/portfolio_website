import ProjectsFilter from './ProjectsFilter';
import { useState } from 'react';
import ProjectsList from './ProjectsList';
import ProjectGrid from './ProjectGrid';

const projects = [
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi repellat recusandae nobis possimus quibusdam rerum nisi consectetur dolore at?',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    domain: 'full_stack',
    year: '2025',
  },
  {
    id: 'spotify-clone-2',
    title: 'Spotify Clone 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi repellat recusandae nobis possimus quibusdam rerum nisi consectetur dolore at?',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    domain: 'backend',
    year: '2025',
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi repellat recusandae nobis possimus quibusdam rerum nisi consectetur dolore at?',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    domain: 'full_stack',
    year: '2025',
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi repellat recusandae nobis possimus quibusdam rerum nisi consectetur dolore at?',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    domain: 'frontend',
    year: '2025',
  },
];
function ProjectsSection() {
  const [filter, setFilter] = useState<string>('all');
  const [view, setView] = useState<string>('grid');

  return (
    <div id='projects' className='mx-auto w-[80%] mb-48'>
      <div>
        <ProjectsFilter
          filter={filter}
          setFilter={setFilter}
          view={view}
          setView={setView}
        />
        {view === 'list' ? (
          <ProjectsList projects={projects} />
        ) : (
          <ProjectGrid projects={projects} />
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
