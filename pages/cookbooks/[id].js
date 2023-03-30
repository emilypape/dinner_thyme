import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import SingleUserCookbooks from '../../components/singleUserCookbooks';

export default function SpecificCookbookRoute() {
  const router = useRouter();
  const userId = router.query.id;
  return (
    <div>
      <Nav />
      <SingleUserCookbooks userId={userId} />
    </div>
  );
}
