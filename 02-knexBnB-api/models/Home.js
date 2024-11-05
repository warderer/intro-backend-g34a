/* MODELO */
// El modelo trae los datos de la base de datos.
// NO se encarga de validar datos ni resolver promesas (eso lo hace el controlador la arquitectura MVC).

// #1 Importar Knex: Traer la conexión a la base de datos adecuada.
const knex = require('../config')

// #2 Crear funciones que me permitan interactuar con la base de datos.
// CRUD: Create, Read, Update, Delete

// CREATE
const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar?
    .into('homes') // ¿En qué tabla?
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at']) // ¿Qué datos quiero que me regrese?
}
// READ
const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

// UPDATE

// DELETE

module.exports = {
  create,
  findAll
}
