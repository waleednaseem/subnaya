import React from 'react'
import BrandLable from './Brand_Lable'

export default function index() {
  const array=[
    {
      text:'heloo'
    },
   
  ]
  return (
    <div>
      {
        array.map(items=>(
          <BrandLable text={Brand_Lable}/>
        ))
      }
      
    </div>
  )
}
