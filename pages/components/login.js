import React from 'react';

export default function LoginForm() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-3 text-lg opacity-70 md:text-2xl'>Have an account?</div>
      <input placeholder='username' className='rounded-full  px-6 py-4 mb-2 text-black max-w-lg opacity-80' />
      <input placeholder='password' className='rounded-full  px-6 py-4 text-black max-w-lg opacity-80' />
      <div>
        <button
          type='button'
          class='inline-block px-14 py-2 border-2 border-black text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-4'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'>
          Login
        </button>
        <div class='flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5'>
          <p class='text-center text-lg font-bold mx-2 mb-0'>OR</p>
        </div>
        <div className='px-12 underline text-blue'>Sign up</div>
      </div>
    </div>
  );
}
