import { RouterProvider } from 'react-router-dom';
import { getRouter } from './routes';
import ParticlesAnimation from './components/ParticlesAnimation';

function App() {
  const router = getRouter();
  return (
    <div>
      <ParticlesAnimation />
      <div className='relative z-100'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
