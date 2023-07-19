import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { BiDonateHeart } from 'react-icons/bi';

export default function index() {
    return (
        <div className=' bg-black     text-white text-sm leading-6 font-Montserrat  py-5'>

           
            <div className='flex  w-[100%]  order-3  mt-8 justify-evenly'>
                <div className='flex '><TfiEmail className='text-5xl text-white   ' />
                    <ul className=' text-white text-sm leading-6 font-Montserrat   pl-6'>
                        <li>Do you have any question</li>
                        <li>care@cs.sanaullastore.com</li>
                    </ul>
                </div>

                <div className='flex '><FiPhoneCall className='text-5xl text-white   ' />
                    <ul className=' text-white text-sm leading-6 font-Montserrat  pl-6'>
                        <li>+923-111-444-910</li>
                        <li>Monday - Saturday</li>
                        <li>10AM - 7PM</li>
                    </ul>
                </div>

                <div className='flex  '><BiDonateHeart className='text-5xl   text-white   ' />
                    <ul className=' text-white text-sm leading-6 font-Montserrat  pl-6'>
                        <li><h5>Prime services
                        </h5></li>
                        <li>Extra Discounts</li>
                        <li>Early access to BIG Launches</li>
                        <li>Priority Support</li>
                    </ul>
                </div>

            </div>
            <div className='border-b-2   pt-4 m-auto w-[80%]'></div>
        </div>
    )
}
