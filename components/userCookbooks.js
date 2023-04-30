import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function UserCookbooks() {
  const [cookbooks, setCookbooks] = useState([]);

  async function getCookbooks() {
    const response = await fetch('/api/userCookbooks', {
      method: 'get',
    });

    const cookbookData = await response.json();

    setCookbooks(cookbookData);
  }

  useEffect(() => {
    getCookbooks();
  }, []);

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='flex bg-gray-300 mt-10 lg:min-w-[43.75em] md:min-w-[43.75em] min-w-full lg:py-5 md:py-5 py-4 justify-center'>
          <Icon className='mt-4 lg:ml-16 md:ml-6' icon='bi:plus-square' color='white' width={25} height={25} />
          <div className='text-white mt-3 ml-3 font-semibold lg:text-2xl md:text-2xl text-lg min-w-[10em] text-center mb-1'>
            {' '}
            New Cookbook
          </div>
        </div>
        {cookbooks.length > 0 ? (
          cookbooks.map((cookbook) => {
            return (
              <div className='ml-30 mr-30'>
                <div>
                  <div className='recipeImageContainer'>
                    <div>
                      <div className='mb-[-5em] image-container'>
                        {cookbook?.recipes?.[0] && (
                          <Link href={`/cookbookRecipes/${cookbook.id}`}>
                            <div className='cursor-pointer'>
                              <Image
                                src={cookbook.recipes[0].image_urls}
                                width={700}
                                height={300}
                                className='object-cover'
                              />
                            </div>
                          </Link>
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
          })
        ) : (
          <div>
            <div className='flex bg-green-500  lg:min-w-[43.75em] md:min-w-[43.75em] min-w-full lg:py-8 md:py-8 py-4 justify-center'>
              <div className='text-white mt-3 ml-3 font-semibold lg:text-2xl md:text-2xl text-lg min-w-[10em] text-center mb-1'>
                {' '}
                No cookbooks
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
