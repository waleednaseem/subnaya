import React from 'react'

export default function SelectSize({setpageItems}) {
  return (
    <div className=' flex justify-end p-3'>

<label className='p-2' >Show:</label>
  <select className='p-2 pl-5 pr-5 border ' onChange={e=>setpageItems(e.target.value)}>
    
      <option value="1">1</option>
      <option value="2">2</option>
   
      <option value="3">3</option>
      <option value="4">4</option>
   
  </select>
    </div>
  )
}
