import React from 'react'
import BannerLable from '../BannerLable'

export default function ProductBanner() {
  const array=[
    {

      heading:"" 
    }
    
  
  
  ]
  return (
    <div>
 <div className='grid grid-cols-1 bg-blue-gray-600 h-20 m-2 '>

<BannerLable  BannerLable={"HUMDUM"}/>
        
        {/* <h1 className=' text-white font-bold text-2xl justify-center flex'> HUMDUM</h1> */}
        <button className=' bg-pink-500 w-52 rounded-xl mx-auto '>
           LAWN COLLECTION 2023
        </button>
           
           </div>


    </div>
   
  )
}
