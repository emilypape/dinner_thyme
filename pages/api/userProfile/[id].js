import { User, Recipe, Followers } from '../../../database/models';
import { withIronSession } from 'next-iron-session';

async function userProfile(req, res) {
  let { user } = req.session.get();
  let loggedInUserId = user.user_id;
  let idString = req.url.split('/').pop();
  let user_id = parseInt(idString);
  let userProf = await User.findOne({
    where: {
      id: user_id,
    },
    include: [
      {
        model: Recipe,
        required: false,
        where: {
          user_id: user_id,
        },
      },
      {
        model: Followers,
        required: false,
        where: {
          follower_id: loggedInUserId,
        },
      },
    ],
  });

  if (!userProf) {
    res.status(400).json({ message: 'There is no user with this id!' });
  }

  return res.status(200).json(userProf);
}

export default withIronSession(userProfile, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
