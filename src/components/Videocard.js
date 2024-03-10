import React from 'react'

const Videocard = ({info}) => {
    const {snippet ,statistics} = info;
    const {thumbnails , title , channelTitle } = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-2 w-64 rounded-lg m-1 ml-4 '>
         <img className="rounded-lg" alt='thumbnail' src={thumbnails.medium.url}></img>
         <ul>
             <li className='font-bold'>{title}</li>
             <li className='italic'>{channelTitle}</li>
             <li>{viewCount%1000}K views</li>
         </ul>
   </div>
  )
}

export default Videocard