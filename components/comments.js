import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from './Link';
import { Icon } from '@iconify/react';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import Replies from './replies';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import noPhoto from '../public/assets/images/errorImage.jpg';

export default function Comments({ recipeId, setCommentOpen }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [openedReplies, setOpenedReplies] = useState({});

  async function getComments() {
    const response = await fetch(`/api/recipeComments/${recipeId}`);

    let commentData = await response.json();
    setComments(commentData);
  }

  async function postComments() {
    const response = await fetch(`/api/newComment/${recipeId}`, {
      method: 'Post',
      body: JSON.stringify({
        comment_text: commentText,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response) {
      alert(response.statusText);
    } else {
      await getComments();
      setCommentText('');
    }
  }

  const handleCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const openReplies = (commentId) => {
    const newState = { ...openedReplies };

    if (newState[commentId]) {
      newState[commentId] = false;
    } else {
      newState[commentId] = true;
    }
    setOpenedReplies(newState);
  };

  const closeComment = () => {
    clearAllBodyScrollLocks();
    setCommentOpen(false);
  };

  useEffect(() => {
    getComments();
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div className='fixed inset-0 z-40 animate-fade-in-up'>
      <div className='lg:justify-center md:justify-center lg:items-center md:items-center absolute inset-x-0 bottom-0  flex overflow-x-hidden overflow-y-auto fixed lg:inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative lg:w-auto lg:my-6 mx-auto lg:max-w-3xl'>
          {/*content*/}
          <div className='z-60 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex justify-end  rounded-t'>
              <div onClick={closeComment} className='text-black h-6 w-6 text-2xl cursor-pointer'>
                ×
              </div>
            </div>
            {/*body*/}
            <div className='flex'>
              <div className='hidden lg:block md:block xl:block '>
                <Image src={comments?.image_urls || noPhoto} alt={'Recipe Photo'} width={550} height={500} />
              </div>
              <div className='max-h-[25rem] overflow-y-scroll min-w-[20em]'>
                {comments?.comments?.length > 0 ? (
                  comments?.comments?.map((comment) => {
                    return (
                      <div key={comment.id} className='flex-col' id={comment.id}>
                        <div className='flex'>
                          <Link href={`/profile/${comment.user.id}`}>
                            <div className='ml-2 mr-1'>
                              <Image
                                src={comment?.user?.profile_picture || profilePicPlaceholder}
                                alt={'Profile Photo'}
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
                        <div>
                          <div className='flex-col ml-12 '>
                            <div className='flex'>
                              <div className='ml-2 text-xs text-gray-400'>___</div>
                              {openedReplies[comment.id] ? (
                                <div
                                  onClick={() => openReplies(comment.id)}
                                  className={'hover:cursor-pointer ml-2 mb-2 mt-1 text-xs text-gray-400'}>
                                  Hide replies
                                </div>
                              ) : (
                                <div
                                  onClick={() => openReplies(comment.id)}
                                  className={'hover:cursor-pointer ml-2 mb-2 mt-1 text-xs text-gray-400'}>
                                  View replies
                                </div>
                              )}
                              <div className='ml-2 text-xs text-gray-400'>___</div>
                            </div>
                            {openedReplies[comment.id] && (
                              <Replies username={comment.user.username} commentId={comment.id} />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='text-gray-300 text-center mt-4'>Get the conversation started</div>
                )}
              </div>
            </div>{' '}
            {/*footer*/}
            <div className=' appearance-none flex items-center justify-end border-t border-solid border-slate-200 rounded-b'>
              <input
                className='appearance-none min-w-full lg:min-w-[38%] md:min-w-[38%]'
                value={commentText}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    postComments();
                  }
                }}
                onChange={handleCommentText}
                placeholder='Add a comment...'></input>
              <Icon onClick={postComments} className='mr-2 cursor-pointer' icon='ri:send-plane-fill' />
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  );
}
