import { withIronSession } from 'next-iron-session';

async function isLoggedIn(req, res) {
  let { user } = req.session.get();

  if (!user) {
    return res.status(401).json({ message: 'no session available' });
  } else {
    return res.status(200).json(user);
  }
}

export default withIronSession(isLoggedIn, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
