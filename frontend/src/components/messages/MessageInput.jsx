import { BsSend } from 'react-icons/bs';
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage(); // Make sure this line correctly destructures

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage(""); // Clear the input field after sending the message
  }

  return (
    <form className='px-4 py-4 border-t border-slate-700 bg-slate-900' onSubmit={handleSubmit}>
      <div className='w-full relative flex items-center gap-2'>
        <input
          type='text'
          className='flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
          placeholder='Type your message…'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type='submit' 
          className='px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={loading || !message.trim()}
        >
          {loading ? <div className='loading loading-spinner loading-sm'></div> : <BsSend className='w-5 h-5' />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;


//Starter code for this file
// import React from 'react'
// import {BsSend} from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <div className='px-4 my-3'>
//         <div className = 'w-full'>
//             <input
//                 type = 'text'
//                 placeholder = 'send a message...'
//                 className = 'border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//             />
//             <button type = 'submit' className = 'absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend />
//             </button>
//         </div>

//     </div>
//   )
// }

// export default MessageInput