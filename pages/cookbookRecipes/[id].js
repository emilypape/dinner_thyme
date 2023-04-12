import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import CookbookRecipes from '../../components/CookbookRecipes';

export default function SpecificCookbookRoute() {
  const router = useRouter();
  const cookbookId = router.query.id;
  return (
    <div>
      <Nav />
      <CookbookRecipes cookbookId={cookbookId} />
    </div>
  );
}
