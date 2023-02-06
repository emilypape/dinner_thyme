import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from './Link';

export default function Comments({ recipeId }) {
  const [comments, setComments] = useState([]);
  const router = useRouter();

  async function getComments() {
    const response = await fetch(`/api/recipeComments/${recipeId}`);

    let commentData = await response.json();
    setComments(commentData);
  }

  useEffect(() => {
    getComments();
    console.log(comments);
  }, []);

  return (
    <div>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex justify-end  rounded-t'>
              <div onClick={() => router.push('/feed')} className='text-black h-6 w-6 text-2xl'>
                ×
              </div>
            </div>
            {/*body*/}
            <div className='flex'>
              <div className='hidden lg:block md:block xl:block '>
                <Image src={comments.image_urls} width={550} height={500} />
              </div>
              <div className='max-h-[29rem] overflow-y-scroll '>
                {comments?.comments?.map((comment) => {
                  return (
                    <div>
                      <Image
                        src={comment.user.profile_picture}
                        className='w-10 h-10 rounded-full '
                        height={50}
                        width='50'
                      />
                      <div>{comment.comment_text}</div>
                    </div>
                  );
                })}
              </div>
            </div>{' '}
            {/*footer*/}
            <div className='flex items-center justify-end border-t border-solid border-slate-200 rounded-b'>
              <input></input>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  );
}
