const { User, CookBooks, Recipe, RecipeCollections } = require('../../database/models');
import { withIronSession } from 'next-iron-session';

async function myLikes(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const myCookbooks = await CookBooks.findAll({
    where: {
      user_id: userId,
    },
    include: {
      model: Recipe,
      include: {
        model: RecipeCollections,
      },
    },
  });

  if (!myCookbooks) {
    res.status(400).json({ message: 'You do not have any cookbooks started at this time!' });
  }

  res.status(200).json(myCookbooks);
}

export default withIronSession(myLikes, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
