import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from './Link';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';

export default function Replies({ commentId }) {
  const [replyList, setReplyList] = useState(false);

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
  console.log(replyList);

  if (!replyList) {
    return null;
  } else {
    return replyList.length > 0 ? (
      <div>
        {replyList?.map((reply) => {
          return (
            <div className='flex'>
              <div className='flex '>
                <Link href={`/profile/${reply.user.id}`}>
                  <div className='ml-2 mr-1'>
                    <Image src={reply?.user?.profile_picture || profilePicPlaceholder} className='rounded-full ' height={25} width='25' />
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
      </div>
    ) : (
      <div className='flex ml-6 text-xs'>No replies</div>
    );
  }
}
