import { useState } from 'react';
import { disableBodyScroll } from 'body-scroll-lock';

export default function FeedPostDropdown({ userId, setCookbookModal }) {
  const [dropdown, setDropdown] = useState(false);

  async function unfollowUser() {
    const response = await fetch(`/api/unfollowUser/${userId}`, {
      method: 'POST',
      body: JSON.stringify({
        following_id: userId,
      }),
    });

    if (!response.ok) {
      console.log('fail');
    } else {
      setDropdown(!dropdown);
    }
  }
  function openCookbooks() {
    const body = document.querySelector('body');
    disableBodyScroll(body);
    setCookbookModal(true);
  }

  return (
    <div className='absolute shadow-lg shadow-black-500/50 z-50 bg-white rounded-lg py-3'>
      <ul className='hover:none text-gray-400 '>
        <li onClick={openCookbooks} className='mb-1 hover:bg-slate-100 px-5'>
          Add to Cookbook
        </li>

        <li onClick={() => unfollowUser()} className='mb-1 text-red-500 hover:bg-slate-100 px-5'>
          Unfollow
        </li>
      </ul>
    </div>
  );
}
