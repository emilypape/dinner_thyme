import { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicPlaceholder from '../assets/images/profile_pic_placeholder.jpeg';

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
        <div className='p-10 flex justify-center xl:justify-start lg:justify-start md:justify-start'>
          <Image className='rounded-full' src={profilePicPlaceholder} width={150} height={150} />
        </div>
      </div>
    </>
  ) : (
    <>
      <div>NOT LOGGED IN</div>
    </>
  );
}
