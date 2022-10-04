import React from 'react';

export default function LoginForm() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-3 text-lg opacity-70 md:text-3xl'>Already a member?</div>
      <input placeholder='username' className='rounded-full  px-6 py-4 mb-2 text-black max-w-lg' />
      <input placeholder='password' className='rounded-full  px-6 py-4 text-black max-w-lg' />
    </div>
  );
}
