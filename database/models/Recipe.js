const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_urls: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cook_temperature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cook_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prep_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cook_instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'recipe',
  },
);

module.exports = Recipe;
