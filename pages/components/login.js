import React, { useState } from 'react';
import LoginForm from './loginForm';
import SignupForm from './signup';
import backgroundImage from '../assets/images/breakfast_setting.jpeg';
import Image from 'next/image';

export default function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className='homepage'>
      <div className='image-container'>
        <Image src={backgroundImage} alt='breakfast setting' layout='fill' className='object-cover' />
      </div>
      <div className='login-form-container z-50 absolute inset-x-1/3 xs:inset-x-1/4 inset-y-1/3 md:inset-y-1/3 sm:inset-y-1/4 xs:inset-y-1/4 md:inset-x-1/4 sm:inset-x-1/4'>
        {login ? <LoginForm setLogin={setLogin} /> : <SignupForm setLogin={setLogin} />}
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  };
}
