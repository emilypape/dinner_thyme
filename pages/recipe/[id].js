import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import Recipe from '../../components/recipe';

function SpecificRecipeRoute() {
  const router = useRouter();
  const recipeId = router.query.id;

  return (
    <>
      <Nav />
      <Recipe recipeId={recipeId} />
    </>
  );
}

export default SpecificRecipeRoute;
