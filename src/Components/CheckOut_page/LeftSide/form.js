import React from 'react'
import Simple_input from '@/Input_Components/Inputs/Simple_input'
import Lable_button from '@/Input_Components/Lable_button/Lable_button'

export default function form({setState} ) {
    return (
        <div>
            <label> Name</label>
            <div className='' >
              
               
          <Lable_button text="heloo"/>
               
                <Simple_input  type={"text"} placeholder={"First name"} lable={"heloo"} className={"p-10 w-96"} />
                
                {/* <Simple_input  type={"email"} placeholder={"First name"} lable={"heloo"}/>
                <Simple_input  type={"number"} placeholder={"First name"} lable={"heloo"}/>

                <input className='border rounded-md p-1 border-gray-600 w-48' type='text' placeholder='First Name' />
                <input className='border rounded-md p-1 border-gray-600 w-48' type='text' placeholder='Last Name' />
            </div>
            <label> Email Address</label>
            <div>

                <input className='border rounded-md p-1 border-gray-600 md:w-96' type='Email' placeholder='Enter Email ID' />

            </div>

            <div className='flex gap-2 p-2'>

                <input type='checkbox' />
                <p> Create an account for later use</p>

            </div>
            <div>
                <lable> Country </lable>
                <select className='w-auto md:w-96 h-10 border border-gray-600 rounded-md p-2'>
                    <option> Pakistan</option>
                    <option> China</option>
                    <option> Rusia </option>
                    <option> UAE</option>
                </select>


            </div>

            <label> Mobile Number</label>
            <div>

                <input className='border rounded-md border-gray-600 md:w-96 p-2' type='Number' placeholder='92' />

            </div>
            <div>
                <lable> Region/Province
                </lable>
                <select className='w-auto md:w-96 h-10 border border-gray-600 rounded-md p-2'>
                    <option> Pakistan</option>
                    <option> China</option>
                    <option> Rusia </option>
                    <option> UAE</option>
                </select>
            </div>

            <div>
                <lable> City    </lable><br />
                <select className='w-auto md:w-96 h-10 border border-gray-600 rounded-md p-2'>
                    <option> Pakistan</option>
                    <option> China</option>
                    <option> Rusia </option>
                    <option> UAE</option>
                </select>
            </div>

            <label>Address</label>
            <div>

                <input className='border rounded-md p-1 border-gray-600 md:w-96' type='Email' placeholder='Enter Street Address' />

            </div>
            <div>
                <lable> Gender</lable><br />
                <select className='w-auto md:w-96 h-10 border border-gray-600 rounded-md p-2'>
                    <option> Pakistan</option>
                    <option> China</option>
                    <option> Rusia </option>
                    <option> UAE</option>
                </select> */}
                <button  onClick={() => setState("page")}> next</button>


            </div>

        </div>
    )
}
