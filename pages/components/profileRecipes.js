import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProfileRecipes({ user }) {
  const [recipes, setRecipes] = useState();
  async function fetchRecipes() {
    const response = await fetch('/api/loggedInUserRecipes', {
      method: 'GET',
    });

    let recipeData = await response.json();
    setRecipes(recipeData);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  let recipeArray = recipes;
  return (
    <div>
      {recipeArray?.map((recipe) => {
        return (
          <div className='flex flex-wrap lg:ml-44 lg:mr-44 lg:mt-5 justify-evenly'>
            <div class='ml-2 max-w-xs rounded shadow-lg mb-5'>
              <Image src={recipe.image_urls} width={100} height={100} alt={recipe.title} />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{recipe.title}</div>
                <div className='overflow-auto max-h-28'>
                  <p className='text-gray-500 text-sm '>{recipe.cook_instructions}</p>
                </div>
              </div>

              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Cook Time: {recipe.cook_time}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Temp: {recipe.cook_temperature}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Prep Time: {recipe.prep_time}
                </span>
              </div>
            </div>
            <div class='max-w-xs rounded shadow-lg mb-5'>
              <Image src={recipe.image_urls} width={100} height={100} alt={recipe.title} />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{recipe.title}</div>
                <div className='overflow-auto max-h-28'>
                  <p className='text-gray-500 text-sm '>{recipe.cook_instructions}</p>
                </div>
              </div>

              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Cook Time: {recipe.cook_time}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Temp: {recipe.cook_temperature}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Prep Time: {recipe.prep_time}
                </span>
              </div>
            </div>
            <div class='max-w-xs rounded shadow-lg mb-5'>
              <Image src={recipe.image_urls} width={100} height={100} alt={recipe.title} />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{recipe.title}</div>
                <div className='overflow-auto max-h-28'>
                  <p className='text-gray-500 text-sm '>{recipe.cook_instructions}</p>
                </div>
              </div>

              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Cook Time: {recipe.cook_time}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Temp: {recipe.cook_temperature}
                </span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                  Prep Time: {recipe.prep_time}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
