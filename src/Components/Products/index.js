import React from 'react'

export default function index(n) {
    // console.log(n,'<=============')
    return (
        <div>
            <div key={index}>
                <img src={n?.image||n?.n?.image} className='w-[100%] h-96 object-cover rounded-sm' />
            </div>
            <div className=' text-xs text-contentColor  font-medium font-Montserrat mt-1'>
                <p>{n?.content||n?.n?.content&&n?.content||n?.n?.content}</p>

                <div className={` flex ${n?.FirstPrice||n?.n?.FirstPrice?'justify-between':'justify-center'}  mt-2`}>
                    <del>{n?.FirstPrice||n?.n?.FirstPrice&&n?.FirstPrice||n?.n?.FirstPrice}
                    </del>
                    <strong>
                        {n?.SecondPrice||n?.n?.SecondPrice}
                    </strong>
                </div>
            </div>
        </div>
    )
}
