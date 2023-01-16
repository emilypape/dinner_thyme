import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Likes({ user }) {
  const [likes, setLikes] = useState();
  async function fetchLikes() {
    const response = await fetch('/api/myLikes', {
      method: 'GET',
    });

    let likeData = await response.json();
    setLikes(likeData);
  }

  useEffect(() => {
    fetchLikes();
  }, []);

  let likeArray = likes;
  return (
    <div>
      <div className='flex flex-wrap justify-evenly lg:justify-start'>
        <div className='flex flex-wrap px-12 md:px-0 lg:px-0 xl:px-0 lg:justify-start lg:ml-56 md:ml-16'>
          {likeArray?.map((like) => {
            return (
              <div class='lg:mr-4 max-w-xs rounded shadow-lg mb-5'>
                <Image src={like.recipe.image_urls} width={400} height={300} alt={like.recipe.title} />
                <div className='px-6 py-4'>
                  <div class='flex items-center space-x-4 absolute -mt-20 -ml-4 rounded-t-lg bg-white px-2 py-2'>
                    <Image
                      class='w-10 h-10 rounded-full '
                      src={like.recipe.user.profile_picture}
                      height={50}
                      width='50'
                      alt=''
                    />
                    <div class='font-medium dark:text-black bg-white px-2 py-1 rounded-lg'>
                      <div>{like.recipe.user.first_name}'s Kitchen</div>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{like.recipe.title}</div>
                  </div>

                  <div className='overflow-auto max-h-28'>
                    <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>
                      {like.recipe.cook_instructions}
                    </p>
                  </div>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Cook Time: {like.recipe.cook_time}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Temp: {like.recipe.cook_temperature}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Prep Time: {like.recipe.prep_time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
