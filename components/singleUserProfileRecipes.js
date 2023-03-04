import react, { useEffect, useState } from 'react';
import Image from 'next/image';
import noPhoto from '../public/assets/images/errorImage.jpg';

export default function SingleUserProfileRecipes({ user }) {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    setRecipes(user.recipes);
  });

  console.log(recipes);
  return recipes ? (
    <div>
      <div className='flex flex-wrap justify-evenly lg:justify-start'>
        <div className='flex flex-wrap px-12 md:px-0 lg:px-0 xl:px-0 lg:justify-start lg:ml-56 md:ml-16'>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id} className='lg:mr-4 max-w-xs rounded shadow-lg mb-5'>
                <Image src={recipe?.image_urls || noPhoto} width={400} height={300} alt={recipe.title} />
                <div className='px-6 py-4'>
                  <div className='flex'>
                    <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{recipe.title}</div>
                  </div>
                  <div className='overflow-auto max-h-28'>
                    <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>
                      {recipe.cook_instructions}
                    </p>
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
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>Nothing Cooking in the Kitchen!</div>
  );
}
