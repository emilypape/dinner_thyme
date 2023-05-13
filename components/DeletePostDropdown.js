import { useState } from 'react';
import { disableBodyScroll } from 'body-scroll-lock';

export default function DeletePostDropdown({ setDropdown, selectedRecipe }) {
  async function deleteRecipe() {
    const response = await fetch(`/api/deleteRecipe/${selectedRecipe}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setDropdown(false);
    }
  }
  return (
    <div className='absolute shadow-lg shadow-black-500/50 z-50 bg-white rounded-lg py-3'>
      <ul className='hover:none text-red-400 '>
        <li onClick={deleteRecipe} className='mb-1 hover:bg-slate-100 px-5'>
          Delete{' '}
        </li>
      </ul>
    </div>
  );
}
