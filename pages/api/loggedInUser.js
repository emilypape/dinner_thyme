import { withIronSession } from 'next-iron-session';
const { User } = require('../../database/models');

async function loggedInUser(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const loggedInUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!loggedInUser) {
    res.status(400).json({ message: 'There is no user with this ID!' });
  }

  return res.status(200).json(loggedInUser);
}

export default withIronSession(loggedInUser, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
