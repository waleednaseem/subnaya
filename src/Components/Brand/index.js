import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
export default function index() {
    return (
        <div className='flex'>
            <div className='w-[20%] h-full '>
                <LeftSection />
            </div>
            <div className='w-[80%]  h-full'>
                <RightSection />
            </div>


        </div>
    )
}
