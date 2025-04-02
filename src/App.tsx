import { RouterProvider } from 'react-router-dom';
import { getRouter } from './routes';
// import ParticlesAnimation from './components/ParticlesAnimation';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
function App() {
  const router = getRouter();
  return (
    <div>
      {/* <ParticlesAnimation /> */}
      <div className='relative z-100'>
        <RouterProvider router={router} />
      </div>
      <Toaster />
      <Analytics />
    </div>
  );
}

export default App;
