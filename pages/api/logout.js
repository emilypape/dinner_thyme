import { withIronSession } from 'next-iron-session';

function handler(req, res, session) {
  req.session.destroy();
  res.send('Logged out');
}

export default withIronSession(handler, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
