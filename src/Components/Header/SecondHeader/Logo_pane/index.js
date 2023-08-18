import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function index() {
  const logo = 'images/logo-img.svg'
  return (

    <div className='header_logo'>
      <Link href="/" className='hamberger' ><FaBars/></Link>
      <img src={logo} height={100} width={170} />
    </div>
  )
}
