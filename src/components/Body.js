import React from 'react'
import { Outlet } from 'react-router-dom'
import Side_bar from './Side_bar.js'

const Body = () => {
  return (
    <div className='flex scrollbar-hide'>
        <Side_bar/>
        <Outlet/>
    </div>
  )
}

export default Body