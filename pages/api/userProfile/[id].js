import { User, Recipe } from '../../../database/models';

async function userProfile(req, res) {
  let idString = req.url.split('/').pop();
  let user_id = parseInt(idString);
  let user = await User.findOne({
    where: {
      id: user_id,
    },
    include: {
      model: Recipe,
      where: {
        user_id: user_id,
      },
    },
  });

  if (!user) {
    res.status(400).json({ message: 'There is no user with this id!' });
  }

  return res.status(200).json(user);
}

export default userProfile;
