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
      type: DataTypes.TEXT,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    bornDate: {
      type: DataTypes.DATE,
      validate:{
        notEmpty: true,
      },
    },
    domicile: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: true,
      },
    },
    contact: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};