import React from 'react'
import Main from '../Components/Main'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';


export default function index() {
  const logo = 'images/logo-img.svg'
  const first_pic = 'images/jewel.jpg'
  
  const array=[
    {
      id:1,
      name:"kundan",
      image:first_pic,
      content:'this is my content'
    },
    {
      id:2,
      name:"kundan",
      image:first_pic,
      content:'this is my content'
    },
  ]

  return (
    <div>
      <Main />
      <div className='flex justify-center items-center flex-col'>
        {/* main div */}
        <div className='w-full p-2 flex justify-between '>

          {/* FIRST DIV START* */}
          <div className='flex  justify-between items-center'>
            <Link href="/" className=' text-black text-base	 font-Montserrat cursor-pointer' ><FaBars /></Link>
            <img src={logo} height={100} width={170} />
          </div>

          {/* FIRST DIV END */}

          {/*SECOND   */}
          <div className='flex border border-gray-400 rounded-full items-center px-6 py-1  w-[60%]'>
            <input className="required  w-full outline-none  " />
            <span><BsSearch></BsSearch></span>
          </div>
          {/* SECOND */}

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
        <div className=' w-[100%] gap-4 px-2 bg-red-700  flex  py-2'>
          <div className='w-[30%] border-4 p-2   rounded-lg py-5' >
            <h5 className=''>releted categories </h5>
            <ul>
              <li>sha Unstitched Luxe Atelier Edit 2 2023</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>
              <li>Safwa Digital Printed Cotton Kurti Collection 2023 Vol-04</li>


            </ul>
          </div>

          <div className='w-[70%] border-4 rounded-lg border-slate-700  px-2 py-2' >
            <div className=' w-32 p-2 flex justify-center items-center flex-col border-4 rounded-lg border-slate-400 '>
              <img src='images/jewel.jpg' width={100} />
              <div className='text-sm  text-cyan-50'>
                <p>Threads & Motifs Pret Embroidered Organza Peplum Dress 8395.2</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
