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
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque,  dolor sit amet consectetur adipisicing elit. Enim praesentium neque,  dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  info: [
    { fieldName: 'Name', fieldValue: 'Mahaveer Singh Gurjar' },
    { fieldName: 'Experience', fieldValue: `${getExperienceTime()}` },
    { fieldName: 'Nationality', fieldValue: 'Indian' },
    { fieldName: 'Language', fieldValue: 'Hindi, English' },
  ],
};

export const education = {
  title: 'My Education',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque,  dolor sit amet consectetur adipisicing elit. Enim praesentium neque,  dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
  info: {
    duration: 'August 2023 - June 2024',
    degree: ' Btech (Chemical Engineering)',
    institute_name: 'Indian Institute of Technology, Tirupati (India)',
  },
};

export const skills = {
  title: 'My Skills',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium neque, ipsam cumque repellat consequatur tenetur quae ad in id.',
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
