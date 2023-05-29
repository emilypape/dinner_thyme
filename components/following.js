import { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import Link from './Link';

export default function Following({ setFollowerModal }) {
  const [following, setFollowing] = useState([]);

  async function fetchFollowing() {
    const response = await fetch('/api/myFollowing', {
      method: 'GET',
    });

    let followingData = await response.json();
    console.log(followingData);
    setFollowing(followingData);
  }

  useEffect(() => {
    fetchFollowing();
  }, []);

  return (
    <>
      <div className=' justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm lg:max-w-xl md:max-w-xl xl:max-w-xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold px-2'>Following</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setFollowerModal(false)}>
                ×
              </button>
            </div>
            {/*body*/}
            <div className='overflow-scroll overflow-x-scroll max-h-[15em] min-w-[15em]  '>
              {following?.length > 0 ? (
                following?.map((follows) => {
                  return (
                    <Link key={follows.id} href={`/profile/${follows.user.id}`}>
                      <div className='flex items-center space-x-4 ml-4 mb-2 mt-1 '>
                        <Image
                          src={follows.user.profile_picture || profilePicPlaceholder}
                          width={40}
                          height={40}
                          className='w-10 h-10 rounded-full'
                          alt=''
                        />
                        <div className='font-medium dark:text-black'>
                          <div>{follows.user.username}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className='text-black p-5'>Not following any users</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
