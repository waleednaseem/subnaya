import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BiSolidCartAlt } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

import Modal from 'react-modal';
import Login from '@/Components/Login_SignupModal/Login';
import Signup from '@/Components/Login_SignupModal/Signup';
export default function
  () {
  const [ClosedModal, setClosedModal] = useState(false)
  const Menus = ["login", "track your order", "my wish list"]
  const [open, Setopen] = useState(false)
  const [acc, Setacc] = useState(true)

  return (
    <div>
      <div >

        <Modal
          isOpen={ClosedModal}
          className={'m-auto w-[45%] shadow-md  outline-none my-4 h-[70%] overflow-y-auto  shadow-zinc-600 bg-white p-6 z-40'}
        >
          <div onClick={() => setClosedModal(false)} className='  w-[100%] flex justify-end px-5 cursor-pointer' >X</div>
        {/* {<Login/>? <Signup/>} */}
       {acc ?<Login Setacc={Setacc}/>:<Signup/>}
        </Modal>
      </div>
      < div className='flex  items-center'>
        <ul className='capitalize  relative cursor-pointer font-Montserrat font-medium text-base text-contentColor pr-4'>
          <li><a className='text-gray-950  inline-flex' onClick={() => Setopen(!open)}><FaUserAlt className='mr-1.5' /> MY ACCOUNT <BsChevronDown className='mr-1.5	' /></a>
            {open && (
              <ul className=' bg-black text-white p-4  z-10 absolute'>

                {
                  Menus.map((menu,i) => (
                    <li onClick={()=> (menu == 'login'&&(setClosedModal(true),Setopen(false)))} className='border-b-2 pb-1   mb-2 leading-9  cursor-pointer text-sm' key={i}>{menu}

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
