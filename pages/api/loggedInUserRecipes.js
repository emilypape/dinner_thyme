import { withIronSession } from 'next-iron-session';
const { User, Recipe } = require('../../database/models');

async function loggedInUserRecipes(req, res) {
  const { user } = req.session.get();

  const userId = user.user_id;

  const payload = await Recipe.findAll({
    where: {
      user_id: userId,
    },
  });

  if (!payload) {
    res.status(400).json({ message: 'This user does not have any recipes!' });
  }

  return res.status(200).json(payload);
}

export default withIronSession(loggedInUserRecipes, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
