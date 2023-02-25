import { useEffect } from 'react';
import { withIronSessionSsr } from 'iron-session/next';
import { useRouter } from 'next/router';
import Loader from '../components/loader';

export default function Home({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      async function fetchUser() {
        const response = await fetch('/api/isLoggedIn');
        if (response.ok) {
          router.push('/profile');
        } else {
          router.push('/login');
        }
      }
      fetchUser();
    } else {
      if (user?.logged_in) {
        router.push('/profile');
      }
      router.push('/login');
    }
  }, []);

  return <Loader />;
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let user = { logged_in: false };
    if (req.session.user) {
      user = req.session.user;
    }

    return {
      props: {
        user,
      },
    };
  },
  {
    cookieName: 'oatmeal_cookie',
    password: process.env.APPLICATION_SECRET,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
);
