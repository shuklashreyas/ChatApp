const Conversation = () => {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-sky-500 rounded cursor-pointer">
            {/* Avatar Section */}
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user" />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200">John Doe</p>
                    <span className="text-xl">❤️</span>
                </div>
            </div>
        </div>
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

