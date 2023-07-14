import React from 'react'

export default function JofaSlide() {
  const LogoImg1 = 'images/logo-1.png';
  const LogoImg2 = 'images/logo-2.png';
  const LogoImg3 = 'images/logo-3.jpg';
  const LogoImg4 = 'images/logo-4.png';
  const LogoImg5 = 'images/logo-5.jpg';
  const LogoImg6 = 'images/logo-6.png';
  const logoArray = [{
    id: 1,
    image: LogoImg1
  },

  {
    id: 2,
    image: LogoImg2
  },

  {

    id: 3,
    image: LogoImg3

  }
    ,
  {

    id: 4,
    image: LogoImg4

  },

  {

    id: 5,
    image: LogoImg5

  },
  {

    id: 6,
    image: LogoImg6

  }
  ]

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
    }
  ]

  return (
    <>
      <div className='flex  bg-blue-gray-500  items-center  justify-evenly w-[100%] p-2'>
        <p className='text-white p-5 font-bold text-4xl capitalize  font-Montserrat'>Asim jofa</p>
        <div>
          <button className='bg-white text-black rounded-3xl  font-bold px-6 py-2'>Shop Now</button>
        </div>
      </div>

      <div className='flex'>
        <div className='w-[20%] border-2 border-pinkColor '>
          <div className='  text-white capitalize font-Montserrat font-medium  text-lg  text-center bg-pinkColor py-4' >
            <h4>women clothing</h4>
          </div>
          {
            logoArray.map(e => (
              <ul className='px-2'>
                <li><img src={e.image} className='w-[100%] my-4 border border-grayColor  h-20 object-contain' ></img></li>

              </ul>
            ))

          }
        </div>

        <div className='w-[20%] border-2 '>
        
          {
            listArray.map(list => (
              <ul className='px-2'>
                <li className='capitalize font-Montserrat font-medium text-xs text-contentColor border-b-2 border-slate-50 border-dotted leading-7'>{list.content}</li>

              </ul>
            ))

          }
        </div>
      </div>


    </>
  )
}
