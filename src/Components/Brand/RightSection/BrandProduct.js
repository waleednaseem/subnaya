import React, { useState } from 'react'
import Products from '@/Components/Products'
import ProductBanner from './ProductBanner'
import Data from '@/Components/Brand/Data'
import Pagination from '@/Components/Brand/Pagination'
import { TbMathGreater } from 'react-icons/tb'

export default function Product() {
  const [pageNo,setPageNo]=useState(0)
  const [pageItems,setpageItems]=useState(2)


  const Links = [
    {
      Href_link: "https://www.google.com/",
      id: '1'
    },
    {
      Href_link: "https://www.google.com/",
      id: '2'
    },
    {
      Href_link: "https://www.google.com/",
      id: '3'
    },
    {
      Href_link: "https://www.google.com/",
      id: '4'
    },
    {
      Href_link: "https://www.google.com/",
      id: '5'
    },
    {
      Href_link: "https://www.google.com/",
      id: '6'
    },
    {
      Href_link: "https://www.google.com/",
      id: '7'
    },
  ]
  //  console.log(Data)
  const totalPages = Math.ceil(Links.length / pageItems);

  const handleNextPage = () => {
    setPageNo((prevPageNo) => Math.min(prevPageNo + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 0));
  };

  return (
    <div>
  <div>
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          Data.array.map(e => <div>

            <div> <Products image={e.image} content={e.content} FirstPrice={e.FirstPrice} SecondPrice={e.SecondPrice} />
            </div>
          </div>)
        }
      </div>

      <ProductBanner />
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          Data.data.map(b => <div>
            <div> <Products image={b.image} content={b.content} FirstPrice={b.FirstPrice} SecondPrice={b.SecondPrice} />
            </div>
          </div>)
        }
      </div>


     
    </div >

    
      

      <div className='grid grid-cols-4 gap-4'>
        {Data.array.slice(pageNo * pageItems, (pageNo + 2) * pageItems).map((e, index) => (
          <div key={index}>
            <img src={e.image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div  className=' inline-flex w-[100%] justify-center gap-2 p-2'>
        {Links.slice(pageNo * pageItems, (pageNo + 1) * pageItems).map((x) => (
          <div key={x.id}>
            {x.id}
          </div>
        ))} 

        {totalPages > 1 && (
          <div>
            <span>Page {pageNo + 1} of {totalPages}</span>
          </div>
        )}
      </div>
     
<div className='inline-flex w-[100%] justify-center gap-2 p-2'>
<button className='border  border-black p-2  w-52' onClick={handlePreviousPage}>Previous page</button>
      <button   className='border  border-black p-2  w-52' onClick={handleNextPage}>Next page</button>

</div>

    
      
     

    </div>
  )
}



 
