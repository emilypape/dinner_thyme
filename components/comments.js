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
      <div className='lg:justify-center md:justify-center lg:items-center md:items-center absolute inset-x-0 bottom-0  flex overflow-x-hidden overflow-y-auto fixed lg:inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative lg:w-auto lg:my-6 mx-auto lg:max-w-3xl '>
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
                    <div className='flex-col' id={comment.id}>
                      <div className='flex'>
                        <Link href={`/profile/${comment.user.id}`}>
                          <div className='ml-2 mr-1'>
                            <Image
                              src={comment.user.profile_picture}
                              className='rounded-full '
                              height={30}
                              width='30'
                            />
                          </div>
                        </Link>
                        <div className=''>
                          <Link href={`/profile/${comment.user.id}`}>
                            <span className='font-medium px-1'>{comment.user.username}</span>
                          </Link>
                          {comment.comment_text}
                        </div>
                      </div>
                      <div className='ml-12 mb-2 text-xs text-gray-400'>Reply</div>
                    </div>
                  );
                })}
              </div>
            </div>{' '}
            {/*footer*/}
            <div className='flex items-center justify-end border-t border-solid border-slate-200 rounded-b'>
              <input className='appearance-none' placeholder='Add a comment...'></input>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  );
}
