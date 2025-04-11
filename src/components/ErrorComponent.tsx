import notFoundImg from '@/assets/not_found.png';

function ErrorComponent() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10 text-black/50'>
      <img src={notFoundImg} alt='Not Found Img' className='h-40 w-40' />
      <p className='text-4xl'>Oops! 404 - Page Not Found</p>
      <p className='text-xl'>The page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorComponent;
