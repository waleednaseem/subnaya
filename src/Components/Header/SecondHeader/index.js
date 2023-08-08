import React from 'react'
import Logo_pane from './Logo_pane'
import My_account from './My_account'
import Search_pane from './Search_pane'

export default function index() {
  return (
    <div>
        <Logo_pane/>
        <My_account/>
        <Search_pane/>
    </div>
  )
}
