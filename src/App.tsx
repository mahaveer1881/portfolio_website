import { RouterProvider } from 'react-router-dom';
import { getRouter } from './routes';

function App() {
  const router = getRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
