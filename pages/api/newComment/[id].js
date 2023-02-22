import { withIronSession } from 'next-iron-session';
const { User, Recipe, Comments } = require('../../../database/models');

async function newComment(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;
  let idString = req.url.split('/').pop();
  let recipeId = parseInt(idString);

  if (user && recipeId) {
    const comment = Comments.create({
      recipe_id: recipeId,
      user_id: userId,
      comment_text: req.body.comment_text,
    });

    res.status(200).json(comment);

    if (!comment) {
      res.status(400).json({ message: 'We are unable to complete this request. Please try again later' });
    }
  }
}

export default withIronSession(newComment, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
