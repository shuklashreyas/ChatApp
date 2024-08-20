import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading,signup} = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'></div>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mt-6'>
            <label htmlFor='fullname' className='text-gray-300'>Full Name</label>
            <input
              type='text'
              id='fullname'
              className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300'
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>

          <div className='mt-6'>
            <label htmlFor='username' className='text-gray-300'>Username</label>
            <input
              type='text'
              id='username'
              className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div className='mt-6'>
            <label htmlFor='password' className='text-gray-300'>Password</label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div className='mt-6'>
            <label htmlFor='confirmPassword' className='text-gray-300'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-black-300'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
          
          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block'>
            Already have an account?
          </Link>

          <button type='submit' className='w-full py-2 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

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