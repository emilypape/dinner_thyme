import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/assets/images/plateDinner.webp';
import { Icon } from '@iconify/react';

export default function LandingPage() {
  return (
    <div>
      <div className='image-container'>
        <Image src={backgroundImage} alt='breakfast setting' layout='fill' className='object-cover' />
      </div>
      <div className='flex flex-col z-50 relative  mt-32 bg-white items-center flex-wrap'>
        <div className='flex flex-col items-center'>
          <div className=' font-bold text-3xl mt-5 ml-1 font-title  text-black'>Dinner Thyme</div>
          <div>
            <p className='mt-5 ml-8 mr-8'>
              It's time to sit down at the table together. Whether you're 5 minutes or 5,000 miles away you can share a
              meal. Find recipes, friends, and cuisines from all over the world while sharing your favorite eats for
              others to try! Save all of your favorite foods and share your recipes and cookbooks with your new
              community! Remember no matter where you are somewhere in the world its Dinner Thyme.{' '}
            </p>
          </div>
          <div className='flex mb-4 border-t-2'>
            <div className='p-2'>
              <Icon icon='mdi:linkedin' height={30} />
            </div>
            <div className='p-2'>
              <Icon icon='simple-icons:gmail' height={30} />
            </div>
            <div className='p-2'>
              <Icon icon='jam:github' height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
