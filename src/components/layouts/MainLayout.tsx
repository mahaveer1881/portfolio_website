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
      </ScrollArea>
      <Footer />
    </div>
  );
}

export default MainLayout;
