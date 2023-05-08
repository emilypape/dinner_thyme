import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import noPhoto from '../public/assets/images/errorImage.jpg';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function AddToCookbook({ setCookbookModal, selectedRecipe }) {
  const [cookbooks, setCookbooks] = useState([]);
  const router = useRouter();
  async function getCookbooks() {
    const response = await fetch('/api/userCookbooks', {
      method: 'get',
    });

    const cookbookData = await response.json();

    setCookbooks(cookbookData);
  }

  async function addToCookbook(cookbookId) {
    const response = await fetch(`/api/addRecipeToCookbook`, {
      method: 'Post',
      body: JSON.stringify({
        cookbook_id: cookbookId,
        recipe_id: selectedRecipe,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response) {
      alert(response.statusText);
    } else {
      router.push(`/cookbookRecipes/${cookbookId}`);
    }
  }

  function closeCookbooks() {
    clearAllBodyScrollLocks();
    setCookbookModal(false);
  }

  useEffect(() => {
    getCookbooks();
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  console.log(selectedRecipe);
  return (
    <div className=' fixed inset-0 z-40 animate-fade-in-up'>
      <div className='lg:justify-center md:justify-center lg:items-center md:items-center absolute inset-x-0 bottom-0  flex overflow-x-hidden overflow-y-auto fixed lg:inset-0 z-50 outline-none focus:outline-none'>
        <div className=' relative lg:w-auto lg:my-6 mx-auto lg:max-w-2xl'>
          {/*content*/}
          <div className=' z-60 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex justify-end  rounded-t'>
              <div onClick={closeCookbooks} className='text-black h-6 w-6 text-2xl cursor-pointer'>
                ×
              </div>
            </div>
            {/*body*/}
            <div className=' flex flex-col items-center overflow-scroll max-h-[40em]'>
              <Link href={'create/cookbook'}>
                <div className='cursor-pointer flex bg-gray-300 mt-10 lg:min-w-[43.75em] md:min-w-[43.75em] min-w-full lg:py-5 md:py-5 py-4 justify-center'>
                  <Icon className='mt-4 lg:ml-16 md:ml-6' icon='bi:plus-square' color='white' width={25} height={25} />
                  <div className='text-white mt-3 ml-3 font-semibold lg:text-2xl md:text-2xl text-lg min-w-[10em] text-center mb-1'>
                    {' '}
                    New Cookbook
                  </div>
                </div>
              </Link>
              {cookbooks.map((cookbook) => {
                return (
                  <div className='ml-30 mr-30'>
                    <div>
                      <div className='recipeImageContainer'>
                        <div>
                          <div className='mb-[-5em] image-container'>
                            {cookbook?.recipes?.length > 0 ? (
                              cookbook?.recipes?.[0] && (
                                <div onClick={() => addToCookbook(cookbook.id)} className='cursor-pointer'>
                                  <Image
                                    src={cookbook.recipes[0].image_urls || noPhoto}
                                    width={700}
                                    height={300}
                                    className='object-cover'
                                  />
                                </div>
                              )
                            ) : (
                              <div onClick={() => addToCookbook(cookbook.id)} className='cursor-pointer'>
                                <Image src={noPhoto} width={700} height={300} className='object-cover' />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='cookbookTitleContainer'>
                        <Link href={`/cookbookRecipes/${cookbook.id}`}>
                          <div className='cursor-pointer cookbookTitle min-w-[10em] max-w-[10em] lg:p-4 md:p-4 p-2 rounded-r-lg relative top-[-1em] text-white font-semibold lg:text-2xl md:text-2xl text-lg bg-green-500'>
                            {cookbook.title}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*footer*/}
            <div className=' appearance-none flex items-center justify-end border-t border-solid border-slate-200 rounded-b'></div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  );
}
