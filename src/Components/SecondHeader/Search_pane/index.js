import React from 'react'
import { BsSearch } from 'react-icons/bs';

export default function 
() {
  return (
    <div>
          {/*SECOND   */}
          <div className='flex border border-gray-400 rounded-full items-center px-6 py-1  w-[60%]'>
            <input className="required  w-full outline-none  " />
            <span><BsSearch></BsSearch></span>
          </div>
          {/* SECOND */}
    </div>
  )
}
