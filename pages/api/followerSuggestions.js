const { Op } = require('sequelize');
const { User, Followers } = require('../../database/models');

import { withIronSession } from 'next-iron-session';

async function FollowerSuggestions(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const followings = await Followers.findAll({
    where: {
      follower_id: userId,
    },
    attributes: ['following_id'],
  });

  const notRecommendedIds = followings.map((following) => following.following_id);

  let suggestions = await User.findAll({
    where: {
      id: {
        [Op.notIn]: [...notRecommendedIds, userId],
      },
    },
  });

  suggestions = suggestions.sort(() => Math.random() - 0.5).slice(0, 5);

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
