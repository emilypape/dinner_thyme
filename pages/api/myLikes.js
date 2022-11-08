const { User, Likes, Recipe } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function myLikes(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const likes = await Likes.findAll({
    where: {
      user_id: userId,
    },
    include: {
      model: Recipe,
    },
  });

  if (!likes) {
    res.status(400).json({ message: 'You dont have any likes at this time!' });
  }

  res.status(200).json(likes);
}

export default withIronSession(myLikes, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
