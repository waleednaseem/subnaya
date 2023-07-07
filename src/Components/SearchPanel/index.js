import React from 'react'
import Left_pane from './Left_pane'
import Right_pane from './Right_pane'

export default function index() {
  return (
    <div className='flex'>
        <Left_pane/>
        <Right_pane/>
    </div>
  )
}
