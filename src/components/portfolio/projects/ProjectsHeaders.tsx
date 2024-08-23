import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsTabs } from '@/constants/projects';

function ProjectsHeaders() {
  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          {projectsTabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className='w-[100px] bg-transparent data-[state=active]:'
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='account'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>

      <div className='flex justify-end items-center gap-4'>
        <Input />
        <div>
          <Select>
            <SelectTrigger className='w-[200px]'>
              <div>sort By:</div>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest_first'>Newest First</SelectItem>
              <SelectItem value='oldest_first'>Oldest First</SelectItem>
              <SelectItem value='a_z'>A - Z</SelectItem>
              <SelectItem value='z_a'>Z - A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ProjectsHeaders;
