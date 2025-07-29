import React from 'react'
import Content from './Content.json'
import Products from './Product.json'

const InfoSection = () => {
    
  return (
    <>
      <div className='h-auto w-full bg-blue-950 flex flex-col items-center'>
        <div className='flex flex-col items-center mt-5'>
            <h1 className='text-blue-700 text-2xl px-1 pb-1 font-semibold border-b-4 rounded-lg border-yellow-500 max-sm:text-sm'>Pure Hardwork, No Shortcuts!</h1>
        </div>

        <div className='flex justify-evenly flex-wrap w-[80%]'>
            {Content.map((curr,idx)=>{
                return <div 
                key={idx}
                className='text-center m-5'>
                <img
                className='rounded-full h-60 w-60 object-cover mb-3'
                src={curr.image.src}
                alt={curr.image.alt}
                />
                <h1 className='text-white text-2xl font-bold'>{curr.title}</h1>
                <h3 className='text-gray-500 text-xl font-bold'>{curr.body}</h3>
            </div>
            })}
        </div>

        <div className='flex flex-col items-center mt-5'>
            <h1 className='text-blue-700 text-2xl px-1 pb-1 font-semibold border-b-4 rounded-lg border-yellow-500 max-sm:text-sm'>Our Products</h1>
        </div>

        <div className='grid grid-cols-5 w-[90%]'>
            {Products.map((curr,idx)=>{
                return <div 
                key={idx}
                className='text-center flex flex-col items-center m-5'>
                <img
                className='rounded-full h-50 w-50 object-cover mb-3'
                src={curr.image.src}
                alt={curr.image.alt}
                />
                <h1 className='text-white text-2xl font-bold'>{curr.title}</h1>
                <h3 className='text-gray-500 text-sm font-bold'>{curr.description}</h3>
            </div>
            })}
        </div>
      </div>
    </>
  )
}

export default InfoSection
