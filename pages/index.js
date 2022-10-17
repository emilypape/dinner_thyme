import { useState, useEffect } from 'react';
import UserFeed from './components/userFeed';
import Login from './components/login';
import { withIronSessionSsr } from 'iron-session/next';

export default function Home({ user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);

  useEffect(() => {
    // FETCH A FUKIN API ROUTE THAT CHECKS IF USER LOGGED IN AND RETURNS USER
    // fetch to api/isLoggedIn
    // make it

    setIsLoggedIn(isLoggedIn);
  }, []);

  return <div>{isLoggedIn ? <UserFeed /> : <Login />}</div>;
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

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
