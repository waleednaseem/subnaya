import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import MiddleSide from './MiddleSide'

export default function index() {
  return (
    <div> 
        
        <div className='flex'>
            <div className='w-[35%] h-full '>
            <LeftSide/>
            </div>
            <div className='w-[30%]  h-full'>
            <MiddleSide/>
            </div>
            <div className='w-[30%]  h-full'>
            <RightSide/>
            </div>
        </div>
        

     

        
    
    
    
    </div>
  )
}
