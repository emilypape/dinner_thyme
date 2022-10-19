import React from 'react';
import Nav from './nav';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Profile from './profile';

export default function UserFeed({ setIsLoggedIn }) {
  const router = useRouter();
  return (
    <div>
      <Nav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
