import MainLayout from '@/components/layouts/MainLayout';
import { PATH_ROUTES } from '@/constants/path';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Experience from '@/pages/Experience';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';
import { createBrowserRouter } from 'react-router-dom';

export const getRouter = () => {
  return createBrowserRouter([
    {
      element: <MainLayout />,
      children: routes,
    },
  ]);
};

const routes = [
  { path: PATH_ROUTES.HOME, element: <Home /> },
  { path: PATH_ROUTES.SERVICES, element: <Services /> },
  { path: PATH_ROUTES.CONTACT, element: <Contact /> },
  { path: PATH_ROUTES.PROJECTS, element: <Projects /> },
  { path: PATH_ROUTES.EXPERIENCE, element: <Experience /> },
  { path: PATH_ROUTES.ABOUT, element: <About /> },
];
