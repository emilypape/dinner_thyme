import { useState, useEffect } from 'react';

export default function SingleUserProfile({ userId }) {
  const [userData, setUserData] = useState();

  async function singleUser() {
    const response = await fetch(`/api/userProfile/${userId}`);
    let userData = await response.json();
    console.log(userData);
    setUserData(userData);
  }

  useEffect(() => {
    if (userId) {
      singleUser();
    }
  }, [userId]);

  return (
    <>
      <div>Profile For Specific User</div>
      <div>TODO: Other People Profile Component for user {userId}</div>
    </>
  );
}
