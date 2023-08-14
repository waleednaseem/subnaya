import React from 'react'

export default function Lable_button( {text,className}) {
  return (
    <div>
     <button className={`bg-black text-white p-2 border rounded-md md:w-full m-2 flex text-sm ${className}`}> {text}</button>
    

    </div>
  )
}
