import React from 'react'
import Products from '@/Components/Products'

export default function index() {
    const brand_img1 = 'images/slide-img.jpg';
    const arrayProducts = [
        {
            id: 1,
            image: brand_img1,
            content: 'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-06 Deniz - Winter Collection'
        }
    ]
    return (
        <div className='w-[20%] border-4  p-2 bg-white  rounded-lg py-4' >
            <div className='flex m-2'>
                <Products image={brand_img1} content={'Broadway Returns by Mushq Embroidered Khaddar Suits Unstitched 3 Piece MQ22BR MW22-06 Deniz - Winter Collection'} />
            </div>
        </div>
    )
}
