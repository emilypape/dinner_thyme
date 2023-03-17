const { Recipe } = require('../../database/models');

export default async function recipeSuggestions(req, res) {
  let tryTheseRecipes = await (await Recipe.findAll({ attributes: ['id', 'image_urls'] })).slice(0, 4);

  if (!tryTheseRecipes) {
    res.status(400).json({ message: 'The request was unsuccessful' });
  }
  res.status(200).json(tryTheseRecipes);
}
