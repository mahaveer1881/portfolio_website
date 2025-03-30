function ThreeImagesDisplay({
  photo1,
  photo2,
  photo3,
}: {
  photo1: string;
  photo2: string;
  photo3: string;
}) {
  return (
    <div className='flex justify-center items-start flex-col mb-5'>
      <div className='images relative w-full aspect-square'>
        <div className='absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
          <div
            className='w-full h-full'
            style={{ opacity: 1, transform: 'none' }}
          >
            <img
              alt='Mahaveer'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              sizes='100vw'
              src={photo1}
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                objectFit: 'cover',
                color: 'transparent',
              }}
            />
          </div>
        </div>
        <div className='absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
          <div
            className='w-full h-full'
            style={{ opacity: 1, transform: 'none' }}
          >
            <img
              alt='Alvalens'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              sizes='100vw'
              src={photo2}
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                objectFit: 'cover',
                color: 'transparent',
              }}
            />
          </div>
        </div>
        <div className='absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300'>
          <div
            className='w-full h-full'
            style={{ opacity: 1, transform: 'none' }}
          >
            <img
              alt='Alvalens'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              sizes='100vw'
              src={photo3}
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                objectFit: 'cover',
                color: 'transparent',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeImagesDisplay;
