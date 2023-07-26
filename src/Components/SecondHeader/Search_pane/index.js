import React,{useState} from 'react'
import { BsSearch } from 'react-icons/bs';

export default function index({setSearchBox}) {
  const [content,setContent]=useState('')
  return (
    <div>
  <div className='flex  border border-gray-400 rounded-full items-center px-6 py-1  w-[100%]'>
        <input className="required  w-full outline-none  " 
        // onBlur={()=>setSearchBox(false)}
        onFocus={()=>setSearchBox(true)}
        onChange={e=>{
          setContent(e.target.value)
          // setSearchBox(true)
          }} />
        <span><BsSearch></BsSearch></span>
      </div>
    </div>
  )
}
