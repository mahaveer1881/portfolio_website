import { cn } from '@/lib/utils';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';

const Filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'full_stack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

function ProjectsFilter({
  filter,
  setFilter,
  view,
  setView,
}: {
  filter: string;
  setFilter: (v: string) => void;
  view: string;
  setView: (v: string) => void;
}) {
  return (
    <div className='w-full my-10'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-8'>
          {Filters.map((item, index) => (
            <button
              key={index}
              className={cn(
                'leading-relaxed h-8',
                filter === item.value
                  ? 'border-b-2 border-black text-black font-semibold pb-1'
                  : 'border-none text-gray-500'
              )}
              onClick={() => setFilter(item.value)}
            >
              <p className='h-8 w-fit tracking-wide'>{item.label}</p>
            </button>
          ))}
        </div>
        <div className='flex justify-end items-center gap-8'>
          <div className='flex justify-center items-center'>
            {view === 'list' ? (
              <button onClick={() => setView('grid')}>
                <IoGrid />
              </button>
            ) : (
              <button onClick={() => setView('list')}>
                <FaList />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsFilter;
