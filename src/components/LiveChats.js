import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChats } from '../utils/chatSlice';
import ChatMessage from './ChatMessages';
import { generateComment, generateRandomName } from '../utils/useful';

const LiveChats = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages)
    const [search , setSearch] = useState("");
   
    useEffect(()=>{
        const s = setInterval(()=>{
            dispatch(addChats({
                name:generateRandomName(),
                comment:generateComment(15) + "🤘"
            }
            ))
        },700);
        return()=> clearInterval(s);
    },[]);
    const addComment = ()=>{
        dispatch(addChats({
            name:"Saket Singh",
            comment:search
        })
        );
        setSearch("");
    }


  return (
    <>
    <div className='overflow-y-scroll h-[450px] w-full bg-gray-50 flex flex-col-reverse'>
        {ChatMessages.map((c,index)=><ChatMessage 
            name={c.name} comment={c.comment} key={index}/>
        )}
    </div>
    <form onSubmit={(e)=>{
        e.preventDefault()
        addComment()}}>
        <input className='bg-green-50 mx-1 p-1 rounded-lg px-1' 
        type='text'
        placeholder='type Comment'
        value={search}
        onChange={(e)=>{
        setSearch(e.target.value)}}
        />
        <button className='bg-green-100 ml-2 rounded-lg p-2'>Send</button>
    </form>
    </>
  )
}

export default LiveChats