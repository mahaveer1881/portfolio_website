import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ScrollArea } from '../ui/scroll-area';

function MainLayout() {
  return (
    <div className='rubik-fontFamily'>
      <Header />
      <ScrollArea className='h-[calc(100vh-130px)]'>
        <Outlet />
      </ScrollArea>
    </div>
  );
}

export default MainLayout;
