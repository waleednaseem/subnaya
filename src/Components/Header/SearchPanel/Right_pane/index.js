import React from 'react'
import Categories_Items from '../Right_pane/productItems/Categories_Items'
// import Carousel from 'react-grid-carousel'

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
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id: 2,
      name: "Diamond",
      image: second_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
      id: 3,
      name: "Diamond ring",
      image: third_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
      id: 4,
      name: "Diamond necklace",
      image: fourth_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id: 5,
      name: "necklace brands",
      image: fifth_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
      id: 6,
      name: "ear rings",
      image: sixth_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
      id: 7,
      name: "jewellary",
      image: seventh_pic,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
  ]

  return (

    <div className='w-[70%]  border-2 rounded-lg   border-gray-300  px-2 py-2' >
      <h5 className=' text-base  font-Montserrat capitalize mb-2 text-black font-semibold'>Products </h5>

      <div className='grid grid-cols-5  gap-2'>
          {array.map(x => (
            <Categories_Items x={x}  />
          ))}
      </div>

    </div>

  )
}