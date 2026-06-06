import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'>
				<h1 className='text-4xl font-bold text-center text-white mb-2'>
					Welcome Back
				</h1>
				<p className='text-center text-slate-400 mb-8'>Sign in to your account</p>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-sm font-semibold text-slate-200'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter your username'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className='mb-6'>
						<label className='label p-2'>
							<span className='text-sm font-semibold text-slate-200'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div>
						<button 
							className='w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed' 
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner '></span> : "Sign In"}
						</button>
					</div>
				</form>

				<div className='mt-6 text-center'>
					<p className='text-slate-400'>Don't have an account? {' '}</p>
					<Link to='/signup' className='text-blue-400 hover:text-blue-300 font-semibold transition'>
						Create one
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Login;


//Starter code for this file
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//           <span className='text-blue-500'> ChatApp</span>
//           </h1>
  
//           <form>
//               <div className='mt-6'>
//                   <label htmlFor='username' className='text-gray-300'>Username</label>
//                   <input type='text' id='username' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//               </div>
      
//               <div className='mt-6'>
//                   <label htmlFor='password' className='text-gray-300'>Password</label>
//                   <input type='password' id='password' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//               </div>
      
//               <button type='submit' className='w-full py-2 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700'>Login</button>
  
//               dont have an account yet? <a href='/register' className='text-blue-500'>Register</a>
//               <div>
//                   <button className="btn btn-block btn-sm mt-2">Login</button>
//               </div>
//           </form>
              
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;