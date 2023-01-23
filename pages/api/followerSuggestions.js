const { User, Followers } = require('../../database/models');

import { withIronSession } from 'next-iron-session';

async function FollowerSuggestions(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const followSuggestions = await Followers.findAll({
    where: {
      follower_id: !userId,
    },
    include: {
      model: User,
      attributes: ['username', 'profile_picture', 'id'],
    },
  });

  if (!followSuggestions) {
    res.status(400).json({ message: 'There are no suggested users!' });
  }

  res.status(200).json(followSuggestions);
}

export default withIronSession(FollowerSuggestions, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
