import React from 'react'
import ProductSlider from '@/Components/ProductSlider'
// import Carousel from 'react-grid-carousel';


export default function index() {
  const slider_picarray = [
    {
      image: "images/brand-1.jpg",
      FirstPrice: null
    },
    {
      image: "images/brand-1.jpg",
      FirstPrice: null
    },
    {
      image: "images/brand-1.jpg",
      FirstPrice: null
    },
    {
      image: "images/brand-1.jpg",     
       FirstPrice: null,
    },
    {
      image: "images/brand-1.jpg",
      FirstPrice: null
      
    },
    {
      image: "images/brand-1.jpg",
      FirstPrice: null
    }
  ]
  return (

      <div>
         {/* <Carousel  >

         </Carousel> */}
        <ProductSlider  product={slider_picarray} value_cols={2} />

    </div>
  )
}
