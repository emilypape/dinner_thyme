import React from 'react';
import Image from 'next/image';
import backgroundImage from '../public/assets/images/plateDinner.webp';
import { Icon } from '@iconify/react';
import Link from './Link';

export default function LandingPage() {
  return (
    <div className=''>
      <div className='image-container '>
        <Image src={backgroundImage} alt='breakfast setting' layout='fill' className='object-cover' />
      </div>
      <div className='flex flex-col z-50 relative  mt-32 lg:bg-inherit bg-white items-center lg:items-start  xl:items-start md:ml-18 md:mr-24 flex-wrap '>
        <div className='flex flex-col items-center lg:items-start xl:items-start animate-fade-in-down'>
          <Icon className='mt-5 mb-1 lg:hidden xl:hidden md:hidden ' icon='game-icons:cook' width='46' height='46' />
          <div className='font-bold text-3xl  ml-1 font-title  text-black lg:text-5xl lg:ml-24 lg:mt-10 md:mt-12'>
            Dinner Thyme
          </div>
          <div className='lg:max-w-md lg:text-lg'>
            <p className='mt-5 ml-8 mr-8 lg:mt-8 lg:ml-20'>
              It is time to sit down at the table together. Whether you are 5 minutes or 5,000 miles away you can share
              a meal. Find recipes, friends, and cuisines from all over the world while sharing your favorite eats for
              others to try! Save all of your favorite foods and share your recipes and cookbooks with your new
              community! Remember no matter where you are somewhere in the world its Dinner Thyme.{' '}
            </p>
          </div>
          <div className='flex py-2 lg:px-40 lg:mt-5 '>
            <Link href='/login'>
              <div className='font-semibold text-sm py-1 text-blue-600'>Login </div>
            </Link>
            <span className='px-2 font-bold'>&#183;</span>
            <Link href='/login'>
              <div className='font-semibold text-sm py-1 text-blue-600'>Signup</div>
            </Link>
          </div>
          <div className='flex mb-4 border-t-2 lg:ml-36 lg:border-gray-300 md:mb-10'>
            <a
              href='https://www.linkedin.com/in/emily-pape-01776622a/'
              rel='noreferrer'
              target='_blank'
              className='p-2'>
              <Icon icon='mdi:linkedin' height={30} />
            </a>
            <a href='mailto:eap6787@gmail.com' className='p-2'>
              <Icon icon='simple-icons:gmail' height={30} />
            </a>
            <a href='https://github.com/emilypape' rel='noreferrer' target='_blank' className='p-2'>
              <Icon icon='jam:github' height={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
