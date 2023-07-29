import React, { useState } from 'react'
import BrandLable from '../BrandLable'
import BrandSize from './SelectSize'
import BrandProduct from './BrandProduct'
import Slider from '@/Components/Brand/RightSection/Slider'



export default function index() {
  const [pageItems,setpageItems]=useState(2)
  // console.log(pageItems,'-------')
  return (
    <div className='border-b-4 border-l-4 border-t-4 p-4'>     
          <BrandLable Brand_Lable={'New Arrivals'}/>
          <BrandSize setpageItems={setpageItems}/>
          <hr className='p-4'/>
          <BrandProduct pageItems={pageItems}/>
          <Slider/>
          <hr/>

    </div>
  );
}
