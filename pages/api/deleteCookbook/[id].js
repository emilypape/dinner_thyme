const { CookBooks, RecipeCollections } = require('../../../database/models');

export default async function deleteRecipe(req, res) {
  let idString = req.url.split('/').pop();
  let cookbookId = parseInt(idString);

  if (cookbookId) {
    const deleteSelectedCookbook = await CookBooks.destroy({
      where: {
        id: cookbookId,
      },
    });
    if (deleteSelectedCookbook) {
      const deleteCookbookRecipes = await RecipeCollections.destroy({
        where: {
          cookbook_id: cookbookId,
        },
      });

      if (deleteCookbookRecipes) {
        res.status(200).json({ message: 'cookbook and recipe collections successfully removed' });
      }
    }
  }
}
