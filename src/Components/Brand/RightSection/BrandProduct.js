import React from 'react'
import Products from '@/Components/Products'
import ProductBanner from './ProductBanner'
export default function Product() {
  const array = [
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"

    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-4.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-5.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    }

  ]
  const data = [
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"

    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-4.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-5.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    }

  ]
  return (
    <div>
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          array.map(e => <div>

            <div> <Products image={e.image} content={e.content} FirstPrice={e.FirstPrice} SecondPrice={e.SecondPrice} />
            </div>
          </div>)
        }
      </div>

      <ProductBanner />
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          data.map(b => <div>
            <div> <Products image={b.image} content={b.content} FirstPrice={b.FirstPrice} SecondPrice={b.SecondPrice} />
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
