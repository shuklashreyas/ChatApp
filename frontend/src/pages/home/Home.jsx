import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl border border-slate-700'>
       <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home