import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewRecipe() {
  const router = useRouter();
  const [title, setTitle] = useState('');

  const createCookbook = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ title });

    const response = await fetch('/api/createCookbook', {
      method: 'POST',
      body: body,
    });

    if (response.ok) {
      router.push('/cookbooks');
    }
  };

  return (
    <div className='flex justify-center mt-10'>
      <form onSubmit={createCookbook} className='flex flex-col w-full container'>
        <div className='border-b border-green-500 py-2 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em] '>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
            type='text'
            placeholder='Cookbook Title'
            value={`${title}`}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex-col mt-10'>
            <button className='text-xl  bg-green-500 text-white py-2  px-5 rounded-lg mt-5 mb-5 ' type='submit'>
              Create Cookbook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
