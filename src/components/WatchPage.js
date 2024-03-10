import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
import CommentContainer from './Comments';

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  // console.log(searchParams.get("v"));
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  },[]);
  return (
    <div>
      <div className='p-2 m-3'>
        <iframe width="1100" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <CommentContainer/>
    </div>
  )
}

export default WatchPage