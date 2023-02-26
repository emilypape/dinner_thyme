const { User, Likes, Recipe } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function newLike(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;
}

export default withIronSession(newLike, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
