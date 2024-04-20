import React, { useState } from 'react'
import FIrstHeader from "@/Components/Header/FIrstHeader";
import SecondHeader from "@/Components/Header/SecondHeader";
// import NavigationBar from "@/Components/Header/SecondHeader/"

export default function index() {
  const [searchbox, setSearchBox] = useState(false)
  return (
    <div>
      <FIrstHeader />
      {/* <NavigationBar setSearchBox={setSearchBox} /> */}
      <SecondHeader />
      {searchbox ? <div className=''>
        <SearchPanel setSearchBox={setSearchBox} />
      </div> : ""}
    </div>
  )
}
