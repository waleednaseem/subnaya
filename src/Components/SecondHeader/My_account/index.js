import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

import Modal from 'react-modal';
export default function 
({setClosedModal}) {
  const Menus = ["login" ,"track your order" , "my wish list"]
  const [open , Setopen] = useState(false)
  return (
    
        <div>
          <div >
         
          <Modal 
          isOpen={true}
          >
              <div onClick={()=>setClosedModal(false)} className=' w-[100%] flex justify-end px-5' >X</div>
          <div>
          <h4 className=' text-center text-4xl text-black  font-bold font-Montserrat mb-3 capitalize'>login</h4>
            <form className=''>
              <div className=' relative mt-4'>
                <label className=' font-bold font-Montserrat  capitalize '>Email</label>
              <input placeholder='Johndoe@gmail.com' className='font-Montserrat py-2 px-3 mt-2 text-sm bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none'/>
              <div className=' absolute  right-3 top-11 '>
                <AiOutlineMessage className='text-base text-pinkColor'/>
              </div>
              </div>
           
              <div className=' relative mt-4'>
                <label className=' font-bold font-Montserrat  capitalize '>Password</label>
              <input placeholder='***********' className='font-Montserrat  pt-2 px-3 mt-2  text-lg bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none'/>
              <div className=' absolute  right-3 top-11 '>
                <AiOutlineEye className='text-base text-pinkColor'/>
              </div>
              </div>
              <button className='mt-5 font-bold font-Montserrat border-2  py-3 text-white px-4 bg-pinkColor  capitalize'>sign up</button>
            </form>
          </div>

          <div>
          <h4 className=' text-center text-4xl text-black  font-bold font-Montserrat mb-3 capitalize'>Sign Up</h4>
            <form className=''>
            <div className=' relative mt-4'>
                <label className=' font-bold font-Montserrat  capitalize '>Name</label>
              <input placeholder='Name' className='font-Montserrat py-2 px-3 mt-2 text-sm bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none'/>
              <div className=' absolute  right-3 top-11 '>
                <AiOutlineUser className='text-base text-pinkColor'/>
              </div>
              </div>
              <div className=' relative mt-4'>
                <label className=' font-bold font-Montserrat  capitalize '>Email</label>
              <input placeholder='Johndoe@gmail.com' className='font-Montserrat py-2 px-3 mt-2 text-sm bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none'/>
              <div className=' absolute  right-3 top-11 '>
                <AiOutlineMessage className='text-base text-pinkColor'/>
              </div>
              </div>
           
              <div className=' relative mt-4'>
                <label className=' font-bold font-Montserrat  capitalize '>Password</label>
              <input placeholder='***********' className='font-Montserrat  pt-2 px-3 mt-2  text-lg bg-transparent border-2  border-pinkColor  font-light  w-full placeholder:text-black   focus:outline-none'/>
              <div className=' absolute  right-3 top-11 '>
                <AiOutlineEye className='text-base text-pinkColor'/>
              </div>
              </div>
              <button className='mt-5 font-bold font-Montserrat border-2  py-3 text-white px-4 bg-pinkColor  capitalize'>login</button>
            </form>
          </div>
          </Modal>
          </div>
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
