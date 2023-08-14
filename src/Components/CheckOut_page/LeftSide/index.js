import React from 'react'
import Form from './form'

import { BsFacebook } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { AiOutlineGoogle } from 'react-icons/ai'

export default function index( ) {
  return (
    <div className='border  p-2'>

      <button className='bg-black text-white p-1 border rounded-md md:w-96 m-1'> LOGIN WITH</button>


      <div className='  md:flex md:gap-6 xl:flex gap-1 p-2 '  >

        <div className='flex p-2 bg-blue-gray-500 h-10'>
          <li className=' md:border-r-2 border-black p-1 flex' >
            <BsFacebook size={20} />

          </li>
          <button className=' text-white  m-1 text-sm'> E-MAIL</button>
        </div>
        <div className='flex p-2 bg-blue-700 h-10'>
          <li className=' md:border-r-2 border-black p-1 flex' >
            <BiLogoGmail size={20} />

          </li>
          <button className=' text-white m-1 text-sm'> Facebook</button>
        </div>
        <div className='flex p-2 bg-red-500 h-10'>
          <li className=' md:border-r-2 border-black p-1 flex' >
            <AiOutlineGoogle size={20} />

          </li>
          <button className=' text-white m-1 text-sm'> Google</button>
        </div>
      </div>

      <button className='bg-black text-white p-2 border rounded-md md:w-96 m-2 flex text-sm'> 1 Billing/Shipping Address</button>
      <Form />

    </div>
  )
}
