import React from 'react'
import Carousel from 'react-grid-carousel';
import Products from '@/Components/Products'

export default function index({product}) {
  return (
    <div>
      <Carousel cols={4} gap={10} >
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
