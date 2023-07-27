import React,{useState} from 'react'
import Products from '@/Components/Products'
import ProductBanner from './ProductBanner'
import Data from '@/Components/Brand/Data'
import Pagination from '@/Components/Brand/Pagination'
import { TbMathGreater } from 'react-icons/tb'

export default function Product() {
<<<<<<< HEAD
  const array = [
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"

    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-4.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-5.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    }

  ]
  const data = [
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-2.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"

    },
    {
      image: "images/brand-3.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-4.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-5.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    },
    {
      image: "images/brand-1.jpg",
      content: "helooo",
      FirstPrice: null,
      SecondPrice: "300"
    }

  ]
=======
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

>>>>>>> 40882481f92c4d7ab4254f2eed92801e75289e12
  return (
    // <div>
    //   <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
    //     {
    //       Data.array.map(e => <div>

    //         <div> <Products image={e.image} content={e.content} FirstPrice={e.FirstPrice} SecondPrice={e.SecondPrice} />
    //         </div>
    //       </div>)
    //     }
    //   </div>

    //   <ProductBanner />
    //   <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
    //     {
    //       Data.data.map(b => <div>
    //         <div> <Products image={b.image} content={b.content} FirstPrice={b.FirstPrice} SecondPrice={b.SecondPrice} />
    //         </div>
    //       </div>)
    //     }
    //   </div>


    //   <div className=' inline-flex w-[100%] justify-center gap-2 p-2'>
    //     {
    //       Links.map(e => <div>
    //         <div> <Pagination Href_link={e.Href_link} id={e.id} />
    //         </div>
    //       </div>)
    //     }
    //   </div>
    // </div>
    <div>
<<<<<<< HEAD
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          array.map(e => <div>

            <div> <Products image={e.image} content={e.content} FirstPrice={e.FirstPrice} SecondPrice={e.SecondPrice} />
            </div>
          </div>)
        }
      </div>

      <ProductBanner />
      <div className='gap-4  text-center grid  grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
        {
          data.map(b => <div>
            <div> <Products image={b.image} content={b.content} FirstPrice={b.FirstPrice} SecondPrice={b.SecondPrice} />
            </div>
          </div>)
        }
      </div>
=======
      {Links.slice(pageNo,pageItems).map(x=>(
        <div>
          {x.id}
        </div>
      ))}
      <button onClick={()=>(setPageNo(pageNo+1), setpageItems(pageItems+2))}>next page</button>
      <button onClick={()=>(setPageNo(pageNo-1),setpageItems(pageItems-2))}>previous page</button>
>>>>>>> 40882481f92c4d7ab4254f2eed92801e75289e12
    </div>
  )
}
        