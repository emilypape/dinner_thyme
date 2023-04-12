const { CookBooks, Recipe, RecipeCollections } = require('../../../database/models');

export default async function CookbookRecipes(req, res) {
  let idString = req.url.split('/').pop();
  let cookbookId = parseInt(idString);

  if (cookbookId) {
    const cookbooks = await CookBooks.findOne({
      where: {
        id: cookbookId,
      },
      include: {
        model: Recipe,
        through: RecipeCollections,
      },
    });

    if (!cookbooks) {
      res.status(400).json({ message: 'there is no cookbook with this id' });
    }

    res.status(200).json(cookbooks);
  }
}
