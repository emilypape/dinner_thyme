const { Recipe } = require('../../database/models');

export default async function recipeSuggestions(req, res) {
  let tryTheseRecipes = await await Recipe.findAll({ attributes: ['id', 'image_urls'] });

  if (tryTheseRecipes) {
    let recipes = [...tryTheseRecipes].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 4);
    res.status(200).json(recipes);
  }

  if (!tryTheseRecipes) {
    res.status(400).json({ message: 'The request was unsuccessful' });
  }
}
