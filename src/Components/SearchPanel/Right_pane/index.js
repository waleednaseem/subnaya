import React from 'react'
import Categories_Items from '../Right_pane/productItems/Categories_Items'

export default function index() {
  const first_pic = 'images/jewel.jpg';
  const second_pic = 'images/jewel-2.jpg';
  const third_pic = 'images/jewel-3.jpg';
  const fourth_pic = 'images/jewel-4.jpg';
  const fifth_pic = 'images/jewel-5.jpg';
  const sixth_pic = 'images/jewel-6.jpg';
  const seventh_pic = 'images/jewel-7.jpg';
  const array = [
    {
      id: 1,
      name: "kundan",
      image: first_pic,
      content: 'this is my content'
    },
    {
      id: 2,
      name: "Diamond",
      image: second_pic,
      content: 'this is my content'
    },

    {
      id: 3,
      name: "Diamond ring",
      image: third_pic,
      content: 'this is my content'
    },

    {
      id: 4,
      name: "Diamond necklace",
      image: fourth_pic,
      content: 'this is my content'
    },
    {
      id: 5,
      name: "necklace jewellary",
      image: fifth_pic,
      content: 'this is my content'
    },

    {
      id: 6,
      name: "ear rings",
      image: sixth_pic,
      content: 'this is my content'
    },

    {
      id: 7,
      name: "jewellary",
      image: seventh_pic,
      content: 'this is my content'
    }

  ]

  return (
    
    <div className='w-[70%] grid grid-cols-5 gap-2 border-4 rounded-lg border-slate-700  px-2 py-2' >
     
        {array.map(x => (
          <Categories_Items x={x} />
        ))}
      </div>
  
  )
}
