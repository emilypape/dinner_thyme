import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Recipe({ recipeId }) {
  const [recipeData, setRecipeData] = useState(false);

  async function getRecipeData() {
    const response = await fetch(`/api/singleRecipe/${recipeId}`, {
      method: 'GET',
    });

    const myRecipeData = await response.json();
    console.log(myRecipeData);
    setRecipeData(myRecipeData);
  }

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    recipeData && (
      <div className='flex'>
        <div className='flex lg:ml-48 p-10'>
          <div>
            <div className='uppercase text-white bg-green-400 rounded-full p-1 text-xs max-w-[12em] mb-2'>
              {recipeData?.user?.first_name}'s Kitchen
            </div>
            <div className=' font-semibold text-4xl width-[10em] max-w-[10em] mr-2'>{recipeData?.title}</div>
            <div className='mt-2 underline text-green-400 cursor-pointer mr-[5em]'>See what people are saying</div>
            <div className='flex mt-8'>
              <Image
                className='shadow rounded-full max-w-full h-auto align-middle border-none'
                src={recipeData?.user?.profile_picture}
                width={40}
                height={40}
              />
              <div className='mt-1 ml-1'>{recipeData?.user?.username}</div>
            </div>
            <div className='mt-3 mb-2 flex'>
              <div className='font-semibold text-md'>Cooking Instructions</div>
              <div className='ml-3 text-white bg-green-400 rounded-full p-1 text-xs'>Prep: {recipeData.prep_time}</div>
            </div>
            <div className='overflow-auto max-h-[20em] max-w-[28em]'>
              <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>{recipeData.cook_instructions}</p>
            </div>
          </div>
          <div>
            <Image
              className='shadow rounded-full max-w-full h-auto align-middle border-none'
              src={recipeData?.image_urls}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div>
          <div>I am instructions</div>
        </div>
      </div>
    )
  );
}
