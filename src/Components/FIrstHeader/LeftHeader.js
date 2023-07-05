import React from 'react'
import { FaBeer } from 'react-icons/fa';

export default function LeftHeader() {
  return (
    <>
      <div className='flex  bg-black  items-center   justify-evenly w-[100%] p-2'>
        <p className='text-white p-5 font-bold text-4xl  font-Montserrat'>Arrival</p>
        <div>
        <button className='bg-white text-black rounded-3xl  font-bold px-6 py-2'>Shop Now</button>
        </div>

      </div>

    </>
  )
}
