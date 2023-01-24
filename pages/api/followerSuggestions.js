const { User, Followers } = require('../../database/models');

import { withIronSession } from 'next-iron-session';

async function FollowerSuggestions(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const followSuggestions = await Followers.findAll({
    include: {
      model: User,
      attributes: ['username', 'profile_picture', 'id', 'first_name'],
    },
  });

  let suggestions = followSuggestions.filter((el) => el.follower_id !== userId).slice(0, 5);

  if (!suggestions) {
    res.status(400).json({ message: 'There are no suggested users!' });
  }

  res.status(200).json(suggestions);
}

export default withIronSession(FollowerSuggestions, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
