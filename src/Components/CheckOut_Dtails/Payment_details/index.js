import React from 'react'
import Simple_input from '@/Input_Components/Inputs/Simple_input'
import Lable_button from '@/Input_Components/Lable_button/Lable_button'
import Button from '@/Input_Components/Button/Buttons'
import SelectOption from '@/Input_Components/Select_options/Select'
import countryOptions from '@/Components/CheckOut_Dtails/Select_option/SelectOptionDAta'
import Radion_button from '@/Input_Components/Radio_button/Radio_button'

export default function index({ setState }) {

  return (

    <div className=" w-1/2  bg-white p-8 my-8 mx-auto rounded-2xl shadow-lg">

      <Lable_button text={"2 Shipping Method"} />
      <form>
        <div className=' p-3'>
          <Radion_button label={"Standard Shipping Rs. 100.00"} type={'radio'} value={"html"} name={"html"} />
          <Radion_button label={"Standard Shipping + 'Treatment for All' with Indus (Rs.150) Rs. 250.00"} type={'radio'} value={"css"} name={"html"} />
        </div>
      </form>
      <Lable_button text={"3 Payment Method"} />
      <div className='border-dashed border-b border-indigo-600 p-3'>
        <Radion_button label={"VISA / MASTER CARD"} type={'radio'} radio_img={'images/payment.png'} className={" border"} name={"paymentMethod"} />
      </div>
      <div className='border-dashed border-b border-indigo-600 p-3'>
        <Radion_button label={"CASH ON DELIVERY"} type={'radio'} radio_img={'images/payment.png'} className={" border"} name={"paymentMethod"} />
      </div>
      <div className='border-dashed border-b border-indigo-600 p-3'>
        <Radion_button label={"BANK TRANSFER"} type={'radio'} radio_img={'images/payment.png'} className={" border"} name={"paymentMethod"} />
      </div>
      <div className=' justify-center flex m-2'> <button className=' bg-[#df3c1d] pt-2 pb-2 pl-6 pr-6 text-white ' onClick={() => setState("AddtoCardTable")}> next</button></div>




    </div>
  )
}
