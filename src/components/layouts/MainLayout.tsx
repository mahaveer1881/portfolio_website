import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ScrollArea } from '../ui/scroll-area';
import ScrollToTop from '../portfolio/ScrollToTop';
import Footer from './Footer';

function MainLayout() {
  return (
    <div className='rubik-fontFamily'>
      <Header />
      <ScrollToTop />
      <ScrollArea className=''>
        <Outlet />
        {/* <p className='text-white text-center w-[90%] text-xs xl:text-sm xl:w-[80%] mx-auto my-4'>
          *** Thank you for visiting my portfolio! While all pages are live, I’m
          currently refining and updating some content to better showcase my
          work.
          <br />
          *** Please check back soon for the latest updates. If you have any
          questions or want to discuss a project, feel free to{' '}
          <span
            className='italic text-accent border-b cursor-pointer'
            onClick={() => navigate('/contact')}
          >
            contact me
          </span>
          .
        </p> */}
      </ScrollArea>
      <Footer />
    </div>
  );
}

export default MainLayout;
