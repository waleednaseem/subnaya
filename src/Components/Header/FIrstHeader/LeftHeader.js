import React from 'react'

export default function LeftHeader() {
  
  return (
    <>
      <div className='header flex  items-center   justify-evenly w-[100%] p-2'>
        {/* <p className='text-white p-5 font-bold text-4xl  font-Montserrat'>Arrival</p> */}
        <p className='text-color'>Arrival</p>
        <div>
          <button className='bg-white text-black   font-bold px-6 py-2'>Shop Now</button>
        </div>
      </div>
    </>
  )
}
