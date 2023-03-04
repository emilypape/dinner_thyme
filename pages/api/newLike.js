const { User, Likes, Recipe } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function newLike(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;
  let idString = req.url.split('/').pop();
  const recipeId = parseInt(idString);

  if (userId && recipeId) {
    const isLiked = await Likes.findOne({
      where: {
        user_id: userId,
        recipe_id: recipeId,
      },
    });

    if (isLiked) {
      res.status(200).json({ message: 'This user has already liked this post' });
    }

    if (!isLiked) {
      const newPostLike = await Likes.create({
        recipe_id: recipe_id,
        user_id: userId,
      });

      res.status(200).json(newPostLike);
    }
  }
}

export default withIronSession(newLike, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
