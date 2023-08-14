import React from 'react'

export default function Price() {
  return (
    <div className=' p-2'>
        <h2> Price</h2>

        <div  className=' inline-flex p-3'>
          <div>
          <lable>
                 <h4 > Min</h4>
            </lable>
            <div>
            <input className='border border-gray-500 m-2 w-16' type="text" placeholder='From'/>


            </div>

          </div>
          <div>
          <lable>
          <h4 className=' mx-8'> Max</h4>
            </lable>
            <div>
            <input className='border border-gray-500 m-2 w-16' type="text" placeholder='From'/>


            </div>

          </div>
          

        </div>
     <button className='bg-black text-white p-2 text-sm  justify-center flex mx-12'> Price Filter </button>



    </div>
    
  )
}
