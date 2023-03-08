const { User, Followers, Recipe, Comments, Likes } = require('../../database/models');

import { withIronSession } from 'next-iron-session';

async function myFollwingPosts(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const myFollowings = await Followers.findAll({
    where: {
      follower_id: userId,
    },
  });

  if (myFollowings) {
    const followingIds = myFollowings.map((el) => el.following_id);
    const myFollowingPosts = await Recipe.findAll({
      where: {
        user_id: followingIds,
      },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
        },
        {
          model: Likes,
          required: false,
          where: {
            user_id: userId,
          },
        },
        {
          model: Comments,
          required: false,
          attributes: ['comment_text'],
          include: {
            model: User,
            attributes: ['id', 'username'],
          },
        },
      ],
    });
    res.status(200).json(myFollowingPosts);
    if (!myFollowingPosts) {
      res.status(400).json({ message: 'You are not currently following any users!' });
    }
  }
}

export default withIronSession(myFollwingPosts, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
