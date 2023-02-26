import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import SingleUserProfile from '../../components/singleUserProfile';

function SpecificProfileRoute() {
  const router = useRouter();
  const userId = router.query.id;

  return (
    <>
      <Nav />
      <SingleUserProfile userId={userId} />
    </>
  );
}

export default SpecificProfileRoute;
