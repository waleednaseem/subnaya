import React from 'react'
import Search_pane from '../SecondHeader/Search_pane'
import My_account from '../SecondHeader/My_account'
import Logo_pane from '../SecondHeader/Logo_pane'

export default function index() {
  return (
    
    <div className='flex justify-center items-center flex-col'>
        {/* main div */}
        <div className='w-full p-2 flex justify-between '>
          <Logo_pane />
          <Search_pane />
          <My_account />
        </div>
      </div>
  )
}
