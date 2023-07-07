import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function index() {
    const logo = 'images/logo-img.svg'
  return (
    <div>
         {/* FIRST DIV START* */}
         <div className='flex  justify-between items-center'>
            <Link href="/" className=' text-black text-base	 font-Montserrat cursor-pointer' ><FaBars /></Link>
            <img src={logo} height={100} width={170} />
          </div>

          {/* FIRST DIV END */}
    </div>
  )
}
