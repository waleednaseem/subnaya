import React from 'react'

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
                {
                    arrayProducts.map(item => (
                        <div className=' w-[100%]  flex'>
                            <div className='mt-5'>
                                <div>
                                    <img src={item.image} className='w-[100%] h-96 object-cover rounded-sm' />
                                </div>
                                <div className=' text-xs text-contentColor  font-medium font-Montserrat mt-1'>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
              
            </div>
        </div>
    )
}
