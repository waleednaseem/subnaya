import React,{useState} from 'react'
import Main from '../Components/Main'
import SearchPanel from '../Components/SearchPanel'
import NavigationBar from '@/Components/NavigationBar'
import SecondHeader from '../Components/SecondHeader'
import MushqBanner from '@/Components/MushqBanner'
import JofaHeader from '@/Components/JofaHeader'

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
    </div>
  )
}
