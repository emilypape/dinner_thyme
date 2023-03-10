const { User, Recipe, Comments, Likes } = require('../../../database/models');

async function singleRecipe(req, res) {
  const idString = req.url.split('/').pop();
  const recipeId = parseInt(idString);

  if (recipeId) {
    const singleRecipe = await Recipe.findOne({
      where: {
        id: recipeId,
      },
      include: [
        {
          model: User,
          attributes: ['profile_picture', 'id', 'username', 'first_name'],
        },
        {
          model: Comments,
          required: false,
          attributes: ['comment_text'],
          include: {
            model: User,
            attributes: ['id', 'username', 'profile_picture'],
          },
        },
      ],
    });
    res.status(200).json(singleRecipe);
    if (!singleRecipe) {
      res.status(400).json({ message: 'There is no recipe with this id!' });
    }
  }
}

export default singleRecipe;
