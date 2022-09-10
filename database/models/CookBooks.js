const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class CookBooks extends Model {}

CookBooks.init(
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
        model: 'user',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'cookBooks',
  },
);

module.exports = CookBooks;
