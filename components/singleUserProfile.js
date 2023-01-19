import { useState, useEffect } from 'react';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function SingleUserProfile({ userId }) {
  const [userData, setUserData] = useState();

  async function singleUser() {
    const response = await fetch(`/api/userProfile/${userId}`);
    let user = await response.json();
    console.log(user);
    setUserData(user);
  }

  useEffect(() => {
    if (userId) {
      singleUser();
    }
  }, [userId]);

  return userData ? (
    <div className='p-10 flex flex-col lg:flex-row md:flex-row items-center justify-center xl:justify-start lg:justify-start md:justify-start lg:ml-60 md:ml-0'>
      <div>
        {userData.profile_picture ? (
          <Image
            className='rounded-full border-2 border-black'
            src={userData.profile_picture}
            width={150}
            height={150}
          />
        ) : (
          <Image className='rounded-full border-2 border-black' src={profilePicPlaceholder} width={150} height={150} />
        )}
      </div>
      <div className='mt-8 lg:mt-0 xl:mt-0 md:mt-0'>
        <div className='ml-8 xl:text-3xl lg:text-3xl md:text-2xl font-bold lg:ml-10 lg:mt-6 md:ml-10 md:mt-8 font-title'>
          {userData.first_name}'s Kitchen
        </div>
        <button className=' py-2 px-10 text-white text-sm rounded-lg bg-green-500 xl:py-2 xl:px-6 md:py-2 md:px-6 lg:py-2 lg:px-6 mt-3 xl:text-lg lg:text-lg lg:ml-14 md:ml-10 b-2 b'>
          <div>Add Friend</div>
        </button>
        {/* <button
          onClick={() => router.push('/newRecipe')}
          className='flex ml-4 text-sm lg:ml-0 md-ml-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
          <Icon className='mt-4 lg:ml-16 md:ml-6' icon='bi:plus-square' color='gray' width={23} height={23} />
          <div className='text-gray-500 mt-4 ml-1 font-semibold'>New Recipe</div>
        </button> */}
      </div>
    </div>
  ) : (
    <div />
  );
}
