import React from 'react'
import BrandLable from '../BrandLable'
import BrandSize from './SelectSize'
import BrandProduct from './BrandProduct'


export default function index() {
  
  return (
    <div className='border-b-4 border-l-4 border-t-4 p-4'>     
          <BrandLable Brand_Lable={'New Arrivals'}/>
          <BrandSize/>
          <hr className='p-4'/>
          <BrandProduct/>
        

          <hr/>

    </div>
  )
}

