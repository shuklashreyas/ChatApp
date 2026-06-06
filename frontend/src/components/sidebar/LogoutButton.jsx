import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout';

const  LogoutButton = () => {
  const{loading,logout} = useLogout(); 

  return (
    <div className ="mt-auto pt-4 border-t border-slate-700">
      {!loading ? (
        <button 
          onClick={logout}
          className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition'
        >
          <BiLogOut className="w-5 h-5" />
          Logout
        </button>
      ) : (
        <span className = 'loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton;