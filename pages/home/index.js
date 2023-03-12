import LandingPage from '../../components/landingPage';
import useUser from '../../utils/useUser';

function LandingPageRoute() {
  const { user } = useUser({
    redirectTo: '/feed',
    redirectIfFound: true,
  })

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default LandingPageRoute;
