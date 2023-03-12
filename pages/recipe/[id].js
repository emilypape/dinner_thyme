import { useState, useEffect } from 'react';
import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import Recipe from '../../components/recipe';

function SpecificRecipeRoute() {
  const [recipeId, setRecipeId] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setRecipeId(id);
    }
  });

  return (
    recipeId && (
      <>
        <Nav />
        <Recipe recipeId={recipeId} />
      </>
    )
  );
}

export default SpecificRecipeRoute;
