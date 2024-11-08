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

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

// UPDATE
const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // ¿Qué datos voy a actualizar?
    .from('homes') // ¿En qué tabla?
    .where('house_id', houseId) // ¿Dónde?
    .returning('*') // ¿Qué datos quiero que me regrese?
}

// DELETE

module.exports = {
  create,
  findAll,
  findOne,
  update
}
