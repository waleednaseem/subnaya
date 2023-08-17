import React from 'react'
import Simple_input from '@/Input_Components/Inputs/Simple_input'
import Lable_button from '@/Input_Components/Lable_button/Lable_button'
import Button from '@/Input_Components/Button/Buttons'
import SelectOption from '@/Input_Components/Select_options/Select'
import countryOptions from '@/Components/CheckOut_Dtails/Select_option/SelectOptionDAta'

export default function index({setState}) {
    return (
        <div className="Login_page">
             <Lable_button text={"Login With"} />
            <div className='Div_one'>
                <Button image={'images/facebook_icon.png'} text={'facebook'} color={'bg-red-400'} />
                <Button image={'images/facebook_icon.png'} text={'Google'} />
                <Button image={'images/facebook_icon.png'} text={'email'} />
            </div>
            <Lable_button text={"Billing/Shipping Address"} />
            <div className=' flex  gap-4'>
                <Simple_input type={"text"} lable={"Name"} placeholder={"Firstname"} className={"w-full"} />
                <Simple_input type={"text"} lable={"Name"} placeholder={"Firstname"} className={"w-full"} />
            </div>
            <Simple_input type={"text"} lable={"Email"} placeholder={"Email"} className={"w-full"} />
            <Simple_input type={"number"} lable={"Number"} placeholder={"92"} className={"w-full"} />
            <Simple_input type={"text"} lable={"Address"} placeholder={"Address"} className={"w-full"} />
            <SelectOption label={"country"} className={'w-full'} options={countryOptions} />
            <div className=' justify-center flex m-2'> <button className=' bg-[#df3c1d] pt-2 pb-2 pl-6 pr-6 text-white ' onClick={() => setState("next_page")}> next</button></div>
        </div>
    )
}
