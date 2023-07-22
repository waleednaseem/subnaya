import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';
export default function 
() {
  const Menus = ["login" ,"track your order" , "my wish list"]
  const [open , Setopen] = useState(false)
  return (
    
        <div>
           < div className='flex  items-center'>
            <ul className='capitalize  relative cursor-pointer font-Montserrat font-medium text-base text-contentColor pr-4'>
              <li><a className='text-gray-950  inline-flex' onClick={()=>Setopen(!open)}><FaUserAlt className='mr-1.5' /> MY ACCOUNT <BsChevronDown className='mr-1.5	' /></a>
            {open && (
               <ul className=' bg-black text-white p-4  z-10 absolute'>
              
               {
                 Menus.map((menu)=>(
                   <li className='border-b-2 pb-1   mb-2 leading-9  cursor-pointer text-sm'  key={menu}>{menu}

                   </li>
                 ))
               }
             </ul>
            )
               
            }
              </li>
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
