import { useState, useEffect } from 'react';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from './Link';
import SingleUserProfileRecipes from './singleUserProfileRecipes';

export default function SingleUserProfile({ userId }) {
  const [userData, setUserData] = useState();

  const router = useRouter();

  async function singleUser() {
    const response = await fetch(`/api/userProfile/${userId}`);
    let user = await response.json();
    console.log(user);
    setUserData(user);
  }

  async function followUser() {
    const response = await fetch(`/api/unfollowUser/${userData.id}`, {
      method: 'POST',
      body: JSON.stringify({
        following_id: userId,
      }),
    });

    if (!response.ok) {
      console.log('fail');
    } else {
      singleUser();
    }
  }

  useEffect(() => {
    if (userId) {
      singleUser();
    }
  }, [userId]);

  return userData ? (
    <div>
      <div className='p-10 flex flex-col lg:flex-row md:flex-row items-center justify-center xl:justify-start lg:justify-start md:justify-start lg:ml-60 md:ml-0'>
        <div>
          <Image
            className='rounded-full border-2 border-black'
            src={userData?.profile_picture || profilePicPlaceholder}
            width={150}
            height={150}
          />
        </div>
        <div className='mt-8 lg:mt-0 xl:mt-0 md:mt-0'>
          <div className='ml-8 xl:text-3xl lg:text-3xl md:text-2xl font-bold lg:ml-10 lg:mt-6 md:ml-10 md:mt-8 font-title'>
            {userData.first_name}'s Kitchen
          </div>
          <button
            onClick={() => followUser()}
            className='flex py-2 px-10 text-white text-sm rounded-lg bg-green-500 xl:py-2 xl:px-6 md:py-2 md:px-6 lg:py-2 lg:px-6 mt-3 xl:text-lg lg:text-lg lg:ml-14 md:ml-10 b-2 b'>
            <Icon
              className='mt-1 mr-2'
              icon={userData.followers.length > 0 ? 'material-symbols:check-circle-outline' : 'bi:plus-square'}
              color='white'
              width={20}
              height={20}
            />
            {userData.followers.length > 0 ? <div>Following</div> : <div>Add Friend</div>}
          </button>
        </div>
      </div>
      <Link href={`/cookbooks/${userData.id}`}>
        <div className='ml-10 mr-10 lg:ml-60 lg:mr-60 md:ml-60 md:mr-60 border-t border-black flex items-center justify-center'>
          <div className='hover:border-t-2 border-green-500 py-5 px-3 flex cursor-pointer'>
            <Icon icon='arcticons:nextcloudcookbook' color='gray' width={25} height={25} />
            <div className='text-xs text-gray-300 font-semibold px-1 pt-1'>COOKBOOKS</div>
          </div>
        </div>
      </Link>
      <div>
        <SingleUserProfileRecipes user={userData} />
      </div>
    </div>
  ) : (
    <div></div>
  );
}
