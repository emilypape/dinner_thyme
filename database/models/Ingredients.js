const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Ingredients extends Model {}

Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
    ingredient_list: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'ingredients',
  },
);

module.exports = Ingredients;
