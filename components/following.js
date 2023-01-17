import { useState, useEffect } from 'react';
import { Image } from 'next/image';

export default function Following({ setFollowerModal }) {
  const [following, setFollowing] = useState();

  async function fetchFollowing() {
    const response = await fetch('/api/myFollowing', {
      method: 'GET',
    });

    let followingData = await response.json();
    setFollowing(followingData);
  }

  useEffect(() => {
    fetchFollowing();
  }, []);

  let myFollowing = following;
  return (
    <>
      <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none'>
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
            {myFollowing?.map((follows) => {
              return (
                <div className='flex items-center space-x-4'>
                  <Image src={follows.user.profile_picture} className='w-10 h-10 rounded-full' alt='' />
                  <div className='font-medium dark:text-black'>
                    <div>{follows.user.username}</div>
                  </div>
                </div>
              );
            })}
            <div className='relative p-6 flex-auto'></div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
