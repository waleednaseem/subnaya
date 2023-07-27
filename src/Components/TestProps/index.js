import React from 'react'

export default function test(q) {
  return (
    <div className=' bg-orange-600 py-6'>
          <h5 className=' text-black'>{q.text}</h5>
          <p>{q.name}</p>
    </div>
  )
}
