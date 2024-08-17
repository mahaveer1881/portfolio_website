import { Button } from './ui/button';

function Home() {
  return (
    <div>
      <p className='bg-red-300 text-blue-400'>
        My Name is Mahaveer Singh Gurjar
      </p>
      This is Home Page
      <Button className='w-full h-10'>Click here</Button>
    </div>
  );
}

export default Home;
