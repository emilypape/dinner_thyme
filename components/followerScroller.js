import { defaultConfig } from 'next/dist/server/config-shared';
import React from 'react';
import Image from 'next/image';

export default function FollowerScroller({ following }) {
  return (
    <div className='overflow-x-scroll flex max-w-xs lg:max-w-lg md:max-w-lg'>
      {following.map((followers) => {
        return (
          <div>
            <div className='flex flex-col p-2 mb-5'>
              <Image className='w-10 h-10 rounded-full' src={followers.user.profile_picture} height={50} width='50' />
              <div className='text-gray-300 text-xs'>{followers.user.first_name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
