/* VISTAS (RUTAS EN BACKEND) */
// La vista se encarga de recibir las peticiones HTTP y enviarlas al controlador adecuado.

// #1 Importar Express
const express = require('express')

// #2 Importar el router de Express
const router = express.Router()

// #3 Importar el controlador, en este caso homeController.js
const homeController = require('../controllers/homeController')

// #4 Definir las rutas de Home
router.post('/homes', homeController.createHome)

module.exports = router
