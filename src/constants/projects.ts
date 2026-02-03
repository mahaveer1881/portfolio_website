import project_1 from "@/assets/project_1.png";

export const projectsTabs = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "full_stack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export interface ProjectDataType {
  id: string;
  category: string;
  title: string;
  short_desc: string;
  desc: string;
  stack: string[];
  image?: string[];
  live?: string;
  github?: string;
  year: string;
}

export const personalProjects = [
  {
    id: "free-image-tools",
    category: "frontend",
    title: "Free Image Tools",
    short_desc:
      "A set of free online tools to edit, resize, and compress images quickly without installing any software.",
    desc: "Free Image Tools is a web application designed to provide users with simple yet powerful image manipulation utilities. It includes features such as resizing, cropping, and compression, all accessible directly from the browser. Built with React.js and TailwindCSS, the platform emphasizes speed and ease of use, allowing users to quickly process images for social media, websites, or personal projects. The app ensures responsive performance, works on all devices, and eliminates the need for expensive desktop software, making professional-level image editing accessible to everyone.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "https://github.com/mahaveer1881/free-image-tools",
    year: "2026",
  },
  {
    id: "compare-kart",
    category: "frontend",
    title: "Compare Kart",
    short_desc:
      "A product comparison platform that helps users find the best deals across multiple online stores efficiently.",
    desc: "Compare Kart is a frontend application aimed at simplifying online shopping by allowing users to compare prices and features of products from multiple e-commerce websites. Built with React.js, Typescript, and TailwindCSS, it offers a clean and responsive interface. Users can search for products, view detailed comparisons, and make informed decisions before purchasing. The platform fetches real-time pricing data and highlights the best deals, making shopping faster and smarter. It’s ideal for tech-savvy shoppers who want to save both time and money while ensuring they get the best value.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "https://compare-kart-kappa.vercel.app",
    github: "https://github.com/mahaveer1881/compare-kart",
    year: "2026",
  },
  {
    id: "travel-website",
    category: "frontend",
    title: "Travel Website",
    short_desc:
      "A responsive travel website showcasing destinations, itineraries, and booking options for travelers worldwide.",
    desc: "Travel Website is a feature-rich frontend application created to inspire and assist travelers in planning their trips. Built with React.js, TailwindCSS, and Typescript, it provides a visually appealing interface displaying popular destinations, suggested itineraries, travel tips, and integrated booking options. The website prioritizes user experience with smooth navigation, interactive content, and responsive design for all devices. Users can explore destinations by region, read detailed guides, and find hotels or tours, making trip planning seamless. This project demonstrates modern frontend practices while focusing on aesthetics, functionality, and user engagement.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "https://travel-website-phi-sable.vercel.app",
    github: "https://github.com/mahaveer1881/travel-website",
    year: "2026",
  },
  {
    id: "free-dev-tools",
    category: "frontend",
    title: "Free-Dev-Tools",
    short_desc:
      "A collection of free developer tools online to simplify coding, testing, and productivity for programmers.",
    desc: "Free-Dev-Tools is a web application providing a curated set of developer utilities to streamline coding and testing workflows. Built with React.js, TailwindCSS, and Typescript, it includes features such as code formatting, debugging utilities, performance checkers, and small productivity enhancers. The app is designed to run entirely in the browser, allowing developers to quickly access essential tools without installing software. Its responsive design ensures usability across devices, making it a convenient companion for programmers working on multiple projects or learning new technologies. The platform aims to save time and improve efficiency in daily development tasks.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "https://github.com/mahaveer1881/free-dev-tools",
    year: "2025",
  },
  {
    id: "dbuddy-app",
    category: "apps",
    title: "dBuddy App",
    short_desc:
      "A mobile app to manage daily tasks, reminders, and schedules efficiently for personal productivity.",
    desc: "dBuddy App is a React Native mobile application built to help users organize and manage their daily routines effectively. Using Typescript and TailwindCSS for consistent styling and robust type safety, the app allows users to create tasks, set reminders, and manage their personal schedules seamlessly. Designed for both iOS and Android, dBuddy App emphasizes intuitive navigation, smooth performance, and reliable notifications. Its clean interface ensures users can quickly access and update their tasks, enhancing productivity. The app demonstrates modern mobile development practices while focusing on user-centered design and functionality.",
    stack: ["React Native", "Typescript", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "https://github.com/mahaveer1881/dBuddy-app",
    year: "2025",
  },
  {
    id: "charcha-platform",
    category: "frontend",
    title: "Charcha Platform - Twitter Clone",
    short_desc:
      "A social media clone of Twitter where users can post, follow, like, and comment on messages online.",
    desc: "Charcha Platform is a frontend web application replicating the core functionality of Twitter. Built using React.js, Typescript, and TailwindCSS, it allows users to create accounts, post messages, follow other users, and interact through likes and comments. The platform emphasizes responsive design, smooth user interaction, and visually appealing layouts. It demonstrates knowledge of component-based architecture, state management, and frontend best practices. Users can enjoy a familiar social media experience with a modern UI, making this project an ideal example for showcasing skills in building interactive, real-time platforms similar to popular social networks.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "https://github.com/mahaveer1881/charcha-platform",
    year: "2025",
  },
  {
    id: "varta-app",
    category: "apps",
    title: "Varta App - News Scrolling Platform",
    short_desc:
      "A mobile app for scrolling and reading news articles with a smooth, interactive user interface.",
    desc: "Varta App is a mobile application built with React Native, Typescript, and TailwindCSS, designed to provide users with an engaging platform to read news articles seamlessly. It offers smooth scrolling, category filtering, and a visually appealing interface to enhance the reading experience. The app prioritizes performance, ensuring quick loading times and minimal lag, while maintaining responsiveness across devices. Users can stay updated with current events in a convenient, interactive format. This project demonstrates expertise in mobile app development, UI design, and state management for a content-heavy platform.",
    stack: ["React Native", "Typescript", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "https://github.com/mahaveer1881/varta-app",
    year: "2025",
  },
  {
    id: "stoody-webapp",
    category: "frontend",
    title: "Stoody Social Media Platform",
    short_desc:
      "A social media platform for connecting users, sharing posts, and engaging with communities online.",
    desc: "Stoody Social Media Platform is a frontend web application built with React.js, Typescript, and TailwindCSS that allows users to connect, share content, and interact within communities. The app provides functionalities like posting, liking, commenting, and following, all wrapped in a modern, responsive interface. Designed with usability in mind, Stoody prioritizes smooth navigation, visual appeal, and quick access to essential features. This project highlights the developer’s skills in creating interactive social platforms, managing state effectively, and implementing best practices in frontend development to deliver a rich user experience.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "react-auth-library",
    category: "frontend",
    title: "react-auth-library",
    short_desc:
      "A React.js authentication library to manage login, signup, and user sessions efficiently in web apps.",
    desc: "react-auth-library is a frontend library built using React.js and Typescript, designed to simplify user authentication in web applications. It provides developers with pre-built components and hooks to manage login, signup, password resets, and session handling. The library emphasizes security, usability, and seamless integration, allowing quick setup in React projects. It also supports responsive design, customizable UI components, and token-based authentication, making it suitable for modern web applications. This project showcases advanced React.js knowledge, component design, and best practices for building reusable and scalable frontend libraries.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "grow-organic-website",
    category: "frontend",
    title: "Grow Organic Website",
    short_desc:
      "A responsive website for promoting organic products, providing information and contact options to customers.",
    desc: "Grow Organic Website is a frontend application built with React.js, Typescript, and TailwindCSS to showcase organic products and educate users on sustainable practices. The website features sections on product benefits, farming practices, and contact forms for customer inquiries. Designed with responsiveness in mind, it works well across all devices and browsers. The clean interface and smooth navigation make it user-friendly, while the focus on content organization ensures visitors can quickly find relevant information. This project demonstrates the developer’s skills in creating promotional websites with strong design, accessibility, and modern frontend technologies.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "codebooklabs-website",
    category: "frontend",
    title: "CodebookLabs Website",
    short_desc:
      "A company website highlighting services, projects, and contact information for visitors and clients.",
    desc: "CodebookLabs Website is a professional frontend project created with React.js, Typescript, and TailwindCSS. It presents the company’s services, portfolio, team information, and contact details in a structured and visually appealing manner. The site is responsive, optimized for performance, and designed with intuitive navigation to provide visitors a smooth browsing experience. It highlights modern web design practices, component-based development, and aesthetic layout planning. This project serves as an example of how frontend skills can be applied to create corporate websites that are both functional and visually attractive.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "TailwindCSS"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "spotify-clone",
    category: "full_stack",
    title: "Spotify Clone",
    short_desc:
      "A full-stack clone of Spotify, allowing users to browse music, playlists, and play tracks seamlessly online.",
    desc: "Spotify Clone is a full-stack web application built with React.js, Node.js, Express, MongoDB, TailwindCSS, and Typescript. It replicates core Spotify features, including music browsing, playlist management, track playback, and search functionality. The frontend offers a responsive interface, while the backend handles user authentication, data storage, and API interactions efficiently. Users can create accounts, save playlists, and play songs in real-time. This project demonstrates end-to-end development skills, including database design, REST API implementation, frontend state management, and UI/UX design, showcasing the developer’s ability to build complex interactive applications similar to popular music streaming platforms.",
    stack: [
      "HTML",
      "CSS",
      "Typescript",
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "personal-portfolio-website",
    category: "frontend",
    title: "Personal Portfolio Website",
    short_desc:
      "A personal portfolio website showcasing skills, projects, experience, and contact information professionally.",
    desc: "Personal Portfolio Website is a frontend project built using React.js, Typescript, and TailwindCSS, designed to present a developer’s work and skills. It features sections for project showcases, professional experience, technical skills, and a contact form. The website emphasizes a modern and responsive design, allowing it to adapt seamlessly to different screen sizes. Interactive elements, smooth scrolling, and clear content organization enhance the user experience. This project demonstrates frontend development expertise, attention to design aesthetics, and effective personal branding for developers seeking to display their work in a professional and visually appealing manner.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "Tailwind"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "gemini-clone",
    category: "frontend",
    title: "Gemini Clone",
    short_desc:
      "A frontend clone of the Gemini cryptocurrency trading platform showcasing live pricing and trading features.",
    desc: "Gemini Clone is a frontend application built with React.js, Typescript, and TailwindCSS that replicates the look and feel of the Gemini crypto trading platform. It displays live cryptocurrency prices, market trends, and simulated trading functionalities. The interface is designed to be responsive, visually appealing, and easy to navigate. Users can interact with charts, view coin details, and simulate buying or selling activities. This project demonstrates the developer’s ability to build fintech-inspired frontend applications with dynamic content, interactive UI elements, and modern design principles.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "Tailwind"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2024",
  },
  {
    id: "bank-website",
    category: "frontend",
    title: "Bank Website",
    short_desc:
      "A responsive banking website presenting services, account options, and customer support details for users.",
    desc: "Bank Website is a frontend application built using React.js, Typescript, and TailwindCSS to provide a modern interface for a banking platform. The website includes sections for services offered, account types, customer support, and informational content. Its design focuses on user experience, accessibility, and responsive layouts to ensure seamless usage on desktop and mobile devices. Interactive elements such as forms and menus are optimized for smooth interaction. This project demonstrates skills in creating professional-grade websites for the finance sector while implementing frontend best practices, responsive design, and clean UI structures.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "Tailwind"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2024",
  },
  {
    id: "calculator",
    category: "frontend",
    title: "React Calculator",
    short_desc:
      "A React-based calculator app performing arithmetic operations with a clean and interactive user interface.",
    desc: "React Calculator is a frontend project built with React.js, Typescript, and TailwindCSS that provides users with a simple yet fully functional calculator. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The interface is designed for clarity and responsiveness, making it easy to use on both desktop and mobile devices. State management is handled efficiently using React hooks, ensuring smooth updates for each operation. This project demonstrates proficiency in React development, component structuring, and UI/UX design, making it an ideal project for learning and showcasing frontend skills.",
    stack: ["HTML", "CSS", "Typescript", "React.js", "Tailwind"],
    image: [project_1, project_1, project_1],
    live: "",
    github: "",
    year: "2024",
  },
];
export const companyProjects = [
  {
    id: "whatsapp-flow",
    category: "full_stack",
    title: "WhatsApp Flow",
    short_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!",
    stack: [
      "HTML",
      "CSS",
      "React.js",
      "Typescript",
      "WhatsApp Business API",
      "Django",
      "Python",
      "Postgres",
    ],
    image: [project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "app-internal-tool",
    category: "Frontend",
    title: "App - Internal Tool",
    short_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!",
    stack: ["React.js", "Typescript", "Tanstack", "Zustand"],
    image: [project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "financial-mgmt",
    category: "frontend",
    title: "Financial Data Management Tool",
    short_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!",
    stack: ["React.js", "Typescript", "Shadcn UI", "Tailwind"],
    image: [project_1],
    live: "",
    github: "",
    year: "2025",
  },
  {
    id: "template-mgmt",
    category: "frontend",
    title: "Template Management Tool",
    short_desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nam optio dolor veniam eius, aliquam quod quas ducimus nobis alias!",
    stack: ["React.js", "Typescript", "Shadcn UI", "Tailwind"],
    image: [project_1],
    live: "",
    github: "",
    year: "2025",
  },
];
