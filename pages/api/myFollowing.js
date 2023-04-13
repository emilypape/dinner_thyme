const { User, Followers } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function myFollowing(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const myFollowing = await Followers.findAll({
    where: {
      follower_id: userId,
    },
    include: {
      model: User,
      attributes: ['id', 'first_name', 'last_name', 'profile_picture', 'username'],
    },
  });

  if (!myFollowing) {
    res.status(400).json({ message: 'You are not currently following any users!' });
  }

  res.status(200).json(myFollowing);
}

export default withIronSession(myFollowing, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
