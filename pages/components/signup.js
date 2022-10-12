import React from 'react';

export default function SignupForm({ setLogin }) {
  async function signup() {
    const response = await fetch('/api/signup', {
      method: 'post',
      body: JSON.stringify({
        username: 'eap6787',
        first_name: 'Emily',
        email: 'eap6787@gmail.com',
        hashed_password: 'Atlas-2021',
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-3 text-lg opacity-70 md:text-2xl'>Create an account</div>
      <div>
        <input placeholder='Name' className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80' />
        <input
          placeholder='Email'
          type='text'
          className='rounded-full  px-2 py-2 mb-2 text-black max-w-lg opacity-80'
        />
      </div>
      <div>
        <input placeholder='Username' className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80' />
        <input placeholder='Password' className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80' />
      </div>
      <div>
        <button
          onClick={() => signup()}
          type='button'
          className='inline-block px-20 py-2 border-2 border-black text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-4'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'>
          Sign up
        </button>
        <div className='flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5'>
          <p className='text-center text-sm font-bold mx-2 mb-0'>OR</p>
        </div>
        <div className='px-20 underline text-blue-600 cursor-pointer' onClick={() => setLogin(true)}>
          Login
        </div>
      </div>
    </div>
  );
}
