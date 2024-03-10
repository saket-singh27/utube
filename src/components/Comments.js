import React from 'react';
import { COMMENT_LIST } from '../utils/constants';

const CommentsList = ({data})=>{
    const { name , comment } = data;
    return(
    <div className='flex bg-gray-100 rounded-md my-3'>
        <img className=" p-2 w-10 h-10" alt = "user_image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBfwLirilBMO5kntBzXf6_8hdBswyEg2qVP8RQlvWsQ&s'></img>
        <div className=''>
            <h1 className='p-1 font-bold'>{name}</h1>
            <p className='px-1 '>{comment}</p>
        </div>
    </div>
    )
}

const Comment =({comments})=>{
    return comments.map((comment , index)=>(
        <div key={index}>
        <CommentsList  data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            <Comment comments={comment.replies}/>
        </div>
        </div>
));
};

const CommentContainer = () => {
      return (
    <div>
    <h1 className='font-bold text-xl px-2 mx-2'>Comments</h1>
        <Comment comments={COMMENT_LIST}/>
    </div>
  )
}

export default CommentContainer