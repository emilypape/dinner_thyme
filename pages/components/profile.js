import { useState } from 'react';

export default function Profile() {
  async function loggedInUser() {
    const response = await fetch('/api/loggedInUser', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return <div>Profile</div>;
}
