import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';
export default function 
() {
  return (
    <div>
        
           {/* THIRD */}
           < div className='flex  items-center'>
            <ul className=''>
              <li><a className='text-gray-950  inline-flex'><FaUserAlt className='mr-1.5' /> MY ACCOUNT <BsChevronDown className='mr-1.5	' /> </a></li>
            </ul>
            <ul>
              <li>< a className='text-gray-950 '> PKR</a></li>
            </ul>

            <ul className='flex'>
              <li>< a className='inline-flex'><BiSolidCartAlt className='mr-1.5	' />Cart</a></li>
              <li>< a className='text-gray-950 ml-1.5'>0</a></li>
            </ul>
          </div>
          {/* THIRD */}
    </div>
  )
}
