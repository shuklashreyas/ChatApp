import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from 'react-icons/ti';
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
    
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 h-full w-2/3'>
      {selectedConversation ? (
        <>
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 mb-2 border-b border-slate-700'>
            <span className='text-slate-200 text-sm'>Chatting with:</span>{' '}
            <span className='text-white font-bold ml-1'>{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <>
          <NoChatSelected />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-slate-300 font-semibold flex flex-col items-center gap-4'>
        <TiMessages className='text-6xl md:text-8xl text-blue-500 opacity-80' />
        <p className='text-2xl'>Welcome back, <span className='text-blue-400'>{authUser.fullName}</span> 👋</p>
        <p className='text-slate-400'>Select a conversation to start messaging</p>
      </div>
    </div>
  );
};

export default MessageContainer;
