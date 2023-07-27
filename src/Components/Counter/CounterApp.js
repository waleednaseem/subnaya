import React from 'react';
import { useState } from 'react';


export default function CounterApp() {
  const [count, setCount] = useState(0)

  const PlusCounter = () => {
    setCount(count + 1)
  }
  const MinusCounter = () => {
    setCount(count - 1)
  }
  const ResetValue = () => {
    setCount(count * 0)
  }

  return (
    <div className='text-center py-3 '>

      <h2 className=' text-pink-500  text-2xl    font-bold'>{count}</h2>
      <button className=' mx-3 bg-deep-orange-400  p-3  text-white'    onClick={()=>PlusCounter()} >Plus</button>
      <button className=' mx-3 bg-deep-orange-400  p-3  text-white'    onClick={()=>MinusCounter()} >Minus</button>
      <button className=' mx-3 bg-deep-orange-400  p-3  text-white'    onClick={()=>ResetValue()} >Reset</button>
    
    </div>
  )
}
