'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  Funcionario.init({
    description: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Funcionario'
  })
  return Funcionario
};
