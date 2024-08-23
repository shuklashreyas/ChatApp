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
    <form className='px-4 my-3' onSubmit={handleSubmit}> {/* Ensure onSubmit is on the form */}
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='send a message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
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