import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from './Link';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';

export default function SuggestionList() {
  const [suggestionList, setSuggestionList] = useState([]);
  async function getUserSuggestions() {
    const response = await fetch('/api/followerSuggestions', {
      method: 'Get',
    });
    let suggestions = await response.json();
    setSuggestionList(suggestions);
  }

  useEffect(() => {
    getUserSuggestions();
  }, []);

  return (
    <div>
      {suggestionList.map((suggestion) => {
        return (
          <div className='flex justify-between'>
            <div className=' mt-5 hidden lg:flex md:flex xl:flex items-center lg:items-end lg:justify-start md:justify-start '>
              <Link href={`/profile/${suggestion.user.id}`}>
                <div className='flex'>
                  <Image
                    className='w-10 h-10 rounded-full '
                    src={suggestion?.user?.profile_picture || profilePicPlaceholder}
                    alt={'Profile Photo'}
                    height={50}
                    width='50'
                  />
                  <div class='text-sm dark:text-black bg-white px-2 py-2 rounded-lg'>
                    <div>{suggestion.user.username}</div>
                    <div className='lg:flex xl:flex md:hidden text-xs text-gray-400'>
                      {suggestion.user.first_name}'s kitchen
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <Link href={`/profile/${suggestion.user.id}`}>
              <div className='mt-10 ml-28 md:hidden hidden lg:flex md:flex xl:flex '>
                <div className='text-sm text-blue-500 hover:text-blue-800'>visit</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
