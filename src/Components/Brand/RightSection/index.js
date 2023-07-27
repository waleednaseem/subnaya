import React from 'react'
import BrandLable from '../BrandLable'
import BrandSize from './SelectSize'
import BrandProduct from './BrandProduct'
import Slider from '@/Components/Brand/RightSection/Slider'



export default function index() {
  
  return (
    <div className='border-b-4 border-l-4 border-t-4 p-4'>     
          <BrandLable Brand_Lable={'New Arrivals'}/>
          <BrandSize/>
          <hr className='p-4'/>
          <BrandProduct/>
<<<<<<< HEAD
=======
          <Slider/>
          

>>>>>>> 40882481f92c4d7ab4254f2eed92801e75289e12
          <hr/>

    </div>
  )
}

