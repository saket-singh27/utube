import React from 'react'
import { useSelector } from 'react-redux'

const Side_bar = () => {
  const isMenuopen = useSelector((store)=> store.app.isMenuFlag);
  if(!isMenuopen) return null;
  return (
    <div className='border shadow-lg p-4 w-52 '>
      <div className='py-3 text-lg'>
        <ul className='py-1'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        </ul>
      </div>
      <div className='py-3 text-base'>
        <ul className='py-1'>
        <li className='py-1'>Your Channel</li>
        <li className='py-1'>History</li>
        <li className='py-1'>Your videos</li>
        <li className='py-1'>Watch later</li>
        <li className='py-1'>Show more</li>
        <li className='py-1'>Subscriptions</li>
        </ul>
      </div>
      <div className='py-3'>
        <ul className='py-1'>
        <li className='py-1'>Trending</li>
        <li className='py-1'>Fashion</li>
        <li className='py-1'>Shopping</li>
        <li className='py-1'>Music</li>
        <li className='py-1'>Songs</li>
        <li className='py-1'>Learning</li>
        <li className='py-1'>Podcast</li>
        </ul>
      </div>
    </div>
  )
}

export default Side_bar