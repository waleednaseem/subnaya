import React from 'react'
import Products from '@/Components/Products'
import ProductBanner from './ProductBanner'
import Data from '@/Components/Brand/Data'
export default function Product() {
//  console.log(Data)
 
  return (
    <div>
       <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
  {
 Data.array.map(e => <div>

   <div> <Products image={e.image} content={e.content} FirstPrice={e.FirstPrice}  SecondPrice={e. SecondPrice}  />
    </div>
 </div>)
}
</div>

<ProductBanner/>
<div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
   {
 Data.data.map(b => <div>  
   <div> <Products image={b.image} content={b.content} FirstPrice={b.FirstPrice}  SecondPrice={b. SecondPrice}  />
    </div>
 </div>)
}
</div>
    </div>
  )
}
