import { useState } from 'react';

export default function NewRecipe() {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center'>
        <div class=' w-full max-w-[50em] mt-10'>
          <label
            for='dropzone-file'
            class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer '>
            <div class='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                aria-hidden='true'
                class='w-10 h-10 mb-3 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
              </svg>
              <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span class='font-semibold'>Click to upload</span> or drag and drop
              </p>
              <p class='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id='dropzone-file' type='file' class='hidden' />
          </label>
        </div>
      </div>
      <div className='flex justify-center mt-5 '>
        <form className='w-full container'>
          <div className=' border-b border-green-500 py-2 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em]'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
              type='text'
              placeholder='Title'
              aria-label='Full name'
            />
          </div>
          <div className='flex justify-between mt-10 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em]'>
            <div className=' border-b border-green-500 py-2  '>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Cook Temperature'
                aria-label='Full name'
              />
            </div>
            <div className=' border-b border-green-500 py-2 '>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Prep Time'
                aria-label='Full name'
              />
            </div>
            <div className=' border-b border-green-500 py-2 '>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Cook Time'
                aria-label='Full name'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
