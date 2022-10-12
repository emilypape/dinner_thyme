const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class RecipeCollections extends Model {}

RecipeCollections.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cookbook_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cookBooks',
        key: 'id',
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'recipecollections',
  },
);

module.exports = RecipeCollections;
