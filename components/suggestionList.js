import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SuggestionList() {
  const [suggestionList, setSuggestionList] = useState([]);
  async function getUserSuggestions() {
    const response = await fetch('/api/followerSuggestions', {
      method: 'Get',
    });
    let suggestions = await response.json();
    setSuggestionList(suggestions);
  }

  useEffect(() => {
    getUserSuggestions();
  }, []);

  console.log(suggestionList);
  return <div>This is my suggestion list </div>;
}
