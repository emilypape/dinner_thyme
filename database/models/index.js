const User = require('./User');
const Comments = require('./Comments');
const CookBooks = require('./CookBooks');
const Followers = require('./Followers');
const Ingredients = require('./Ingredients');
const Likes = require('./Likes');
const Recipe = require('./Recipe');
const RecipeCollections = require('./RecipeCollections');
const Replies = require('./Replies');

// Create associations
// User associations
User.hasMany(Recipe, {
  foreignKey: 'user_id',
});

User.hasMany(Likes, {
  foreignKey: 'user_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

User.hasMany(Replies, {
  foreignKey: 'user_id',
});

User.hasMany(Followers, {
  foreignKey: 'follower_id',
  foreignKey: 'following_id',
});

User.hasMany(CookBooks, {
  foreignKey: 'user_id',
});

// recipe associations
Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.hasOne(Ingredients, {
  foreignKey: 'recipe_id',
});

Recipe.hasMany(Likes, {
  foreignKey: 'recipe_id',
});

Recipe.hasMany(Comments, {
  foreignKey: 'recipe_id',
});

Recipe.belongsToMany(RecipeCollections, {
  foreignKey: 'recipe_id',
});

// ingredients associations
Ingredients.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

// like associations
Likes.belongsTo(User, {
  foreignKey: 'user_id',
});

Likes.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

// comment associations
Comments.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

Comments.hasMany(Replies, {
  foreignKey: 'comment_id',
});

// replies associations
Replies.belongsTo(Comments, {
  foreignKey: 'comment_id',
});

Replies.belongsTo(User, {
  foreignKey: 'user_id',
});

// follower associations
Followers.belongsTo(User, {
  foreignKey: 'follower_id',
  foreignKey: 'following_id',
});

// cookbooks associations
CookBooks.belongsTo(User, {
  foreignKey: 'user_id',
});

CookBooks.hasOne(RecipeCollections, {
  foreignKey: 'cookbook_id',
});

// recipecollections associations

RecipeCollections.hasMany(Recipe, {
  foreignKey: 'recipe_id',
});

RecipeCollections.belongsTo(CookBooks, {
  foreignKey: 'cookbook_id',
});

module.exports = { User, Comments, CookBooks, Followers, Ingredients, Likes, Recipe, RecipeCollections, Replies };
