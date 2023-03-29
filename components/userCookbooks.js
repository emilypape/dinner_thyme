import { useState, useEffect } from 'react';

export default function UserCookbooks() {
  const [cookbooks, setCookbooks] = useState([]);
  async function getCookbooks() {
    const response = await fetch('/api/userCookbooks', {
      method: 'get',
    });

    const cookbookData = await response.json();

    setCookbooks(cookbookData);
  }

  useEffect(() => {
    getCookbooks();
  }, []);
  return <div>This is our logged in users cookbook page</div>;
}
