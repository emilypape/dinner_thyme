import { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicPlaceholder from '../assets/images/profile_pic_placeholder.jpeg';
import { Icon } from '@iconify/react';

export default function Profile() {
  const [user, setUser] = useState(null);
  async function loggedInUser() {
    const response = await fetch('/api/loggedInUser');
    let userData = await response.json();
    console.log(userData);
    setUser(userData);
  }
  useEffect(() => {
    loggedInUser();
  }, []);

  return user ? (
    <>
      <div>
        <div className='p-10 flex justify-center xl:justify-start lg:justify-start md:justify-start lg:ml-40 md:ml-0'>
          <div className='rounded-full border-4 pt-1 border-black py-0 px-1 '>
            <Image
              className='rounded-full border-2 border-black'
              src={profilePicPlaceholder}
              width={150}
              height={150}
            />
          </div>
          <button className='absolute xl:mt-5 lg:mt-5 md:mt-5 mt-32 rounded-full'>
            <Icon icon='akar-icons:circle-plus-fill' color='lime' width={50} height={50} />
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>NOT LOGGED IN</div>
    </>
  );
}
