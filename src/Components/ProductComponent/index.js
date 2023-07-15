import React from 'react'
import ProductLogo from './ProductLogo';
import ProductCategory from './ProductCategory';
import RightSlider from './RightSlider';

export default function index() {
  return (
    <div className='flex w-[100%]'>
        
        <ProductLogo/>
        <ProductCategory/>
        <RightSlider/>
    </div>
  )
}
