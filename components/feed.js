import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from './Link';
import Image from 'next/image';

export default function Feed() {
  const [feedPosts, setFeedPosts] = useState([]);
  const router = useRouter;

  async function getFeedPosts() {
    const response = await fetch('/api/followingPosts', {
      method: 'Get',
    });

    const feedData = await response.json();
    setFeedPosts(feedData);
  }

  useEffect(() => {
    getFeedPosts();
  }, []);

  return (
    <div>
      <div className='p-10 lg:ml-48 flex flex-col items-center lg:items-start justify-center xl:justify-start lg:justify-start md:justify-start '>
        {feedPosts.map((posts) => {
          return (
            <div>
              <Link href={`/profile/${posts.user.id}`}>
                <div className='flex'>
                  <Image className='w-10 h-10 rounded-full ' src={posts.user.profile_picture} height={50} width='50' />
                  <div class='font-medium dark:text-black bg-white px-2 py-3 rounded-lg'>
                    <div className='hover:text-gray-300'>{posts.user.username}</div>
                  </div>
                </div>
              </Link>
              <div key={posts.id} className='lg:mr-4 max-w-xs lg:max-w-2xl md:max-w-2xl xl:max-w-2xl shadow-lg mb-5'>
                <Image src={posts.user.recipes.image_urls} width={400} height={300} alt={posts.user.recipes.title} />
                <div className='px-6 py-4'>
                  <div className='flex'>
                    <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{posts.user.recipes.title}</div>
                  </div>
                  <div className='overflow-auto max-h-28'>
                    <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>
                      {posts.user.recipes.cook_instructions}
                    </p>
                  </div>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Cook Time: {posts.user.recipes.cook_time}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Temp: {posts.user.recipes.cook_temperature}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Prep Time: {posts.user.recipes.prep_time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
