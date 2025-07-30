import React from 'react'
import Content from './Content.json'
import Products from './Product.json'

const InfoSection = () => {
    
  return (
    <>
      <div className='h-auto w-full bg-blue-950 flex flex-col items-center'>
        <div className='flex flex-col items-center my-5 max-sm:my-5'>
            <h1 className='text-blue-700 text-[clamp(0.8rem,2vw,1.5rem)] px-1 pb-1 font-semibold border-b-4 rounded-lg border-yellow-500'>Pure Hardwork, No Shortcuts!</h1>
        </div>

        <div className='flex justify-evenly flex-wrap w-[90%]'>
            {Content.map((curr,idx)=>{
                return <div 
                key={idx}
                className='flex flex-col items-center m-5'>
                <img
                className='rounded-full h-40 w-40 object-cover mb-3'
                src={curr.image.src}
                alt={curr.image.alt}
                />
                <h1 className='text-white text-2xl font-bold'>{curr.title}</h1>
                <h3 className='text-gray-500 text-xl font-bold'>{curr.body}</h3>
            </div>
            })}
        </div>

        <div className='flex flex-col items-center mt-10'>
            <h1 className='text-blue-700 text-[clamp(0.9rem,2vw,1.5rem)] px-1 pb-1 font-semibold border-b-4 rounded-lg border-yellow-500'>Our Products</h1>
        </div>

        <div className='w-[90%] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[28.8rem]:grid-cols-1'>
            {Products.map((curr,idx)=>{
                return <div 
                key={idx}
                className='place-self-center w-50 flex flex-col items-center p-5 m-5 border-2 border-transparent hover:border-amber-400 '>
                <img
                className='rounded-full h-[8.75rem] w-[8.75rem] object-cover mb-3'
                src={curr.image.src}
                alt={curr.image.alt}
                />
                <h1 className='text-white text-2xl font-bold'>{curr.title}</h1>
                <h3 className='text-gray-500 text-[clamp(0.6rem,2vw,0.8rem)] font-bold'>{curr.description}</h3>
            </div>
            })}
        </div>
      </div>

      
    </>
  )
}

export default InfoSection
