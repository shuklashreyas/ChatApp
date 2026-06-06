
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

function App() {
  const {authUser} = useAuthContext();
  return <div className='h-screen w-screen flex items-center justify-center overflow-hidden'>
    <Routes>
      <Route path = '/' element={authUser ? <Home /> : <Navigate to = {"/login"} />} />
      <Route path = '/login' element={authUser ? <Navigate to="/" /> : <Login />} />
      <Route path = '/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
    </Routes>
    <Toaster />
  </div>;
  
}

export default App;
