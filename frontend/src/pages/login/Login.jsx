
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
        <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>
            <div className='label p-2'>
                <label htmlFor='username' className='text-gray-300'>Username</label>
                <input type='text' id='username' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-gray-300' />
            </div>
    
            <div className='mt-6'>
                <label htmlFor='password' className='text-gray-300'>Password</label>
                <input type='password' id='password' className='w-full px-4 py-2 mt-2 rounded-lg focus:outline-none bg-gray-300' />
            </div>
    
            <button type='submit' className='w-full py-2 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700'>Login</button>
        </form>

            
      </div>
    </div>
  );
};

export default Login;