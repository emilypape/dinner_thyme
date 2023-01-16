import { useState, useEffect } from 'react';
import UserFeed from '../components/userFeed';
import Login from '../components/login';
import { withIronSessionSsr } from 'iron-session/next';
import { useRouter } from 'next/router';

export default function Home({ user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(user?.logged_in);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      async function fetchUser() {
        const response = await fetch('/api/isLoggedIn');
        if (response.ok) {
          const userObject = await response.json();
          setIsLoggedIn(userObject);
          router.push('/profile');
        } else {
          router.push('/login');
        }
      }
      fetchUser();
    } else if (user?.logged_in) {
      router.push('/profile');
    } else if (!user?.logged_in) {
      router.push('/login');
    }
  }, []);

  // return <div>{isLoggedIn ? <UserFeed setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}</div>;
  return <div>...loading</div>;
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
