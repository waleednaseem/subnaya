import React from 'react'

export default function Radio_button( {label,className,type,radio_img}) {
  return (
    <div className='flex '>
    <div> 
    <input className={`border rounded-md p-1 border-gray-600 ${className && className}`} type={type && type}  />

    </div>
      <div> 
  
          <img src={radio_img && radio_img} />

      
      </div>
     
   <div>
   <label className='p-1'>{label && label}</label>
   </div>
    </div>
  )
}
