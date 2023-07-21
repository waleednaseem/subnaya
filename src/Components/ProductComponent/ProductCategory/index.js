import { button } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'

export default function index() {
  const state = useState()
  const count =1;
  const InNum =()=>{

  }
    const listArray =[
        {
          id:1,
          content:"Summer Collection"
        }
        ,
        {
          id:2,
          content:"Ladies Wedding Dresses Collection"
        }
        ,{
          id:3,
          content:"Unstitched Suits"
        },
        {
          id:4,
          content:"Ladies Luxury Formal Dresses"
        },
    
        {
          id:5,
          content:"Pret Collection"
        },
        {
          id:6,
          content:"Cambric Collection"
    
        }
        , {
          id:7,
          content:"Cambric Collection"
    
        },
        {
          id:8,
          content:"Silk Collection"
        },
        {
          id:9,
          content:"Silk Collection"
        },
        {
          id:10,
          content:"Silk Collection"
        },
        {
          id:11,
          content:"Silk Collection"
        }
      ]

  return (
    
        <div className='w-[20%] border-2  mt-10'>
          {
            listArray.map(list => (
              <ul className='px-2'>
                <li className='capitalize font-Montserrat font-medium text-xs text-contentColor border-b-2 border-slate-50 border-dotted leading-7'>{list.content}</li>

              </ul>
            ))
    
          }
          <div>
            <h4></h4>
          <button  onClick={InNum}>click me</button>
          </div>
         
        </div>
     
  )
}
