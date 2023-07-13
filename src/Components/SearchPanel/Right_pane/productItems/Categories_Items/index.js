import React from 'react'

export default function index({ x }) {
  return (
    
      <div key={x.id} className=' w-full h-56  flex  flex-col border-2 rounded-lg border-grayColor '>
      <img src={x.image} className='h-72 block  overflow-hidden object-cover' />
      <div className='text-sm   h-80  overflow-hidden  text-contentColor'>
        <p>{x.content}</p>
      </div>
    </div>
  )
}
