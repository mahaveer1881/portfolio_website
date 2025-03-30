import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants/path';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ProjectDataType } from '@/constants/projects';

function ProjectsList({ projects }: { projects: ProjectDataType[] }) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center gap-10 w-[95%] mx-10'>
      <Table className='rounded-lg h-auto p-10'>
        <TableHeader>
          <TableRow className='bg-gray-300 hover:bg-gray-300 rounded-lg'>
            <TableHead className='w-[150px] text-black '>Year</TableHead>
            <TableHead className='text-black'>Title</TableHead>
            <TableHead className='text-black'>Technology</TableHead>
            <TableHead className='text-black text-right pr-10'>Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow
              key={index}
              onClick={() =>
                navigate(`${PATH_ROUTES.PROJECT_DESC}?${project.id}`)
              }
            >
              <TableCell className='font-medium'>{project.year}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>
                <div className='flex flex-wrap justify-start items-center gap-2 w-[80%] '>
                  {project?.stack.map((item) => (
                    <p className='text-sm font-thin'>{item},</p>
                  ))}
                </div>
              </TableCell>
              <TableCell className='text-right pr-10'>Links</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProjectsList;
