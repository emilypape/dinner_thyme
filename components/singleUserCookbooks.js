import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import noPhoto from '../public/assets/images/errorImage.jpg';

export default function SingleUserCookbooks({ userId }) {
  const [userCookbooks, setUserCookbooks] = useState([]);

  async function getUserCookbooks() {
    const response = await fetch(`/api/cookbooks/${userId}`, {
      method: 'get',
    });

    const cookbookData = await response.json();

    setUserCookbooks(cookbookData);
  }

  useEffect(() => {
    getUserCookbooks();
  }, []);
  return userCookbooks.length ? (
    <div>
      <div className='flex flex-col items-center mt-10'>
        {userCookbooks.map((cookbook) => {
          return (
            <div key={cookbook.id} className='ml-30 mr-30'>
              <div>
                <div className='recipeImageContainer'>
                  <div>
                    <div className='mb-[-5em] image-container'>
                      {cookbook?.recipes?.length > 0 ? (
                        cookbook?.recipes?.[0] && (
                          <Link href={`/cookbookRecipes/${cookbook.id}`}>
                            <div className='cursor-pointer'>
                              <Image
                                src={cookbook.recipes[0].image_urls || noPhoto}
                                width={700}
                                height={300}
                                className='object-cover'
                              />
                            </div>
                          </Link>
                        )
                      ) : (
                        <Link href={`/cookbookRecipes/${cookbook.id}`}>
                          <div className='cursor-pointer'>
                            <Image src={noPhoto} width={700} height={300} className='object-cover' />
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className='cookbookTitleContainer'>
                  <Link href={`/cookbookRecipes/${cookbook.id}`}>
                    <div className='cursor-pointer cookbookTitle max-w-[10em] min-w-[10em] lg:p-4 md:p-4 p-2 rounded-r-lg relative top-[-1em] text-white font-semibold lg:text-2xl md:text-2xl text-lg bg-green-500'>
                      {cookbook.title}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center mt-10'>
      <div className='flex bg-green-500  lg:min-w-[43.75em] md:min-w-[43.75em] min-w-full lg:py-8 md:py-8 py-4 justify-center'>
        <div className='text-white mt-3 ml-3 font-semibold lg:text-2xl md:text-2xl text-lg min-w-[10em] text-center mb-1'>
          {' '}
          No cookbooks
        </div>
      </div>
    </div>
  );
}
