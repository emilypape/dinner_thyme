import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from './Link';

export default function recipeSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  async function suggestedRecipes() {
    const response = await fetch('/api/recipeSuggestions', {
      method: 'GET',
    });

    const suggested = await response.json();
    setSuggestions(suggested);
    console.log(suggested);
  }

  useEffect(() => {
    suggestedRecipes();
  }, []);

  return (
    <div className='flex min-w-[27em] flex-wrap px-10 '>
      {suggestions?.map((recipe) => {
        return (
          <div className='flex justify-evenly '>
            <Link href={`/recipe/${recipe.id}`}>
              <div className='ml-5 mb-5'>
                <Image
                  className='shadow rounded max-w-full min-w-full h-auto align-middle border-none'
                  src={recipe.image_urls}
                  width={150}
                  height={150}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
