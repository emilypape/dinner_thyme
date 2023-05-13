import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import noPhoto from '../public/assets/images/errorImage.jpg';

export default function CookbookRecipes({ cookbookId }) {
  const [cookbookRecipes, setCookbookRecipes] = useState([]);

  async function getCookbookRecipes() {
    const response = await fetch(`/api/cookbookRecipes/${cookbookId}`, {
      method: 'Get',
    });
    const cookbookRecipeData = await response.json();
    console.log(cookbookRecipeData);
    setCookbookRecipes(cookbookRecipeData);
  }

  useEffect(() => {
    getCookbookRecipes();
  }, []);
  return (
    <div>
      <div className='flex flex-wrap justify-evenly lg:justify-start mt-10'>
        <div className='flex flex-wrap px-12 md:px-0 lg:px-0 xl:px-0 lg:justify-start lg:ml-56 md:ml-16'>
          {cookbookRecipes?.recipes?.length > 0 ? (
            cookbookRecipes?.recipes?.map((recipe) => {
              return (
                <div key={recipe.id} className='lg:mr-4 max-w-xs rounded shadow-lg mb-5'>
                  <Link href={`/recipe/${recipe.id}`}>
                    <Image
                      className='cursor-pointer'
                      src={recipe?.image_urls || noPhoto}
                      width={400}
                      height={300}
                      alt={recipe.title}
                    />
                  </Link>
                  <div className='px-6 py-4'>
                    <Link href={`/recipe/${recipe.id}`}>
                      <div className='flex cursor-pointer'>
                        <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{recipe.title}</div>
                      </div>
                    </Link>
                    <div className='overflow-auto max-h-28'>
                      <p
                        dangerouslySetInnerHTML={{ __html: recipe.cook_instructions }}
                        className='hidden lg:block xl:block md:block text-gray-500 text-sm '></p>
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
              );
            })
          ) : (
            <div className='lg:ml-[24.5em] mt-10 text-gray-300'>
              <div className='text-gray-300 text-center'>Nothing cooking in the kitchen</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
