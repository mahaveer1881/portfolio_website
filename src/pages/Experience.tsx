import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
  title: 'About me',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  info: [
    { fieldName: 'Name', fieldValue: 'Mahaveer Singh Gurjar' },
    { fieldName: 'Phone', fieldValue: '(+91) 935 223 6019' },
    { fieldName: 'Experience', fieldValue: '1+ years' },
    { fieldName: 'Nationality', fieldValue: 'Indian' },
    { fieldName: 'Email', fieldValue: 'mahaveersinghgurjar18@gmail.com' },
    { fieldName: 'Language', fieldValue: 'Hindi, English' },
  ],
};
const experience = {
  icon: 'About me',
  title: 'My Experience',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  items: [
    {
      company: 'AIML Opendatafabric',
      position: 'Frontend Developer',
      duration: 'Sep. 2023 - Present',
    },
    {
      company: 'Anvitha Life Care Pvt Ltd',
      position: 'Intern',
      duration: 'June 2022 - July 2022',
    },
  ],
};
const education = {
  icon: 'ed me',
  title: 'My Education',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  items: [
    {
      insitituion: 'Indian Instititue of Technology, Tirupati',
      degree: 'Btech (Chemical Engineer)',
      duration: 'August 2019 - May 2023',
    },
    {
      insitituion: 'Vidyasthali',
      degree: '12 th',
      duration: '2016 - 2018',
    },
    {
      insitituion: 'Ashram',
      degree: '10 th',
      duration: '2006 - 2016',
    },
  ],
};

const skills = {
  title: 'My Skills',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  skillList: [
    { icon: <FaHtml5 />, name: 'html 5' },
    { icon: <FaCss3 />, name: 'css 3' },
    { icon: <FaJs />, name: 'javascript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'next.js' },
    { icon: <SiTailwindcss />, name: 'tailwind.css' },
    { icon: <FaPython />, name: 'python' },
    { icon: <FaFigma />, name: 'figma' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

function Experience() {
  return (
    <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about_me'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-cneter xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.desc}
                </p>
                <ScrollArea>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[60px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-cneter xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.desc}
                </p>
                <ScrollArea>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[60px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.insitituion}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p>{skills.desc}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value='about_me'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.desc}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span
                          className={cn(
                            'text-xl',
                            item.fieldValue.length > 22
                              ? 'flex flex-wrap overflow-auto truncate w-60 text-sm'
                              : ''
                          )}
                        >
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Experience;
