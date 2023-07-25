import React from 'react'

export default function index({ n, Carousel }) {
    return (
        <div>
            <div key={index}>
                <img src={n.image} className='w-[100%] h-96 object-cover rounded-sm' />
            </div>
            <div className=' text-xs text-contentColor  font-medium font-Montserrat mt-1'>
                <p>{n.content}</p>

                <div className=' flex  justify-between  mt-2'>
                    <del>{n.FirstPrice}
                    </del>
                    <strong>
                        {n.SecondPrice}
                    </strong>
                </div>
            </div>
        </div>
    )
}
