import { withIronSession } from 'next-iron-session';
const { User, Followers } = require('../../../database/models');

async function unfollowUser(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;
  const idString = req.url.split('/').pop();
  const followedUserId = parseInt(idString);

  if (userId && followedUserId) {
    const isFollowing = await Followers.findOne({
      where: {
        follower_id: userId,
        following_id: followedUserId,
      },
    });

    if (isFollowing) {
      const unfollow = isFollowing.destroy({});
      res.status(200).json(unfollow);
    }

    if (!isFollowing) {
      const newFollower = await Followers.create({
        follower_id: userId,
        following_id: followedUserId,
      });
      res.status(200).json(newFollower);
    }
  }
}

export default withIronSession(unfollowUser, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
