import { withIronSession } from 'next-iron-session';
const { Recipe, Ingredients } = require('../../database/models');

async function postRecipe(req, res) {
  const { user } = req.session.get();
  const userId = user.user_id;
  const body = JSON.parse(req.body);

  if (body && userId) {
    const newRecipe = await Recipe.create({
      user_id: userId,
      title: body.title,
      image_urls: body.image_urls,
      cook_temperature: body.cook_temperature,
      cook_time: body.cook_time,
      prep_time: body.prep_time,
      cook_instructions: body.cook_instructions,
    });

    if (newRecipe) {
      let recipeId = newRecipe.id;

      const newIngredients = await Ingredients.create({
        recipe_id: recipeId,
        ingredient_list: body.ingredient_list,
      });

      if (newIngredients) {
        res.status(200).json({ message: 'recipe and ingredients succesfully created and attached!' });
      }
    }
  }
}

export default withIronSession(postRecipe, {
  password: process.env.APPLICATION_SECRET,
  cookieName: 'oatmeal_cookie',
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
