import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
    }, 100);
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-900 to-slate-950'>
        {!loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id}
           ref = {lastMessageRef}>
          <Message message={message} />
          </div>

        ))}


        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
      <p className='text-center text-slate-400 mt-8'>Send a message to start the conversation</p>
    )}
    </div>
    
  )
}

export default Messages