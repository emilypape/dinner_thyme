const { Recipe, Ingredients } = require('../../../database/models');

export default async function deleteRecipe(req, res) {
  let idString = req.url.split('/').pop();
  let recipeId = parseInt(idString);

  if (recipeId) {
    const deleteSelectedRecipe = await Recipe.destroy({
      where: {
        id: recipeId,
      },
    });
    if (deleteSelectedRecipe) {
      const deleteIngredients = Ingredients.destroy({
        where: {
          recipe_id: recipeId,
        },
      });

      if (deleteIngredients) {
        res.status(200).json({ message: 'recipe and ingredients successfully removed' });
      }
    }
  }
}
