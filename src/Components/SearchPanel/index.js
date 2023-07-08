import React from 'react'
import Left_pane from './Left_pane'
import Right_pane from './Right_pane'

export default function index({setSearchBox}) {
  
  return (
    <div className=' w-[100%]  flex  justify-center flex-col'>
    <div onClick={()=>setSearchBox(false)} className=' w-[100%] flex justify-end px-5' >X</div>
    <div className='flex bg-bgprimary'>
        <Left_pane/>
        <Right_pane/>
        </div>
    </div>
  )
}
