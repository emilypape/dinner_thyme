const { CookBooks, Recipe, RecipeCollections } = require('../../../database/models');

export default async function Cookbooks(req, res) {
  let idString = req.url.split('/').pop();
  let userId = parseInt(idString);

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
