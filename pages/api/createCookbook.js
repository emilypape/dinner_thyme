import { withIronSession } from 'next-iron-session';
import { useId } from 'react';
const { User, CookBooks } = require('../../database/models');

async function createCookbook(req, res) {
  const user = req.session.get();

  const userId = user.user.user_id;
  const { title } = JSON.parse(req.body);

  const isUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (isUser && title) {
    await CookBooks.create({ user_id: userId, title });
  } else {
    res.status(400).json({ message: 'A error occured when creating cookbooks' });
    return;
  }

  res.status(200).json('Cookbook Creation Success');
  return;
}

export default withIronSession(createCookbook, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
