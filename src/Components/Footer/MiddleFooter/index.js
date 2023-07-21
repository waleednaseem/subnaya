import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { BiDonateHeart } from 'react-icons/bi';

export default function index() {
    return (
        <div>
            <div className=' bg-black  py-5'>
                <div className='flex  w-[100%] order-3  mt-8  justify-evenly'>
                    <div className=''>
                        <ul className='font-medium text-white text-sm leading-6 font-Montserrat '>
                            <li><h3 className=' text-base'>Links</h3></li>
                            <li>About us</li>
                            <li>Privacy Policy</li>
                            <li>Track Your Order</li>
                            <li>Terms & Conditions</li>
                            <li>Exchange Policy</li>
                            <li>Feedback/Complaints</li>
                            <li>Sell with Sanaulla</li>
                            <li>Exchange Policy</li>
                            <li>Feedback/Complaints</li>
                            <li>Sell with Sanaulla</li>
                            <li>Shipment Rates</li>
                            <li>FAQs or Help Center</li>
                            <li>FAQs or Help Center</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='text-white text-sm leading-6   font-Montserrat'>
                            <li><h3 className='font-medium text-base'>Links</h3></li>
                            <li>138-D Block 2, P.E.C.H.S,</li>
                            <li>Tariq Road, Karachi, Pakistan</li>
                            <li>Call us: +923-111-444-910</li>
                            <li>care@cs.sanaullastore.com</li>

                        </ul>
                    </div>
                    <div className=' w-[30%] '>
                        <ul className='text-white text-sm leading-6 font-Montserrat'>
                            <li><h5 className=' font-medium'>Subscribe
                            </h5></li>
                            <li><p>Subscribe to our newsletter and know first about all the promotions and discounts. Be
                                always trendy.</p></li>

                        </ul>
                        <form className=' mt-4'>
                            <label class=" justify-items-end  flex">
                              
                                <input type="email"   placeholder="Enter your Email" className=' font-Montserrat w-full py-2 px-2 bg-white border  focus:border-none  focus:outline-none  border-slate-300  text-sm shadow-sm placeholder-slate-400' />
                              <button className=' text-white font-Montserrat text-sm font-medium  p-2  bg-deep-orange-900'>sumbit</button>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
