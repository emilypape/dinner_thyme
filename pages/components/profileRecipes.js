import { useState, useEffect } from 'react';

export default function ProfileRecipes({ user }) {
  const [recipes, setRecipes] = useState();

  async function fetchRecipes() {
    const response = await fetch('/api/loggedInUserRecipes', {
      method: 'GET',
    });

    let recipeData = await response;
    setRecipes(recipeData);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);
  return <div></div>;
}
