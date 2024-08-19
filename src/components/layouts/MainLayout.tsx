import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
  return (
    <div className='rubik-fontFamily'>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
