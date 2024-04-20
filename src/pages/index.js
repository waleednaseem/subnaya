import React, { useState } from 'react'
// import Main from '../Components/Main'
// import SearchPanel from '../Components/SearchPanel'
// import NavigationBar from '@/Components/Header/SecondHeader/NavigationBar'
// import SecondHeader from '../Components/SecondHeader'
import MushqBanner from '@/Components/MushqBanner'
import JofaHeader from '@/Components/JofaHeader'
import ProductComponent from '@/Components/ProductComponent'
import LatestProduct from '@/Components/LatestProduct'
import Layout from '@/Components/Layout'

export default function index() {
  const [searchbox, setSearchBox] = useState(false)
  return (
    <div>
    
      {/* <Layout> */}
        <MushqBanner />
        {/* <JofaHeader /> */}
        {/* <ProductComponent /> */}
        <LatestProduct />
      {/* </Layout> */}
    </div>
  )
}
