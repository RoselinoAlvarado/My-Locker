'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Funcionario.init({
      funcionario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    cargo: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    setor: DataTypes.STRING,
    data_de_registro: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Funcionario',
    timestamps: false
  });
  return Funcionario;
};