'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsTo(models.Book, {
        foreignKey: "bookId",
        as: "book"
      });
    }
  }
  Stock.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    qty: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      },
    },
    quality: {
      type: DataTypes.ENUM,
      values: ['good', 'defective'],
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};