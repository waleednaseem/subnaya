import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';
export default function 
() {
  return (
    
        <div>
           < div className='flex  items-center'>
            <ul className='capitalize font-Montserrat font-medium text-base text-contentColor pr-4'>
              <li><a className='text-gray-950  inline-flex'><FaUserAlt className='mr-1.5' /> MY ACCOUNT <BsChevronDown className='mr-1.5	' /> </a></li>
            </ul>
            <ul className='font-Montserrat font-medium text-base text-contentColor pr-2'>
              <li>< a className='text-gray-950 '> PKR</a></li>
            </ul>

            <ul className='flex font-Montserrat font-medium text-base text-contentColor'>
              <li>< a className='inline-flex'><BiSolidCartAlt className='mr-1.5	' />Cart</a></li>
              <li>< a className='text-gray-950 ml-1.5 pr-3'>0</a></li>
            </ul>
          </div>
        </div>
          
          
  
  )
}
