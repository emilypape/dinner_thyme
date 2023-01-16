import Nav from '../components/nav';
import { useRouter } from 'next/router';

function SpecificProfileRoute() {
  const router = useRouter();
  const userId = router.query.id;

  return (
    <>
      <Nav />
      <div>Profile For Specific User</div>
      <div>TODO: Other People Profile Component for user {userId}</div>
    </>
  );
}

export default SpecificProfileRoute;
