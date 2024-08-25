import experienceImg from '@/assets/experience_img.png';
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

import { EXPERIENCE } from '@/constants/experience';
import ImgDisplay from '@/components/portfolio/ImgDisplay';
import { Button } from '@/components/ui/button';
import Socials from '@/components/portfolio/Socials';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES } from '@/constants/path';

function Experience() {
  const navigate = useNavigate();
  return (
    <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-20 xl:mb-4 text-center xl:text-start pt-12 xl:pt-10'>
          {EXPERIENCE.title}
        </h1>
        <div className='flex flex-col xl:flex-row items-center justify-between -mt-8 xl:-mt-14 xl:pb-1'>
          <div className='order-2 xl:order-none '>
            <p className='mt-4 text-white text-center xl:text-start px-4 lg:px-20 xl:px-0'>
              {about.desc}
            </p>
            <Button
              onClick={() => navigate(PATH_ROUTES.Contact)}
              className='px-20 border-white border-2 text-accent bg-transparent mx-auto xl:mx-0 flex justify-center my-10'
            >
              Hire Me
            </Button>
          </div>
          <div className='order-1 xl:order-none'>
            <ImgDisplay imgUrl={experienceImg} />
          </div>
        </div>

        <div className='mx-auto py-20'>
          {EXPERIENCE.items.map((company, index) => (
            <div
              key={index}
              className='flex justify-center items-center gap-10'
            >
              <div className='w-1/4 text-xl text-accent'>
                {company.duration}
              </div>
              <div className='relative'>
                <div className='relative right-8 border border-2 w-0 h-[calc(130px)]' />
                <div className='relative right-10 h-6 w-6 bg-white/70 rounded-full' />
                <div className='relative right-8 border border-2 w-0 h-[calc(130px)]' />
              </div>
              <div className='bg-card w-3/4 p-6 rounded-xl'>
                <h1>
                  <span className='text-white/70'>Position:</span>{' '}
                  <span className='text-xl'>{company.position}</span>
                </h1>
                <p>
                  <span className='text-white/70'>Company:</span>{' '}
                  {company.company}
                </p>
                <div className='flex items-start gap-3 py-10'>
                  <span className='w-[100px] h-[6px] rounded-full bg-accent mt-4'></span>
                  <p className='text-white/60 text-base md:text-xl'>
                    {company.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center pt-6 pb-10'>
          <Socials
            containerStyles='flex gap-6'
            iconStyles='w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-3xl hover:bg-accent hover:text-primary hover:transition-all duration-500 '
          />
        </div>

        {/* <Tabs
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
        </Tabs> */}
      </div>
    </div>
  );
}

export default Experience;
