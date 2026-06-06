import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'>
				<h1 className='text-4xl font-bold text-center text-white mb-2'>
					Create Account
				</h1>
				<p className='text-center text-slate-400 mb-8'>Join our community today</p>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-sm font-semibold text-slate-200'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label p-2 '>
							<span className='text-sm font-semibold text-slate-200'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-sm font-semibold text-slate-200'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-sm font-semibold text-slate-200'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm your password'
							className='w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div className='mb-6'>
						<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					</div>

					<div>
						<button 
							className='w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed' 
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Create Account"}
						</button>
					</div>
				</form>

				<div className='mt-6 text-center'>
					<p className='text-slate-400'>Already have an account? {' '}</p>
					<Link
						to="/login"
						className='text-blue-400 hover:text-blue-300 font-semibold transition'
					>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUp;



//Starter code for this file
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div>
//       <div className='felx flex-col items-center justify-center min-w-96 mx-auto'></div>

//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>
//           <div className='mt-6'>
//             <label htmlFor='username' className='text-gray-300'>Full Name</label>
//             <input type='text' id='username' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//           </div>

//           <div className='mt-6'>
//             <label htmlFor='password' className='text-gray-300'>Username</label>
//             <input  id='password' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//           </div>

//           <div className='mt-6'>
//             <label className='text-gray-300'>Password</label>
//             <input type='password' id='confirmPassword' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//           </div>

//           <div className='mt-6'>
//             <label htmlFor='confirmPassword' className='text-gray-300'>Confrim Password</label>
//             <input type='password' id='confirmPassword' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300' />
//           </div>

//           <GenderCheckbox />
          
//           <a className = 'text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href ='#' >
//             Already have an account? 
//             </a>

//           <button type='submit' className='w-full py-2 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700'>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;