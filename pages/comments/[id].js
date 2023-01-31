import Nav from '../../components/nav';
import Comments from '../../components/comments';
import { useRouter } from 'next/router';

function RecipeCommentRoute() {
  const router = useRouter();
  const recipeId = router.query.id;
  return (
    <div>
      <Nav />
      <Comments recipeId={recipeId} />
    </div>
  );
}

export default RecipeCommentRoute;
