import React, { useEffect, useState } from 'react'
import { YOUTUBE_LINK } from '../utils/constants'
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';

const Videocontainer = () => {

  const [videos , setVideos] = useState([]);

  useEffect(()=>{
    getVideos()
  },
    []);
    // {console.log(toggleMenu)}
    const getVideos = async () =>{
      const data = await fetch(YOUTUBE_LINK);
      const json = await data.json();
      // console.log(json.items);
      setVideos(json.items);
    }
  return (
    <div className='flex flex-wrap justify-end '>
    {videos.map(video=>
      <Link to={"/watch?v=" + video.id}><Videocard info={video} key={video.id}/></Link>)}
    </div>)
  
}

export default Videocontainer