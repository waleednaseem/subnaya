import React from 'react'
import BrandLable from '../BrandLable'
import BrandSize from './SelectSize'

export default function index() {
  
  return (
    <div className='border-b-8 border-l-8 border-t-8 p-4'>     
          <BrandLable Brand_Lable={'Arrival'}/>
          <BrandSize/>
          <hr/>

    </div>
  )
}

