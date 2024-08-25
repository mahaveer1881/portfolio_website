function ImgDisplay({ imgUrl }: { imgUrl: string }) {
  return (
    <div className='w-full h-full relative'>
      <div className='w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
        <img src={imgUrl} alt='about/img' className='w-full h-auto' />
      </div>
    </div>
  );
}

export default ImgDisplay;
