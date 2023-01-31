import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from './Link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import UserSuggestion from './userSuggestions';
import FollowerScroller from './followerScroller';

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

  console.log(feedPosts);

  return (
    <div className='flex'>
      <div className='p-10 lg:ml-48 flex flex-col items-center lg:items-start justify-center xl:justify-start lg:justify-start md:justify-start '>
        <FollowerScroller following={feedPosts} />
        {feedPosts.map((posts) => {
          return (
            <div key={posts.id} className='lg:border-b lg:border-gray-200 lg:mb-5'>
              <div className='flex justify-between hover:text-gray-400 mb-2'>
                <Link href={`/profile/${posts.user.id}`}>
                  <div className='flex'>
                    <Image
                      className='w-10 h-10 rounded-full '
                      src={posts.user.profile_picture}
                      height={50}
                      width='50'
                    />
                    <div class='hover:text-gray-400 font-medium dark:text-black bg-white px-2 py-3 rounded-lg'>
                      <div className=''>{posts.user.username} </div>
                    </div>
                  </div>
                </Link>
                <div>
                  <Icon className='mr-4 mt-3' icon='ph:dots-three-bold' width={30} height={30} />
                </div>
              </div>
              <div key={posts.id} className=' lg:mr-4 max-w-xs lg:max-w-lg md:max-w-lg xl:max-w-lg shadow-lg mb-5'>
                <Image src={posts.image_urls} width={600} height={450} alt={posts.title} />
                <div className='flex'>
                  <div className='flex'>
                    <Icon className='ml-6 mt-2' icon='mdi:cards-heart-outline' color='gray' width={25} height={25} />
                    <Icon className='ml-4 mt-2' icon='mdi:comment-text-outline' color='gray' width={25} height={25} />
                  </div>
                  <div></div>
                </div>
                <div className='px-6 py-4'>
                  <div className='flex'>
                    <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{posts.title}</div>
                  </div>
                  <div className='overflow-auto max-h-28'>
                    <p className='hidden lg:block xl:block md:block text-gray-500 text-sm '>
                      {posts.cook_instructions}
                    </p>
                  </div>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Cook Time: {posts.cook_time}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Temp: {posts.cook_temperature}
                  </span>
                  <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                    Prep Time: {posts.prep_time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <UserSuggestion />
    </div>
  );
}
