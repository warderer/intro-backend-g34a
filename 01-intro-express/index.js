// #1 Llamar a la biblioteca de express (importarla)
const express = require('express')

// #2 Crear una instancia de express
const app = express()

// #2b Configurar express para que pueda recibir datos de tipo JSON
app.use(express.json())

// #3 Definir las rutas del servidor
// Una ruta esta compuesta por dos partes:
// 1. El método HTTP
// 2. La URL
app.get('/', function (req, res) {
  res.send('Hello World')
})

// #4 Levantar el servidor escuchando en un puerto determinado
app.listen(3000, () => {
  console.log('Server running on port 3000 🚀')
})