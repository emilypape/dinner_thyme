const { User, Recipe, Comments, Replies } = require('../../../database/models');

async function recipeComments(req, res) {
  let idString = req.url.split('/').pop();
  let recipe_id = parseInt(idString);

  if (recipe_id) {
    const recipeData = await Recipe.findOne({
      where: {
        id: recipe_id,
      },
      include: {
        model: Comments,
        required: false,
        attributes: ['comment_text'],
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'profile_picture'],
          },
          {
            model: Replies,
            attributes: ['reply_text'],
            include: {
              model: User,
              attributes: ['id', 'username', 'profile_picture'],
            },
          },
        ],
      },
    });
    res.status(200).json(recipeData);
  }
  if (!recipeData) {
    res.status(400).json({ message: 'This recipe doesnt have any comments' });
  }
}

export default recipeComments;
