import React from 'react'

export default function index() {
  const DressImg1 = 'images/dress-1.jpg'
  const DressImg2 = 'images/dress-2.jpg'
  const DressImg3 = 'images/dress-3.jpg'
  const DressImg4 = 'images/dress-4.jpg'
  const DressImg5 = 'images/dress-5.png'

  const  Arraydress = [{
    id:1,
    image:DressImg1,
    title:"Festive Pret"
  },
  {
    id:2,
    image:DressImg2,
    title:"Casual Pret"
  },
  {
    id:3,
    image:DressImg3,
    title:"Luxury Pret"
  },

  {
    id:4,
    image:DressImg4,
    title:"Velvet Pret"
  },
  {
    id:5,
    image:DressImg5,
    title:"Chiffon Pret"
  },
]
  return (
    <div className='flex w-[100%]  justify-between  mt-6'>
      {
         Arraydress.map(n =>(
          <div className=' pr-2'>
          <img src ={n.image} className=' w-[100%]  h-56  rounded-lg  object-cover'/>
          <h4 className=' text-center mt-2 capitalize font-Montserrat font-medium text-xs text-contentColor ' >{n.title}</h4>
           </div>
         ))
      }
       </div>
  )
}
