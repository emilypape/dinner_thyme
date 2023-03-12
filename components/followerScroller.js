import { defaultConfig } from 'next/dist/server/config-shared';
import React from 'react';
import Image from 'next/image';
import Link from './Link';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';

export default function FollowerScroller({ following }) {
  return (
    <div className='overflow-x-scroll flex max-w-xs lg:max-w-lg md:max-w-lg'>
      {following.map((followers) => {
        return (
          <Link href={`/profile/${followers.user.id}`}>
            <div key={followers.user.id}>
              <div className='flex flex-col p-2 mb-5 items-center'>
                <Image className='w-10 h-10 rounded-full' src={followers?.user?.profile_picture || profilePicPlaceholder} alt={'Profile Photo'} height={50} width='50' />
                <div className='text-gray-300 text-xs'>{followers.user.username.substring(0, 8)}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
