import { withIronSession } from 'next-iron-session';
const { User } = require('../../database/models');

async function editProfilePicture(req, res) {
  const user = req.session.get();

  const userId = user.user.user_id;

  const isUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  let updatedUser;
  if (isUser) {
    updatedUser = await isUser.update({
      profile_picture: req.body.profile_picture,
    });
  } else {
    res.status(400).json({ message: 'A user with these credentials does not exist.' });
    return;
  }

  res.status(200).json(updatedUser);
  return;
}

export default withIronSession(editProfilePicture, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
