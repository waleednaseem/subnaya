import React from 'react'

export default function index({ x }) {
  return (
    <div key={x.id} className=' w-full h-56  flex  flex-col border-4 rounded-lg border-slate-400 '>
      <img src={x.image} className='w-full h-44' />
      <div className='text-sm  text-cyan-50'>
        <p>{x.content}</p>
      </div>
    </div>
  )
}
