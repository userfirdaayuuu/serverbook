'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: "authorId",
        as: "authors"
      });
      Book.hasMany(models.Stock, {
        foreignKey: 'bookId'
      });
      Book.hasMany(models.Review, {
        foreignKey: "bookId"       
      });
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255]        
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate:{
        len: [1,255],
      },
    },
    genre: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
      },
    },
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};