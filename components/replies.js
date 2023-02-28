import { useState, useEffect } from 'react';

export default function Replies({ commentId }) {
  const [replyList, setReplyList] = useState([]);

  async function getReplies() {
    const response = await fetch(`/api/commentReplies/${commentId}`, {
      method: 'GET',
    });

    if (response.ok) {
      let replyData = await response.json();
      setReplyList(replyData);
      console.log(replyData);
    } else {
      alert('oopsies');
    }
  }
  useEffect(() => {
    getReplies();
  }, []);

  return replyList ? (
    <div>
      {/* {replies?.map((reply) => {
        <div>{reply.reply_text}</div>;
      })} */}
    </div>
  ) : (
    <div>No replies</div>
  );
}
