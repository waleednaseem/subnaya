import React from 'react'

export default function Simple_input({lable,placeholder,type,className,grid}) {
  return (
   
    <div className={`grid grid-cols-1 ${grid && grid}`}>
      <label className='p-1'>{lable && lable}</label>
      <input className={`border rounded-md p-1 border-gray-600 w-48 ${className && className}`} type={type && type} placeholder={placeholder} />
    </div>
  )
}
// <Simple_input 
// lable={"First name"}
// placeholder={"Type your First name"}
// type={"phone"}
// />