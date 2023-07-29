import React,{useState} from 'react'
import Main from '../Components/Main'
import SearchPanel from '../Components/SearchPanel'
import NavigationBar from '@/Components/NavigationBar'
import SecondHeader from '../Components/SecondHeader'
import MushqBanner from '@/Components/MushqBanner'
import JofaHeader from '@/Components/JofaHeader'
import ProductComponent from '@/Components/ProductComponent'
import LatestProduct from '@/Components/LatestProduct'
import Counter from '@/Components/Counter'
import ProductCart from '@/Components/ProductCart'
import Footer from '@/Components/Footer'
// import TestProps from '@/Components/TestProps'



export default function index() {
  const [searchbox,setSearchBox]=useState(false)
  return (
    <div>
      <Main />
      <NavigationBar setSearchBox={setSearchBox} />
      {/* <SecondHeader /> */}
      {searchbox?<div className=''>
        <SearchPanel setSearchBox={setSearchBox} />
      </div>:""}
      <MushqBanner/>
      <JofaHeader/>
      <ProductComponent/>
      <LatestProduct/>
      <Counter/>
      <ProductCart/>
      <Footer/>
      {/* <TestProps /> */}
    </div>
  )
}
