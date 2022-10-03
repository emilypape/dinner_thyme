import React from 'react';
import backgroundImage from '../assets/images/breakfast_setting.jpeg';
import Image from 'next/image';

export default function Homepage() {
  return (
    <div>
      <Image src={backgroundImage} alt='breakfast setting' layout='fill' className='object-cover' />
    </div>
  );
}
