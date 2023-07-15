import React from 'react'

export default function index() {
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
  return (
    
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
  )
}
