import React from 'react'
import { useSelector } from 'react-redux'

const Side_bar = () => {
  const isMenuopen = useSelector((store)=> store.app.isMenuFlag);
  if(!isMenuopen) return null;
  return (
    <div className='border shadow-lg p-4 w-52'>
      <div className='py-3 text-lg'>
        <ul className='py-1'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        </ul>
      </div>
      <div className='py-3 text-base'>
        <ul className='py-1'>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Show more</li>
        <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  )
}

export default Side_bar