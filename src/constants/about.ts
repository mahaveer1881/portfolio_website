import { getExperienceTime } from '@/utils';
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const about = {
  title: 'About me',
  desc: 'My journey into software development began with my first programming class in college. Initially, I found it quite challenging to grasp the concepts, but over time, my curiosity and fascination grew. As I continued to learn and experiment with various programming languages and technologies, I found my passion for coding deepening. Each experience has contributed to shaping my approach and reinforcing my love for this field.',
  homepageDesc:
    'Hi there! I’m a software developer who loves diving into the world of code and creating solutions that make a difference. From designing user-friendly interfaces to building robust backends, I’m passionate about crafting software that not only works but truly shines.',
  info: [
    { fieldName: 'Name', fieldValue: 'Mahaveer Singh Gurjar' },
    { fieldName: 'Experience', fieldValue: `${getExperienceTime()}` },
    { fieldName: 'Nationality', fieldValue: 'Indian' },
    { fieldName: 'Language', fieldValue: 'Hindi, English' },
  ],
};

export const education = {
  title: 'My Education',
  desc: 'During my studies, I tackled complex engineering challenges and engaged in hands-on projects that refined my analytical abilities. The experience not only deepened my technical expertise but also fostered a methodical approach to problem-solving. These skills have been invaluable in my transition to software development, allowing me to approach technical challenges with a structured and innovative mindset.',
  homePageDesc:
    'I hold a Bachelor of Technology (BTech) in Chemical Engineering from IIT Tirupati. My time there provided a strong technical foundation and shaped my problem-solving skills, which now underpin my work in software development.',
  info: {
    duration: 'August 2019 - June 2023',
    degree: ' Btech (Chemical Engineering)',
    institute_name: 'Indian Institute of Technology, Tirupati (India)',
  },
};

export const skills = {
  title: 'My Skills',
  desc: 'I’m proficient in a variety of technologies essential for modern web and software development. My skill set includes HTML, CSS, JavaScript, TypeScript, React, Next.js, and Python. These tools and frameworks empower me to build dynamic, responsive applications and solve complex problems effectively.',
  skillList: [
    { icon: FaHtml5, name: 'html 5', icon_2: 'html_icon' },
    { icon: FaCss3, name: 'css 3', icon_2: 'css_icon' },
    { icon: FaJs, name: 'javascript', icon_2: 'js_icon' },
    { icon: FaReact, name: 'React.js', icon_2: 'react' },
    { icon: SiNextdotjs, name: 'next.js', icon_2: 'nextjs_icon' },
    { icon: SiTailwindcss, name: 'tailwind.css', icon_2: 'tailwindcss' },
    { icon: FaPython, name: 'python', icon_2: 'python' },
    { icon: FaFigma, name: 'figma', icon_2: 'figma' },
  ],
};
