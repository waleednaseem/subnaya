import React from 'react'
import Main from '../Components/Main'
import SearchPanel from '../Components/SearchPanel'
import NavigationBar from '@/Components/NavigationBar'
import SecondHeader from '../Components/SecondHeader'

export default function index() {
  return (
    <div>
      <Main />
      <NavigationBar />
      {/* <SecondHeader /> */}
      <SearchPanel />
    </div>
  )
}
