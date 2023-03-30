import { withIronSession } from 'next-iron-session';
const { CookBooks, Recipe, RecipeCollections } = require('../../database/models');

async function userCookbooks(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;

  if (userId) {
    const cookbooks = await CookBooks.findAll({
      where: {
        user_id: userId,
      },
      include: {
        model: Recipe,
        through: RecipeCollections,
        attributes: ['image_urls'],
      },
    });

    if (!cookbooks) {
      res.status(400).json({ message: 'this user has no cookbooks' });
    }

    res.status(200).json(cookbooks);
  }
}

export default withIronSession(userCookbooks, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
