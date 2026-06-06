import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";



const Conversation = ({ conversation, lastIdx, emoji }) => {
	const {selectedConversation, setSelectedConversation} = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;  
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<>
			<div 
				className={`flex gap-3 items-center hover:bg-slate-700 rounded-lg p-3 py-2 cursor-pointer transition ${isSelected ? 'bg-gradient-to-r from-blue-600 to-blue-700' : ''}`}
				onClick={() => setSelectedConversation(conversation)}
				
			>
				<div className={`avatar ${isOnline ? "online" : "" }`}>
					<div className='w-12 h-12 rounded-full ring-2 ring-slate-600'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-semibold text-slate-100'>{conversation.fullName}</p>
						<span className='text-lg'>{emoji}</span>
					</div>
					<p className='text-xs text-slate-400'>{isOnline ? '🟢 Online' : '⚫ Offline'}</p>
				</div>
			</div>

			{!lastIdx && <div className='divider divider-slate-700 my-1 py-0 h-1' />}
		</>
	);
};
export default Conversation;

// Starter code for this file
// const Conversation = () => {
//     return (
//         <div className="flex items-center gap-2 p-2 hover:bg-sky-500 rounded cursor-pointer">
//             {/* Avatar Section */}
//             <div className="avatar online">
//                 <div className="w-12 rounded-full">
//                     <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user" />
//                 </div>
//             </div>

//             {/* Content Section */}
//             <div className="flex flex-col flex-1">
//                 <div className="flex gap-3 justify-between">
//                     <p className="font-bold text-gray-200">John Doe</p>
//                     <span className="text-xl">❤️</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Conversation;

