import React from 'react'

const Videocard = ({info}) => {
    console.log(info);
    const {snippet ,statistics} = info;
    const {thumbnails , title , channelTitle } = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-3 w-64 border shadow-lg m-3'>
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