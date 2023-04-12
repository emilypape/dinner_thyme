import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className='text-black'>No cookbooks yet</div>
  );
}
