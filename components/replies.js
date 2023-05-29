import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from './Link';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';

export default function Replies({ commentId, username }) {
  const [replyList, setReplyList] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplyText = (event) => {
    setReplyText(event.target.value);
    console.log(replyText);
  };

  async function postReply() {
    const response = await fetch(`/api/newReply`, {
      method: 'Post',
      body: JSON.stringify({
        reply_text: replyText,
        comment_id: commentId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response) {
      alert(response.statusText);
    } else {
      getReplies();
      setReplyText('');
    }
  }

  async function getReplies() {
    const response = await fetch(`/api/commentReplies/${commentId}`, {
      method: 'GET',
    });

    if (response.ok) {
      let replyData = await response.json();
      setReplyList(replyData);
    } else {
      setReplyList([]);
    }
  }
  useEffect(() => {
    getReplies();
  }, []);
  let replyUsername = `@${username}`;
  console.log(replyList);

  if (!replyList) {
    return null;
  } else {
    return replyList.length > 0 ? (
      <div>
        {replyList?.map((reply) => {
          return (
            <div key={reply.id} className='flex'>
              <div className='flex '>
                <Link href={`/profile/${reply.user.id}`}>
                  <div className='ml-2 mr-1'>
                    <Image
                      src={reply?.user?.profile_picture || profilePicPlaceholder}
                      className='rounded-full '
                      height={25}
                      width='25'
                    />
                  </div>
                </Link>
                <div className='text-xs mb-1'>
                  <Link href={`/profile/${reply.user.id}`}>
                    <span className='font-medium  px-1'>{reply.user.username}</span>
                  </Link>
                  {reply.reply_text}
                </div>
              </div>
            </div>
          );
        })}
        <div className=' flex'>
          <input
            value={replyText}
            onChange={handleReplyText}
            className='border p-[.1em] mb-1 mt-1 text-sm border-gray-300 rounded-lg '
            placeholder={replyUsername}></input>
          <Icon onClick={postReply} className='mr-2 ml-1 mt-2 cursor-pointer' icon='ri:send-plane-fill' />
        </div>
      </div>
    ) : (
      <div>
        <div className='flex ml-6 text-xs'>No replies</div>
        <div className=' flex'>
          <input
            value={replyText}
            onChange={handleReplyText}
            className='border p-[.1em] mb-1 mt-1 text-sm border-gray-300 rounded-lg '
            placeholder={replyUsername}></input>
          <Icon onClick={postReply} className='mr-2 ml-1 mt-2 cursor-pointer' icon='ri:send-plane-fill' />
        </div>
      </div>
    );
  }
}
