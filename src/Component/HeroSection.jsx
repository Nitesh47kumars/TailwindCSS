import React from 'react'

const HeroSection = () => {
  return (
    <header className='flex max-sm:flex-col'>
      <div className='h-[clamp(10rem,30vw,33rem)] w-full flex justify-center items-center bg-slate-600'>
        <h1
        className='text-white font-bold w-[80%] text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-sm'>
          THE INDUSTRY REQUIRES ADVANCED SKILLS.
          <br/>
          GET IT THE SMART WAY
        </h1>
      </div>
      <img
      className='h-[clamp(10rem,30vw,33rem)] w-full object-cover max-sm:h-100'
      src='https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/03/the-boys-season-3-poster.png?ssl=1'
      alt=''/>
    </header>
  )
}

export default HeroSection
