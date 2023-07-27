import React from 'react'
import BottomSlide from '../BottomSlide';
import Products from '@/Components/Products';
import ProductSlider from '@/Components/ProductSlider'

import Carousel from 'react-grid-carousel'
export default function index() {
    const brand_img1 = 'images/brand-1.jpg';
    const brand_img2 = 'images/brand-2.jpg';
    const brand_img3 = 'images/brand-3.jpg';
    const brand_img4 = 'images/brand-4.jpg';
    const brand_img5 = 'images/brand-5.jpg';
    const arrayProduct = [
        {
            id: 1,
            name: "brand-1",
            image: brand_img1,
            FirstPrice: " Rs. 10,991.00",
            SecondPrice: " Rs. 10,790.00",
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-06 Deniz - Winter Collection'
        },

        {
            id: 2,
            name: "brand-2",
            image: brand_img2,
            FirstPrice: " Rs. 8,991.00",
            SecondPrice: " Rs. 7,790.00",
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-04 Nur - Winter Collection'
        },
        {
            id: 3,
            name: "brand-2",
            image: brand_img3,
            FirstPrice: " Rs. 8,991.00",
            SecondPrice: " Rs. 7,790.00",
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-04 Nur - Winter Collection'
        },
        {
            id: 4,
            name: "brand-2",
            image: brand_img4,
            FirstPrice: " Rs. 8,991.00",
            SecondPrice: " Rs. 7,790.00",
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-04 Nur - Winter Collection'
        },
        {
            id: 5,
            name: "brand-2",
            image: brand_img5,
            FirstPrice: " Rs. 8,991.00",
            SecondPrice: " Rs. 7,790.00",
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-04 Nur - Winter Collection'
        }

    ] 
    return (
        <div className='w-[60%] border-4  p-2 bg-white  rounded-lg py-5' >
            <h5 className=' text-base  font-Montserrat capitalize mb-2 text-black font-semibold'>Sales and Discounts  </h5>
            <div className='w-[10%] border-t-4 rounded-lg  border-pink-600'>
            </div>
            <div className='flex m-2 w-full'>
                {/* <Carousel cols={2} rows={1} gap={10} >
                    {
                        arrayProduct.map((n,index) => (
                                <Carousel.Item>
                                <Products n={n}/>
                            </Carousel.Item> 
                        ))
                    }
                </Carousel> */}

                 <ProductSlider product={arrayProduct} value_cols={2}/>
            </div>
            <BottomSlide/>
        </div>
    )
}
