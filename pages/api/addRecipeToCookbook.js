const { RecipeCollections } = require('../../database/models');

export default async function addRecipeToCookbook(req, res) {
  if (req.body) {
    const addToRecipeCollection = await RecipeCollections.create({
      cookbook_id: req.body.cookbook_id,
      recipe_id: req.body.recipe_id,
    });
    res.status(200).json(addToRecipeCollection);

    if (!addToRecipeCollection) {
      res.status(400).json({ message: 'We are unable to complete this request. Please try again later' });
    }
  }
}
