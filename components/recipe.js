import { useState, useEffect } from 'react';

export default function Recipe({ recipeId }) {
  const [recipeData, setRecipeData] = useState([]);

  async function getRecipeData() {
    const response = await fetch(`/api/singleRecipe/${recipeId}`, {
      method: 'Get',
    });

    const recipeData = await response.json();
    setRecipeData(recipeData);
  }

  useEffect(() => {
    getRecipeData();
  }, []);

  return <div>This is our recipe page for recipe {recipeId}</div>;
}
