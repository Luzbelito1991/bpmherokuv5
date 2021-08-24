const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaUsuarios = db.define('usuarios',{
    id_usuario:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false
    },
    nombre:{type:Sequelize.STRING},
    apellido:{type:Sequelize.STRING},
    dni:{type:Sequelize.INTEGER},
    email: { type: Sequelize.STRING},
    password: {type: Sequelize.STRING}
      // Timestamps
      //createdAt: Sequelize.DATE,
      //updatedAt: Sequelize.DATE,
  });




module.exports = tablaUsuarios