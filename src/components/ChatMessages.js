import React from 'react'

const ChatMessage = ({name , comment}) => {
  return (
    <div className='flex items-center space-x-1 py-1'>
        <img className="h-8 " alt="user_image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBfwLirilBMO5kntBzXf6_8hdBswyEg2qVP8RQlvWsQ&s'></img>
        <span className='font-bold pr-2'>{name}</span>
        <span>{comment}</span>
    </div>
  )
}

export default ChatMessage