import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from './Link';
import { Icon } from '@iconify/react';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import noPhoto from '../public/assets/images/errorImage.jpg';
import RecipeSuggestions from './recipeSuggestions';

export default function Recipe({ recipeId }) {
  const [recipeData, setRecipeData] = useState(false);
  const [commentText, setCommentText] = useState('');
  const myRef = useRef(null);

  async function getRecipeData() {
    const response = await fetch(`/api/singleRecipe/${recipeId}`, {
      method: 'GET',
    });

    const myRecipeData = await response.json();
    setRecipeData(myRecipeData);
  }

  async function postComments(e) {
    e.preventDefault();

    const response = await fetch(`/api/newComment/${recipeId}`, {
      method: 'Post',
      body: JSON.stringify({
        comment_text: commentText,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response) {
      alert(response.statusText);
    } else {
      await getRecipeData();
      setCommentText('');
    }
  }

  const handleCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    getRecipeData();
  }, [recipeId]);

  return (
    recipeData && (
      <div className='flex-col flex-wrap'>
        <div className='flex'>
          <div className='flex lg:ml-48  p-10'>
            <div>
              <div className='mb-4 md:hidden lg:hidden xl:hidden'>
                <Image
                  className='shadow max-w-full  min-w-full h-auto align-middle border-none '
                  src={recipeData?.image_urls || noPhoto}
                  width={400}
                  height={200}
                />
              </div>
              <Link href={`/profile/${recipeData?.user?.id}`}>
                <div className='text-center uppercase text-white bg-green-400 rounded-full p-1 text-xs max-w-[12em] mb-2'>
                  {recipeData?.user?.first_name}'s Kitchen
                </div>
              </Link>
              <div className=' font-semibold text-4xl width-[10em] max-w-[10em] mr-2'>{recipeData?.title}</div>
              <div onClick={executeScroll} className='mt-2 underline text-green-400 cursor-pointer mr-[5em]'>
                See what people are saying
              </div>
              <div className='flex mt-8'>
                <Link href={`/profile/${recipeData?.user?.id}`}>
                  <Image
                    className='shadow rounded-full max-w-full min-w-full h-auto align-middle border-none'
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
              <div className='lg:overflow-auto lg:max-h-[20em] max-w-[28em]'>
                <p
                  dangerouslySetInnerHTML={{ __html: recipeData.cook_instructions }}
                  className=' lg:block xl:block md:block text-gray-500 text-sm mb-10'></p>
              </div>
              <div>
                <div className='xl:hidden lg:hidden md:hidden justify-center flex'>
                  <Image
                    className='shadow  rounded-full max-w-full min-w-full h-auto align-middle border-none'
                    src={recipeData?.image_urls || noPhoto}
                    width={'200%'}
                    height={'200%'}
                  />
                </div>
                <div className='p-10 bg-gray-200 mt-[-4em]  lg:hidden md:hidden  shadow  rounded-xl px-16  min-w-[20em] '>
                  <div className='flex mt-10'>
                    <Icon icon='material-symbols:timer-outline' width={20} height={20} />
                    <div>{recipeData.cook_time}</div>
                  </div>
                  <div className='flex mt-1 mb-3'>
                    <Icon icon='tabler:temperature' width={22} height={22} />
                    <div>{recipeData.cook_temperature}</div>
                  </div>
                  <div>
                    <div className='text-xl font-semibold mb-3'>Ingredients</div>
                    {recipeData?.ingredient?.ingredient_list?.map((ingredients) => {
                      return <li className='mt-1'>{ingredients}</li>;
                    })}
                  </div>
                </div>
                <div className='flex-col mt-16 bg-gray-200 p-3 rounded'>
                  <div className='flex'>
                    <Icon icon='mdi:heart' width={28} height={28} />
                    <div className='text-xl ml-1'>{recipeData.likes.length}</div>
                    <div className='underline ml-5 mt-[.1em]'>{recipeData?.comments?.length} comments</div>
                  </div>
                  <div ref={myRef} className='mt-5'>
                    {recipeData?.comments?.map((comment) => {
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
                  <form onSubmit={postComments} className='flex'>
                    <input
                      className='appearance-none rounded min-w-[90%] mr-2 mt-2 p-1  lg:min-w-[90%] md:min-w-[38%]'
                      value={commentText}
                      onChange={handleCommentText}
                      placeholder='Add to the conversation...'></input>
                    <button type='submit'>
                      <Icon className='mr-2 mt-4 cursor-pointer' icon='ri:send-plane-fill' />
                    </button>
                  </form>
                </div>
                <div className='max-w-[18em] mt-10 ml-[-4em] lg:hidden md:hidden '>
                  <div className='font-semibold text-xl ml-16  mb-5'>You may also enjoy...</div>
                  <RecipeSuggestions />
                </div>
              </div>
            </div>
            <div className='lg:block md:block hidden'>
              <Image
                className='shadow  rounded-full max-w-full min-w-full h-auto align-middle border-none'
                src={recipeData?.image_urls || noPhoto}
                width={'200%'}
                height={'200%'}
              />
            </div>
          </div>
          <div className='flex-col'>
            <div className='bg-gray-200 lg:block md:block hidden  shadow lg:ml-[-5em] md:ml-[-5em]  lg:mr-10 md:mr-6 md:mt-10 py-10  lg:mt-10   rounded-xl px-16 min-h-[24em] max-h-[35em] min-w-[20em] overflow-scroll'>
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
                {recipeData?.ingredient?.ingredient_list?.map((ingredients) => {
                  return <li className='mt-1'>{ingredients}</li>;
                })}
              </div>
            </div>
            <div className='max-w-[20em] mt-10 lg:ml-[-8em] md:ml-[-9em] lg:block md:block hidden'>
              <div className='font-semibold text-xl ml-16  mb-5'>You may also enjoy...</div>
              <RecipeSuggestions />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
