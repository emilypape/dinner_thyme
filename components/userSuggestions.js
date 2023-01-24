import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from './Link';
import SuggestionList from './suggestionList';

export default function UserSuggestion() {
  const [user, setUser] = useState([]);

  const router = useRouter();

  async function loggedInUser() {
    const response = await fetch('/api/loggedInUser');
    let userData = await response.json();

    setUser(userData);
  }
  useEffect(() => {
    loggedInUser();
  }, []);

  return (
    <div>
      <div className='flex'>
        <div className='ml-10 mt-10 hidden lg:flex md:flex xl:flex items-center lg:items-end justify-evenly lg:justify-start md:justify-start '>
          <Link href={`/profile/${user.id}`}>
            <div className='flex'>
              <Image className='w-10 h-10 rounded-full ' src={user.profile_picture} height={60} width='60' alt='' />
              <div class='font-medium dark:text-black bg-white px-2 py-2 rounded-lg'>
                <div>{user.username}</div>
                <div className='lg:flex xl:flex md:hidden text-xs text-gray-400'>{user.first_name}'s kitchen</div>
              </div>
            </div>
          </Link>
        </div>
        <Link href={'/profile'}>
          <div className='mt-14 ml-32 md:mr-10 hidden lg:flex md:flex xl:flex '>
            <div className='text-blue-500 hover:text-blue-800'>view</div>
          </div>
        </Link>
      </div>
      <div className='ml-10 mt-4 text-gray-400 font-medium hidden lg:flex md:flex xl:flex items-center lg:items-end '>
        <div>
          <div>Suggestions for you</div>
          <SuggestionList />
        </div>
      </div>
    </div>
  );
}
