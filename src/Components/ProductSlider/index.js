import React from 'react'
import Carousel from 'react-grid-carousel';
import Products from '@/Components/Products'

export default function index({product,value_cols}) {
  return (
    <div>
      <Carousel cols={value_cols} gap={10} loop={true} >
        {product.map(n => (
          <Carousel.Item>
            <Products n={n} />
          </Carousel.Item>
        ))
        }
      </Carousel>
    </div>
  )
}
