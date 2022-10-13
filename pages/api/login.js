const { User } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const dbUserData = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!dbUserData) {
    res.status(400).json({ message: 'There is no current user with this username.' });
    return;
  }

  const validPassword = dbUserData.checkPassword(req.body.hashed_password);
  if (!validPassword) {
    res.status(400).json({ message: 'Invalid Password!' });
    return;
  }
  const user_name = dbUserData.username;
  const first_name = dbUserData.first_name;
  const user_id = dbUserData.id;

  req.session.set('user', {
    username: user_name,
    name: first_name,
    user_id: user_id,
    logged_in: true,
  });

  await req.session.save();

  res.status(200).json({ message: 'Login Success!' });
}

export default withIronSession(handler, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
