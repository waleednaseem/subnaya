import React from 'react'


export default function Buttons({ color, border, button, image, text }) {
  return (
    <div>

      <div className={`flex p-2 bg-blue-700 h-10 w-28 ${color && color}`}>
        <li className={`md:border-r-2 border-black p-1 flex ${border && border}`}>
          <img src={image} />

        </li>
        <button className={` text-white m-1 text-sm ${button && button}`}> {text && text}</button>
      </div>
      

    </div>
  )
}
