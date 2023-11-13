'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: "authorId"
      });
    }
  }
  Author.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};