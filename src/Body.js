import React from 'react'
import { Outlet } from 'react-router-dom'
import Side_bar from './Side_bar.js'

const Body = () => {
  return (
    <div>
        <Side_bar/>
        <Outlet/>
    </div>
  )
}

export default Body