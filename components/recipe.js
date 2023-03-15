import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from './Link';
import { Icon } from '@iconify/react';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import noPhoto from '../public/assets/images/errorImage.jpg';

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

  const recipeComments = recipeData.comments;
  const recipeIngredients = recipeData.ingredient;

  return (
    recipeData && (
      <div className='flex-col flex-wrap'>
        <div className='flex'>
          <div className='flex lg:ml-48  p-10'>
            <div>
              <Link href={`/profile/${recipeData?.user?.id}`}>
                <div className='text-center uppercase text-white bg-green-400 rounded-full p-1 text-xs max-w-[12em] mb-2'>
                  {recipeData?.user?.first_name}'s Kitchen
                </div>
              </Link>
              <div className=' font-semibold text-4xl width-[10em] max-w-[10em] mr-2'>{recipeData?.title}</div>
              <div className='mt-2 underline text-green-400 cursor-pointer mr-[5em]'>See what people are saying</div>
              <div className='flex mt-8'>
                <Link href={`/profile/${recipeData?.user?.id}`}>
                  <Image
                    className='shadow rounded-full max-w-full h-auto align-middle border-none'
                    src={recipeData?.user?.profile_picture || profilePicPlaceholder}
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href={`/profile/${recipeData?.user?.id}`}>
                  <div className='mt-1 ml-1'>{recipeData?.user?.username}</div>
                </Link>
              </div>
              <div className='mt-3 mb-2 flex'>
                <div className='font-semibold text-md'>Cooking Instructions</div>
                <div className='ml-3 text-white bg-green-400 rounded-full p-1 text-xs'>
                  Prep: {recipeData.prep_time}
                </div>
              </div>
              <div className='overflow-auto max-h-[20em] max-w-[28em]'>
                <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>
                  {recipeData.cook_instructions}
                </p>
              </div>
              <div>
                <div className='flex-col mt-16 bg-gray-200 p-3 rounded'>
                  <div className='flex'>
                    <Icon icon='mdi:heart' width={28} height={28} />
                    <div className='text-xl ml-1'>{recipeData.likes.length}</div>
                    <div className='underline ml-5 mt-[.1em]'>{recipeComments.length} comments</div>
                  </div>
                  <div className='mt-5'>
                    {recipeComments?.map((comment) => {
                      return (
                        <div>
                          <div className='flex'>
                            <Link href={`/profile/${comment.user.id}`}>
                              <div className='ml-2 mr-1'>
                                <Image
                                  src={comment?.user?.profile_picture || profilePicPlaceholder}
                                  alt={'Profile Photo'}
                                  className='rounded-full '
                                  height={30}
                                  width='30'
                                />
                              </div>
                            </Link>
                            <div className=''>
                              <Link href={`/profile/${comment.user.id}`}>
                                <span className='font-medium px-1'>{comment.user.username}</span>
                              </Link>
                              {comment.comment_text}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                className='shadow rounded-full max-w-full h-auto align-middle border-none'
                src={recipeData?.image_urls || noPhoto}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className='bg-gray-200  shadow lg:ml-[-5em] md:ml-[-5em]  lg:mr-10 md:mr-6 md:mt-10 py-10  lg:mt-10   rounded-xl px-16 max-h-[35em] min-w-[20em] overflow-scroll'>
            <div className='flex'>
              <Icon icon='material-symbols:timer-outline' width={20} height={20} />
              <div>{recipeData.cook_time}</div>
            </div>
            <div className='flex mt-1 mb-3'>
              <Icon icon='tabler:temperature' width={22} height={22} />
              <div>{recipeData.cook_temperature}</div>
            </div>
            <div>
              <div className='text-xl font-semibold mb-3'>Ingredients</div>
              {recipeIngredients?.ingredient_list?.map((ingredients) => {
                return <li className='mt-1'>{ingredients}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
