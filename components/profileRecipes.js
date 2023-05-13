import { useState, useEffect } from 'react';
import Image from 'next/image';
import Loader from './loader';
import Link from './Link';
import noPhoto from '../public/assets/images/errorImage.jpg';

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
  return recipeArray ? (
    <div>
      <div className='flex flex-wrap justify-evenly lg:justify-start'>
        <div className='flex flex-wrap px-12 md:px-0 lg:px-0 xl:px-0 lg:justify-start lg:ml-56 md:ml-16'>
          {recipeArray?.length > 0 ? (
            recipeArray?.map((recipe) => {
              return (
                <div key={recipe.id} className='lg:mr-4 max-w-xs rounded shadow-lg mb-5'>
                  <Link href={`/recipe/${recipe.id}`}>
                    <Image src={recipe?.image_urls || noPhoto} width={400} height={300} alt={recipe.title} />
                  </Link>
                  <div className='px-6 py-4'>
                    <Link href={`/recipe/${recipe.id}`}>
                      <div className='flex'>
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
              <div>Nothing cooking in the kitchen </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
