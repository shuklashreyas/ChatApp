
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

 const Sidebar = () => {
  return (
    <div className ='border-r border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-4 flex flex-col h-full w-1/3'>
        <SearchInput />
        <div className = 'divider divider-slate-700 px-3 my-2'></div>
        <Conversations/>
        <LogoutButton />
    </div>
  )
}

export default Sidebar;

//Starter code for this file
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'
// import SearchInput from './SearchInput'

//  const Sidebar = () => {
//   return (
//     <div className ='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput />
//         <div className = 'divider px-3'></div>
//         <Conversations/>
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar;
