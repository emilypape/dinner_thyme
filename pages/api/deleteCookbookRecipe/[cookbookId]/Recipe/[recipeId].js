const { RecipeCollections } = require('../../../../../database/models');

export default async function deleteRecipe(req, res) {
  let recipeIdString = req.url.split('/').pop();
  let cookbookIdString = req.url.split('/')[3];
  let cookbookId = parseInt(cookbookIdString);
  let recipeId = parseInt(recipeIdString);

  if (recipeId && cookbookId) {
    const deleteSelectedRecipeFromCookbook = await RecipeCollections.destroy({
      where: {
        cookbook_id: cookbookId,
        recipe_id: recipeId,
      },
    });

    if (!deleteSelectedRecipeFromCookbook) {
      res.status(400).json({ message: 'there is no cookbook with this recipe' });
    }

    res.status(200).json(deleteSelectedRecipeFromCookbook);
  }
}
