const { User } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  // check to see if a user with this info exists already
  // if it does, you can't create a new one or we get a collision
  // respond with a failure code that tells user the info is already in use
  const isUser = await User.findOne({
    where: {
      username: req.body.username,
      email: req.body.email,
    },
  });

  let dbUserData;
  if (!isUser) {
    dbUserData = await User.create({
      first_name: req.body.first_name,
      username: req.body.username,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
    });
  } else {
    res.status(400).json({ message: 'A user with these credentials already exists.' });
    return;
  }

  if (!dbUserData) {
    res.status(400).json({ message: 'There was an error creating this user.' });
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

  res.status(200).json({ message: 'Signup Success!' });
  return;
}

export default withIronSession(handler, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_chocolate_chip_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
